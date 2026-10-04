/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Daffa Radityo",
  title: "Hi, I'm Daffa Radityo Adjefirmansyah",
  subTitle: emoji(
    "I'm an Agricultural Industrial Engineering undergraduate at Universitas Brawijaya, exploring the intersection of technology, business, and industrial systems. I'm developing my skills in Web Development, Web3, Integrated Supply Chain Management, AI Prompting, and Financial Markets through continuous learning and hands-on projects."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Radit024",
  linkedin: "https://www.linkedin.com/in/daffaradityoadjiefirmansyah/",
  gmail: "daffaradityoa03@gmail.com",
  facebook: "https://www.facebook.com/daffa.radityo.58",
  instagram: "https://www.instagram.com/daffaradityoadjiefirmansyah/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills & Interests",
  subTitle: "EXPLORING TECHNOLOGY, BUSINESS, AND INDUSTRIAL SYSTEMS",
  skills: [
    "Web Development / Pengembangan Web, Web Design, and User Interface Design.",
    "Web3, Blockchain Architecture, and Smart Contracts.",
    "Integrated Supply Chain Management and Product Development.",
    "Artificial Intelligence (AI) and AI Prompting.",
    "Financial Markets, with an interest in cryptocurrency.",
    "Software Project Management, Manajemen Proyek, and Manajemen Tim.",
    "TypeScript, Pengembangan Software, and 3D Modeling."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Git & GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Polygon",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "Alibaba Cloud",
      fontAwesomeClassname: "fas fa-cloud"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universitas Brawijaya",
      logo: require("./assets/images/UB LOGO.jpeg"),
      subHeader: "Bachelor of Engineering, Agroindustrial Technology",
      duration: "August 2023 - September 2027 (expected)"
    },
    {
      schoolName: "SMA Negeri 9 Malang",
      logo: require("./assets/images/SMAAWA.jpeg"),
      subHeader: "Senior High School",
      duration: "August 2020 - March 2023",
      desc: "Grade: 85.9"
    }
  ]
};

// Technologies evidenced by LinkedIn skills, projects, and coursework.

const techStack = {
  display: true,
  title: "Tech Stack & Tools",
  subtitle: "Technologies explored through projects and certified coursework.",
  experience: [
    {
      Stack: "Web & Software",
      technologies: "HTML, JavaScript, TypeScript, Dart"
    },
    {
      Stack: "Data & Development Tools",
      technologies: "SQL, Git, GitHub, Alibaba Cloud coursework"
    },
    {
      Stack: "Blockchain",
      technologies: "Polygon, QR Codes, Smart Contracts, Web3"
    }
  ]
};

// Learning and community participation; no employment history is listed on LinkedIn.

