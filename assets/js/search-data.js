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
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-new-web-page",
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
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/glouppe.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67.%6C%6F%75%70%70%65@%75%6C%69%65%67%65.%62%65", "_blank");
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
