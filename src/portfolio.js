/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 3200 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Daffa Radityo",
  title: "Hi all, I'm Daffa",
  subTitle: emoji(
    "I build practical digital solutions with modern technology, turning ideas into functional products for real-world needs. My work connects Web applications, AI, and Web3 with an industrial perspective in supply chain, operations, and data-driven decision making to create efficient, impactful systems"
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
  title: "What I do",
  subTitle: "FULL-STACK WEB DEVELOPMENT, DATA SYSTEMS & INDUSTRIAL OPERATIONS",
  skills: [
    emoji(
      "⚡ Building responsive web applications and modern digital solutions using React, TypeScript, and Node.js"
    ),
    emoji(
      "⚡ Developing Decision Support Systems (DSS) and predictive analytics tools using Python for agricultural yield forecasting and operational planning"
    ),
    emoji(
      "⚡ Writing Solidity smart contracts for food supply chain traceability and verifiable farm-to-table records"
    ),
    emoji(
      "⚡ Applying industrial engineering methods in process mapping, production scheduling, and inventory management"
    )
  ],
  skillCards: [
    {
      icon: "fab fa-react",
      accent: "blue",
      title: "Web & Full-Stack Development",
      description:
        "Building responsive front-ends and full-stack web applications with React and TypeScript. I focus on clean component structure, practical UI, and reliable integration with backend APIs.",
      tags: [
        {name: "React", icon: "fab fa-react"},
        {name: "TypeScript", icon: "fas fa-code"},
        {name: "Node.js", icon: "fab fa-node-js"},
        {name: "REST APIs", icon: "fas fa-network-wired"}
      ]
    },
    {
      icon: "fab fa-python",
      accent: "emerald",
      title: "AI & Decision Support Systems",
      description:
        "Creating practical Decision Support Systems (DSS) for agribusiness, combining operational data with predictive models for crop yield forecasting and cost analysis.",
      tags: [
        {name: "Decision Support (DSS)", icon: "fas fa-chart-line"},
        {name: "Data Analysis", icon: "fas fa-database"},
        {name: "Yield Forecasting", icon: "fas fa-seedling"},
        {name: "Python", icon: "fab fa-python"}
      ]
    },
    {
      icon: "solidity",
      accent: "purple",
      title: "Web3 & Smart Contracts",
      description:
        "Writing Solidity smart contracts to build food supply chain traceability systems (like Agrilink), verifying product provenance from farm to consumer via tamper-proof QR codes.",
      tags: [
        {name: "Solidity", icon: "solidity"},
        {name: "Smart Contracts", icon: "fas fa-file-contract"},
        {name: "Supply Chain Traceability", icon: "fas fa-qrcode"},
        {name: "Web3", icon: "fab fa-ethereum"}
      ]
    },
    {
      icon: "fas fa-truck-moving",
      accent: "amber",
      title: "Industrial Operations & Logistics",
      description:
        "Applying industrial engineering methods to real operations: mapping production workflows, inventory planning, and logistics analysis so software fits field realities.",
      tags: [
        {name: "Process Mapping", icon: "fas fa-project-diagram"},
        {name: "Production Planning", icon: "fas fa-calendar-check"},
        {name: "Inventory Management", icon: "fas fa-boxes"},
        {name: "Supply Chain", icon: "fas fa-truck-moving"}
      ]
    }
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git & GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Solidity / Web3",
      fontAwesomeClassname: "solidity",
      iconType: "solidity"
    },
    {
      skillName: "Cloud Computing",
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
      subHeader: "Bachelor of Engineering in Agroindustrial Technology",
      duration: "August 2023 - Present",
      desc: "Focusing on Industrial Systems Optimization, Decision Support Systems, and Software Engineering.",
      descBullets: [
        "Active contributor in regional tech challenges (APAC Solution Challenge, Web3 University Tour).",
        "Researching and developing blockchain-driven food supply chain traceability and smart farming analytics."
      ]
    },
    {
      schoolName: "SMA Negeri 9 Malang",
      logo: require("./assets/images/SMAAWA.jpeg"),
      subHeader: "Senior High School — Mathematics & Natural Sciences",
      duration: "June 2020 - March 2023",
      desc: "High school education in Mathematics & Natural Sciences (MIPA) with a final average score of 85.9."
    }
  ]
};

// Technologies & Proficiencies

const techStack = {
  viewSkillBars: true, // Set to true to show Proficiency Section
  display: true,
  title: "Proficiency",
  subtitle: "CORE TECHNICAL STACK & ENGINEERING SKILLS",
  experience: [
    {
      Stack: "Full-Stack Web Development",
      progressPercentage: "70%",
      technologies: "React, TypeScript, JavaScript, Node.js, HTML5, CSS3"
    },
    {
      Stack: "Backend, Databases & Cloud",
      progressPercentage: "40%",
      technologies: "Python, SQL Database, PostgreSQL, Alibaba Cloud, REST APIs, Git"
    },
    {
      Stack: "Web3 & Smart Contracts",
      progressPercentage: "65%",
      technologies: "Solidity, Smart Contracts, Web3"
    },
    {
      Stack: "Industrial Engineering & Operations",
      progressPercentage: "80%",
      technologies: "Production Planning, Inventory Management, Decision Support Systems"
    }
  ]
};

