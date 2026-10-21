// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/sail/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-msc-thesis-topics",
          title: "MSc thesis topics",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/msc-thesis/";
          },
        },{id: "news-new-web-page",
          title: 'New web page!',
          description: "",
          section: "News",},{id: "news-msc-thesis-topics-for-2022-2023-are-now-available",
          title: 'MSc thesis topics for 2022-2023 are now available.',
          description: "",
          section: "News",},{id: "news-congratulations-to-joeri-for-defending-his-phd-thesis-advances-in-simulation-based-inference-towards-the-automation-of-the-scientific-method-through-learning-algorithms-mag",
          title: 'Congratulations to Joeri for defending his PhD thesis Advances in Simulation-Based Inference: Towards...',
          description: "",
          section: "News",},{id: "news-new-msc-thesis-topics-for-2022-2023-have-been-added",
          title: 'New MSc thesis topics for 2022-2023 have been added.',
          description: "",
          section: "News",},{id: "news-congratulations-to-antoine-for-successfully-defending-his-phd-thesis-inductive-bias-in-deep-probabilistic-modelling-bulb",
          title: 'Congratulations to Antoine for successfully defending his PhD thesis Inductive Bias In Deep...',
          description: "",
          section: "News",},{id: "news-level-up-i-have-been-promoted-to-professor",
          title: 'Level up! I have been promoted to Professor.',
          description: "",
          section: "News",},{id: "news-msc-thesis-topics-for-2023-2024-are-now-available-check-regularly-for-updates",
          title: 'MSc thesis topics for 2023-2024 are now available. Check regularly for updates.',
          description: "",
          section: "News",},{id: "news-i-have-been-awarded-an-frs-pdr-grant-on-particle-physics-event-generation-with-deep-neural-networks-with-fabio-maltoni-and-tilman-plehn-a-phd-position-is-now-available-on-simulation-based-inference-for-high-energy-physics-apply-now",
          title: 'I have been awarded an FRS-PDR grant on particle physics event generation with...',
          description: "",
          section: "News",},{id: "news-msc-thesis-topics-for-2024-2025-are-now-available",
          title: 'MSc thesis topics for 2024-2025 are now available.',
          description: "",
          section: "News",},{id: "news-congratulations-to-norman-for-successfully-defending-his-phd-thesis-simulation-based-inference-for-robotic-grasping-wrench",
          title: 'Congratulations to Norman for successfully defending his PhD thesis Simulation-based inference for robotic...',
          description: "",
          section: "News",},{id: "news-welcome-to-lénea-luís-joining-us-as-a-phd-student",
          title: 'Welcome to Lénea Luís, joining us as a PhD student.',
          description: "",
          section: "News",},{id: "news-congratulations-to-maxime-for-defending-his-phd-thesis-deep-learning-based-focal-plane-wavefront-sensing-for-exoplanet-imaging-telescope",
          title: 'Congratulations to Maxime for defending his PhD thesis Deep learning-based focal plane wavefront...',
          description: "",
          section: "News",},{id: "news-i-have-been-awarded-an-frs-fnrs-mis-grant-on-foundation-models-for-science-three-positions-are-available-for-phd-students-and-postdocs-apply-now",
          title: 'I have been awarded an FRS-FNRS MIS grant on foundation models for science....',
          description: "",
          section: "News",},{id: "news-welcome-to-elise-faulx-joining-the-team-as-a-phd-student",
          title: 'Welcome to Elise Faulx, joining the team as a PhD student.',
          description: "",
          section: "News",},{id: "news-congratulations-to-arnaud-for-successfully-defending-his-phd-thesis-towards-reliable-simulation-based-inference-computer",
          title: 'Congratulations to Arnaud for successfully defending his PhD thesis Towards Reliable Simulation-based Inference...',
          description: "",
          section: "News",},{id: "news-welcome-to-thomas-savary-who-is-joining-the-lab-as-an-intern-from-ens-paris-saclay",
          title: 'Welcome to Thomas Savary, who is joining the lab as an intern from...',
          description: "",
          section: "News",},{id: "news-msc-thesis-topics-for-2025-2026-are-now-available",
          title: 'MSc thesis topics for 2025-2026 are now available.',
          description: "",
          section: "News",},{id: "news-we-are-proud-to-release-our-first-public-version-of-appa-bison-a-1-5b-parameter-probabilistic-weather-model-for-global-data-assimilation-earth-africa-check-out-our-project-page-for-details-and-videos",
          title: 'We are proud to release our first public version of Appa :bison:, a...',
          description: "",
          section: "News",},{id: "news-i-have-been-awarded-an-arc-actions-de-recherche-concertées-grant-for-mar-ai-a-joint-project-with-xavier-fettweis-for-building-an-ai-emulator-of-the-mar-regional-climate-model-apply-now",
          title: 'I have been awarded an ARC (Actions de Recherche Concertées) grant for MAR.ai,...',
          description: "",
          section: "News",},{id: "news-congratulations-to-malavika-for-defending-her-phd-thesis-exoplanet-atmospheric-characterization-using-amortized-simulation-based-inference-partly-sunny",
          title: 'Congratulations to Malavika for defending her PhD thesis Exoplanet atmospheric characterization using amortized...',
          description: "",
          section: "News",},{id: "news-welcome-to-fanny-bodart-joining-the-team-as-a-phd-student",
          title: 'Welcome to Fanny Bodart, joining the team as a PhD student.',
          description: "",
          section: "News",},{id: "news-welcome-to-thomas-savary-yakup-emre-şahin-and-sacha-peters-joining-us-as-phd-students-we-are-excited-to-have-you-on-board-positions-advertised-below-are-now-all-filled",
          title: 'Welcome to Thomas Savary, Yakup Emre Şahin and Sacha Peters, joining us as...',
          description: "",
          section: "News",},{id: "news-i-have-been-elected-as-member-of-the-collegium-of-the-royal-academy-of-science-letters-and-fine-arts-of-belgium",
          title: 'I have been elected as Member of the Collegium of the Royal Academy...',
          description: "",
          section: "News",},{id: "news-congratulations-to-françois-for-defending-his-phd-thesis-generative-modeling-in-large-scale-dynamical-systems-enjoy-london-umbrella",
          title: 'Congratulations to François for defending his PhD thesis Generative modeling in large-scale dynamical...',
          description: "",
          section: "News",},{id: "news-msc-thesis-topics-for-2026-2027-are-now-available-on-the-msc-thesis-page-topics-are-tentative-and-subject-to-change-so-feel-free-to-come-and-discuss-with-me-if-you-are-interested-in-any-of-them-or-if-you-have-other-ideas",
          title: 'MSc thesis topics for 2026-2027 are now available on the MSc thesis page....',
          description: "",
          section: "News",},{id: "news-thomas-paper-training-free-bayesian-filtering-with-generative-emulators-has-been-accepted-at-icml-2026-as-an-oral-spotlight-presentation-congratulations",
          title: 'Thomas’ paper Training-Free Bayesian Filtering with Generative Emulators has been accepted at ICML...',
          description: "",
          section: "News",},{id: "news-new-msc-thesis-for-2026-2027-in-the-fields-of-astronomy-health-and-sports-broadcasting-are-now-available-check-out-the-details-and-contact-us-if-you-are-interested-in-any-of-the-topics",
          title: 'New MSc thesis for 2026-2027 in the fields of astronomy, health, and sports...',
          description: "",
          section: "News",},{id: "news-i-released-atrophy-a-short-noir-novella-about-learning-and-unlearning-in-the-age-of-ai-a-computer-science-freshman-an-ai-tab-always-open-every-sentence-was-written-by-claude-free-to-read-in-english-and-french-sources-on-github",
          title: 'I released Atrophy, a short noir novella about learning, and unlearning, in the...',
          description: "",
          section: "News",},{id: "news-omer-s-paper-predict-project-renoise-sampling-diffusion-models-under-hard-constraints-has-been-accepted-at-neurips-2026-congratulations",
          title: 'Omer’s paper Predict-Project-Renoise: Sampling Diffusion Models under Hard Constraints has been accepted at...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67.%6C%6F%75%70%70%65@%75%6C%69%65%67%65.%62%65", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/glouppe.bsky.social", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/glouppe", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=F_77d4QAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