const workExperiences = {
  display: true,
  title: "Experiences & Participation",
  subtitle: "Learning and community activities listed on LinkedIn.",
  experience: [
    {
      role: "Participant — Web3 University Tour Malang",
      company: "Binance Academy & Coinvestasi",
      date: "September 2026",
      desc: "Explored blockchain technology, digital assets, and the Web3 ecosystem while exchanging ideas with fellow participants interested in emerging technologies.",
      sourceUrl:
        "https://www.linkedin.com/in/daffaradityoadjiefirmansyah/overlay/Honor/1410413014/treasury/"
    },
    {
      role: "Participant — APAC Solution Challenge 2025",
      company: "Google Asia Pacific",
      date: "July 2025",
      desc: "Participated in APAC Solution Challenge 2025, with a participation certificate issued by Google Asia Pacific.",
      sourceUrl:
        "https://www.linkedin.com/in/daffaradityoadjiefirmansyah/overlay/Honor/898140349/treasury/"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Hands-on work in agribusiness, Web3, digital media, and health.",
  projects: [
    {
      projectName:
        "Agrilink — Blockchain & QR-Based Food Supply Chain Traceability System",
      displayName: "Agrilink",
      image: require("./assets/images/projects/agrilink-diagram.svg").default,
      imageAlt:
        "Concept diagram connecting producers, distributors, retailers, and consumers through Polygon records and QR access",
      previewStyle: "agrilink",
      previewLabel: "Concept diagram",
      date: "September 2026 - Present",
      projectDesc:
        "A food supply chain traceability system using Polygon and QR Codes, designed to address fragmented and manipulation-prone records across producers, distributors, retailers, and consumers.",
      skills: [
        "Pengembangan Web",
        "Smart Contracts",
        "Integrated Supply Chain Management"
      ],
      footerLink: [
        {
          name: "View on LinkedIn",
          url: "https://www.linkedin.com/in/daffaradityoadjiefirmansyah/overlay/1789751222392/single-media-viewer/"
        }
      ]
    },
    {
      projectName:
        "Arina Agri — Decision Support System untuk Transformasi Agribisnis Indonesia",
      displayName: "Arina Agri",
      image: require("./assets/images/projects/arina-field.jpg"),
      imageAlt: "Agriculture artwork showing a drone above a green field",
      previewStyle: "arina-agri",
      previewLabel: "Agriculture artwork",
      date: "March 2026 - Present",
      projectDesc:
        "A digital platform for independent farmers and small-scale agribusiness owners, providing data-driven tools for business planning, cost management, production analysis, and market decisions.",
      contributors: "Ade Surya and Mutiara",
      skills: [
        "Web Development",
        "Software Project Management",
        "Web Design",
        "AI Prompting"
      ],
      footerLink: [
        {
          name: "View projects on LinkedIn",
          url: "https://www.linkedin.com/in/daffaradityoadjiefirmansyah/details/projects/"
        }
      ]
    },
    {
      projectName: "Torock Verse",
      image: `${process.env.PUBLIC_URL}/project-assets/torock-mascot.svg`,
      imageAlt: "Torock Verse project mascot",
      previewStyle: "torock",
      previewLabel: "Project artwork",
      date: "March 2026 - Present",
      projectDesc:
        "An Indonesian digital media platform covering games, anime, film, and technology, with reviews, news, and an interactive community for Gen Z and Millennial audiences.",
      contributors: "Sufyan Dwi",
      skills: ["Pengembangan Web", "Manajemen Proyek", "Manajemen Tim"],
      footerLink: [
        {
          name: "View on LinkedIn",
          url: "https://www.linkedin.com/in/daffaradityoadjiefirmansyah/overlay/1773562816809/single-media-viewer/"
        }
      ]
    },
    {
      projectName: "Arina — Smart Farming Analysis",
      displayName: "Arina",
      image: require("./assets/images/projects/arina-logo.png"),
      imageAlt: "Arina AI project logo",
      previewStyle: "arina",
      previewLabel: "Project identity",
      date: "April 2025 - February 2026",
      projectDesc:
        "A SaaS agribusiness companion focused on data-driven agricultural planning: calculating costs and ROI, optimizing inputs, and forecasting market demand using AI.",
      contributors: "Ade Surya, Azel, and two other contributors",
      skills: [
        "Pengembangan Web",
        "Pengembangan Software",
        "Artificial Intelligence (AI)",
        "Product Development"
      ],
      footerLink: [
        {
          name: "View on LinkedIn",
          url: "https://www.linkedin.com/in/daffaradityoadjiefirmansyah/overlay/1753552029290/single-media-viewer/"
        }
      ]
    },
    {
      projectName: "WellNessMe",
      image: require("./assets/images/projects/wellness-meditation.svg")
        .default,
      imageAlt: "WellNessMe illustration of a person meditating",
      previewStyle: "wellness",
      previewLabel: "Project artwork",
      date: "December 2023 - January 2024",
      projectDesc:
        "A health tracking application focused on monitoring sleep, body weight, and mental wellness. Associated with Universitas Brawijaya.",
      contributors: "Athallah",
      skills: ["Pengembangan Software"],
      footerLink: [
        {
          name: "View projects on LinkedIn",
          url: "https://www.linkedin.com/in/daffaradityoadjiefirmansyah/details/projects/"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Licenses & Certifications",
  subtitle:
    "Coursework in web development, software, AI, cloud, and financial literacy.",

  achievementsCards: [
    {
      title: "Introduction to Financial Literacy",
      subtitle: "Dicoding Indonesia",
      issued: "January 2026",
      expires: "January 2029",
      credentialId: "0LZ05LN93X65",
      footerLink: [
        {
          name: "Show credential",
          url: "https://www.dicoding.com/certificates/0LZ05LN93X65"
        }
      ]
    },
    {
      title: "Financial Literacy 101",
      subtitle: "Dicoding Indonesia",
      issued: "July 2025",
      expires: "July 2028",
      credentialId: "L4PQ2RLOOZO1",
      footerLink: [
        {
          name: "Show credential",
          url: "https://www.dicoding.com/certificates/L4PQ2RLOOZO1"
        }
      ]
    },

    {
      title: "Belajar Dasar AI",
      subtitle: "Dicoding Indonesia",
      issued: "January 2025",
      expires: "January 2028",
      credentialId: "ERZREMRGWXYV",
      footerLink: [
        {
          name: "Show credential",
          url: "https://www.dicoding.com/certificates/ERZREMRGWXYV"
        }
      ]
    },
    {
      title: "Cloud Certification",
      subtitle: "Alibaba Cloud",
      issued: "February 2024",
      expires: "January 2026",
      expired: true,
      credentialId: "ACCD0119700100006559",
      footerLink: [
        {
          name: "View certificate on LinkedIn",
          url: "https://www.linkedin.com/in/daffaradityoadjiefirmansyah/overlay/Certifications/1432093470/treasury/"
        }
      ]
    },
    {
      title: "Memulai Pemrograman dengan Dart",
      subtitle: "Dicoding Indonesia",
      issued: "November 2024",
      expires: "November 2027",
      credentialId: "4EXG7G0Q1PRL",
      footerLink: [
        {
          name: "Show credential",
          url: "https://www.dicoding.com/certificates/4EXG7G0Q1PRL"
        }
      ]
    },
    {
      title: "Sertifikat Kelas Belajar Dasar HTML",
      subtitle: "CODEPOLITAN",
      issued: "March 2024",
      expires: "March 2027",
      credentialId: "CT6BYUU",
      footerLink: [
        {name: "Show credential", url: "https://codepolitan.com/c/CT6BYUU"}
      ]
    },
    {
      title: "Belajar Membuat Front-End Web untuk Pemula",
      subtitle: "Dicoding Indonesia",
      issued: "November 2023",
      expires: "November 2026",
      credentialId: "1OP81GJYVZQK",
      footerLink: [
        {
          name: "Show credential",
          url: "https://www.dicoding.com/certificates/1OP81GJYVZQK"
        }
      ]
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      subtitle: "Dicoding Indonesia",
      issued: "November 2023",
      expires: "November 2026",
      credentialId: "QLZ9RLN52P5D",
      footerLink: [
        {
          name: "Show credential",
          url: "https://www.dicoding.com/certificates/QLZ9RLN52P5D"
        }
      ]
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      subtitle: "Dicoding Indonesia",
      issued: "October 2023",
      expires: "October 2026",
      credentialId: "2VX3654R3XYQ",
      footerLink: [
        {
          name: "Show credential",
          url: "https://www.dicoding.com/certificates/2VX3654R3XYQ"
        }
      ]
    },
    {
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      subtitle: "Dicoding Indonesia",
      issued: "September 2023",
      expires: "September 2026",
      expired: true,
      credentialId: "6RPN4K368X2M",
      footerLink: [
        {
          name: "Show credential",
          url: "https://www.dicoding.com/certificates/6RPN4K368X2M"
        }
      ]
    },
    {
      title: "Belajar Dasar Git dengan GitHub",
      subtitle: "Dicoding Indonesia",
      issued: "August 2023",
      expires: "August 2026",
      expired: true,
      credentialId: "4EXGNWM6GZRL",
      footerLink: [
        {
          name: "Show credential",
          url: "https://www.dicoding.com/certificates/4EXGNWM6GZRL"
        }
      ]
    },
    {
      title: "Belajar Dasar Structured Query Language (SQL)",
      subtitle: "Dicoding Indonesia",
      issued: "August 2023",
      expires: "August 2026",
      expired: true,
      credentialId: "1OP80G708XQK",
      footerLink: [
        {
          name: "Show credential",
          url: "https://www.dicoding.com/certificates/1OP80G708XQK"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Favourite Song"),
  subtitle: "My Favourite Song",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://open.spotify.com/embed/track/4eNf4ckHiHsajLCBaOC80l?utm_source=generator",
    "https://open.spotify.com/embed/track/6TTAZeyRDN03BHlhQ9Lq6L?utm_source=generator"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Let's Connect",
  subtitle:
    "Open to learning, collaborating, and working on projects across technology, financial markets, and supply chain management.",
  number: "",
  email_address: "daffaradityoa03@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "DaffaradityoA", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
