// Landing-page hero: a turbulent flow x seen through a coarse instrument y.
// The canvas shows the video block-averaged into an observation y. A soft lens
// that follows the pointer, or drifts on its own, reveals the full-resolution
// flow x and leaves a trail that slowly fades back into the observation.
// The legend in the corner of the hero says which is which.
(function () {
  var hero = document.querySelector(".hero");
  if (!hero) return;
  var video = hero.querySelector(".hero-video");
  var canvas = hero.querySelector(".hero-canvas");
  var ctx = canvas.getContext("2d");

  var BLOCK = 24; // block size of the observation, in CSS pixels
  var RADIUS = 120; // lens radius, in CSS pixels
  var TRAIL = 2.2; // lifetime of the trail, in seconds
  var MASK_SCALE = 0.25; // resolution of the reveal mask, relative to CSS pixels

  function canvas2d() {
    var c = document.createElement("canvas");
    return [c, c.getContext("2d")];
  }
  var small = canvas2d(); // one pixel per block
  var full = canvas2d(); // the revealed full-resolution frame
  var mask = canvas2d(); // where x is revealed
  var disc = canvas2d(); // soft disc sprite, drawn into the mask

  var dpr = 1;
  var width = 0;
  var height = 0;
  var pointer = null; // pointer position, while it is over the hero
  var pos = { x: 0, y: 0 }; // eased lens position
  var trail = []; // recent lens positions, with their timestamps
  var t0 = null;
  var visible = true; // whether the hero is on screen
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Colours follow the theme: icefire on dark, its companion vlag on light.
  // The video has no src in the page, so only the clip for the theme loads.
  function dark() {
    return document.documentElement.getAttribute("data-theme") === "dark";
  }
  function pickVideo() {
    var src = dark() ? video.dataset.dark : video.dataset.light;
    if (video.getAttribute("src") === src) return;
    var time = video.currentTime;
    video.autoplay = !reduced;
    video.setAttribute("src", src);
    video.addEventListener(
      "loadedmetadata",
      function () {
        video.currentTime = time;
        if (!reduced) video.play();
      },
      { once: true }
    );
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = hero.clientWidth;
    height = hero.clientHeight;
    canvas.width = full[0].width = Math.round(width * dpr);
    canvas.height = full[0].height = Math.round(height * dpr);
    mask[0].width = Math.ceil(width * MASK_SCALE);
    mask[0].height = Math.ceil(height * MASK_SCALE);

    var r = Math.ceil(RADIUS * MASK_SCALE);
    disc[0].width = disc[0].height = 2 * r;
    var g = disc[1].createRadialGradient(r, r, 0, r, r, r);
    g.addColorStop(0, "rgba(0,0,0,1)");
    g.addColorStop(0.55, "rgba(0,0,0,0.9)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    disc[1].fillStyle = g;
    disc[1].fillRect(0, 0, 2 * r, 2 * r);
  }

  // Source rectangle of the video that covers the hero (object-fit: cover).
  function cover() {
    var vw = video.videoWidth;
    var vh = video.videoHeight;
    var scale = Math.max(width / vw, height / vh);
    var sw = width / scale;
    var sh = height / scale;
    return [(vw - sw) / 2, (vh - sh) / 2, sw, sh];
  }

  function drawObservation(src) {
    var block = BLOCK;
    var cols = Math.max(1, Math.ceil(width / block));
    var rows = Math.max(1, Math.ceil(height / block));
    small[0].width = cols;
    small[0].height = rows;
    small[1].drawImage(video, src[0], src[1], src[2], src[3], 0, 0, cols, rows);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(small[0], 0, 0, cols * block * dpr, rows * block * dpr);

    // Faint seams between blocks, like the pixels of a detector
    ctx.fillStyle = dark() ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.35)";
    var w = Math.max(1, Math.round(dpr));
    for (var i = 1; i < cols; i++) ctx.fillRect(Math.round(i * block * dpr), 0, w, canvas.height);
    for (var j = 1; j < rows; j++) ctx.fillRect(0, Math.round(j * block * dpr), canvas.width, w);
  }

  function drawReveal(src, t) {
    // The mask: the lens and its trail, fading with age
    var m = mask[1];
    m.clearRect(0, 0, mask[0].width, mask[0].height);
    var r = disc[0].width / 2;
    for (var i = 0; i < trail.length; i++) {
      var life = 1 - (t - trail[i].t) / TRAIL;
      if (life <= 0) continue;
      var s = 0.55 + 0.45 * life;
      m.globalAlpha = Math.pow(life, 1.6);
      m.drawImage(
        disc[0],
        trail[i].x * MASK_SCALE - r * s,
        trail[i].y * MASK_SCALE - r * s,
        2 * r * s,
        2 * r * s
      );
    }
    m.globalAlpha = 1;

    // x, cut out by the mask
    var f = full[1];
    f.globalCompositeOperation = "source-over";
    f.drawImage(video, src[0], src[1], src[2], src[3], 0, 0, full[0].width, full[0].height);
    f.globalCompositeOperation = "destination-in";
    f.imageSmoothingEnabled = true;
    f.drawImage(mask[0], 0, 0, full[0].width, full[0].height);

    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(full[0], 0, 0);
  }

  function frame(now) {
    if (video.readyState >= 2 && width > 0) {
      if (t0 === null) t0 = now;
      var t = (now - t0) / 1000;
      var src = cover();

      // Lens target: the pointer, or a slow Lissajous drift
      var target = pointer || {
        x: width * (0.62 + 0.3 * Math.sin(0.21 * t)),
        y: height * (0.5 + 0.3 * Math.sin(0.34 * t + 1.3)),
      };
      var k = pointer ? 0.2 : 0.05;
      pos.x += (target.x - pos.x) * k;
      pos.y += (target.y - pos.y) * k;

      trail.push({ x: pos.x, y: pos.y, t: t });
      while (trail.length && t - trail[0].t > TRAIL) trail.shift();

      drawObservation(src);
      drawReveal(src, t);
    }
    if (!reduced && visible) requestAnimationFrame(frame);
  }

  hero.addEventListener("pointermove", function (e) {
    var rect = hero.getBoundingClientRect();
    pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  });
  hero.addEventListener("pointerleave", function () {
    pointer = null;
  });
  window.addEventListener("resize", function () {
    resize();
    if (reduced) frame(performance.now());
  });

  pickVideo();
  new MutationObserver(pickVideo).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  // Stop drawing, and decoding, while the hero is scrolled out of view
  if (!reduced && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      var was = visible;
      visible = entries[0].isIntersecting;
      if (visible && !was) {
        video.play();
        requestAnimationFrame(frame);
      } else if (!visible) {
        video.pause();
      }
    }).observe(hero);
  }

  resize();
  pos = { x: width * 0.62, y: height * 0.5 };
  hero.classList.add("hero-live");

  if (reduced) {
    // A single still frame: the observation, with the lens at rest.
    video.pause();
    video.addEventListener("loadeddata", function () {
      frame(performance.now());
    });
    if (video.readyState >= 2) frame(performance.now());
  } else {
    requestAnimationFrame(frame);
  }
})();