// Work & Community Experience Section

const workExperiences = {
  display: false,
  title: "Experience",
  subtitle: "COMMUNITY ENGAGEMENT & TECH PARTICIPATION",
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle:
    "Web applications, smart contracts, and decision support tools I have developed.",
  projects: [
    {
      projectName:
        "Agrilink — Blockchain & QR-Based Food Supply Chain Traceability System",
      displayName: "Agrilink",
      image: require("./assets/images/projects/agrilink-diagram.svg").default,
      imageAlt:
        "Concept diagram connecting producers, distributors, retailers, and consumers through Solidity contracts and QR access",
      previewStyle: "agrilink",
      previewLabel: "Concept diagram",
      date: "September 2026 - Present",
      projectDesc:
        "A food supply chain traceability system built with Solidity smart contracts, enabling transparent batch tracking from farm to consumer with tamper-proof QR code verification.",
      skills: [
        "Web3 Architecture",
        "Smart Contracts",
        "Solidity",
        "Supply Chain Traceability"
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
      previewLabel: "AgriTech platform",
      date: "March 2026 - Present",
      projectDesc:
        "A digital Decision Support System (DSS) designed for agribusiness operations, featuring crop yield forecasting models, production costing calculations, and market price trends.",
      contributors: "Ade Surya and Mutiara",
      skills: [
        "Full Stack Web",
        "Decision Support Systems",
        "Python",
        "AgriTech"
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
      previewLabel: "Digital Media Platform",
      date: "March 2026 - Present",
      projectDesc:
        "A digital publication and community media platform covering gaming, pop culture, and modern tech developments with curated reviews and news.",
      contributors: "Sufyan Dwi",
      skills: [
        "Web Development",
        "UI/UX Design",
        "Content Platform",
        "Community Ops"
      ],
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
      previewLabel: "AI Smart Farming",
      date: "April 2025 - February 2026",
      projectDesc:
        "A web application for agricultural decision-making, providing production input cost estimation, ROI projections, and commodity price trend analysis.",
      contributors: "Ade Surya, Azel, and two other contributors",
      skills: [
        "Data Analytics",
        "Decision Support (DSS)",
        "Product Engineering",
        "AgriTech"
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
      previewLabel: "Health & Wellbeing App",
      date: "December 2023 - January 2024",
      projectDesc:
        "A responsive web application for personal health tracking, allowing users to log daily exercise, sleep duration, and lifestyle habits.",
      contributors: "Athallah",
      skills: [
        "Software Engineering",
        "Mobile-First Design",
        "HealthTech",
        "UI Design"
      ],
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

// Achievement & Certifications Section

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Verified credentials and competition achievements in cloud computing, Web3, and software development.",

  achievementsCards: [
    {
      title: "APAC Solution Challenge Innovator",
      subtitle: "Google Developer Student Clubs — APAC Solution Challenge",
      image: require("./assets/images/googleLogo.svg").default || require("./assets/images/googleLogo.svg"),
      imageAlt: "Google Asia Pacific",
      issued: "July 2025",
      footerLink: [
        {
          name: "View credential",
          url: "https://www.linkedin.com/in/daffaradityoadjiefirmansyah/overlay/Honor/898140349/treasury/"
        }
      ]
    },
    {
      title: "Web3 University Tour Malang Participant",
      subtitle: "Binance Academy & Coinvestasi",
      image: require("./assets/images/binanceLogo.svg").default || require("./assets/images/binanceLogo.svg"),
      imageAlt: "Binance Academy & Coinvestasi",
      issued: "September 2026",
      footerLink: [
        {
          name: "View credential",
          url: "https://www.linkedin.com/in/daffaradityoadjiefirmansyah/overlay/Honor/1410413014/treasury/"
        }
      ]
    },
    {
      title: "Cloud Technology & Solutions Certified",
      subtitle: "Alibaba Cloud",
      image: require("./assets/images/alibabaCloudLogo.svg").default || require("./assets/images/alibabaCloudLogo.svg"),
      imageAlt: "Alibaba Cloud Certification",
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
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Technical articles and notes on software development, blockchain, and decision support systems.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks & Presentations",
  subtitle: emoji(
    "Sharing experiences in software development, tech competitions, and student initiatives."
  ),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Favourite Playlist 🎧"),
  subtitle: "Music that fuels my coding & focus sessions",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://open.spotify.com/embed/track/4eNf4ckHiHsajLCBaOC80l?utm_source=generator",
    "https://open.spotify.com/embed/track/6TTAZeyRDN03BHlhQ9Lq6L?utm_source=generator"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in collaborating on a project, discussing software engineering, or exploring quantitative systems? Feel free to reach out.",
  number: "",
  email_address: "daffaradityoa03@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "DaffaradityoA", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
