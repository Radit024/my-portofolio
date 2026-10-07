/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

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
  title: "Hi all, I'm Daffa",
  subTitle: emoji(
    "I build digital solutions where technology meets real-world operations. I combine Software Development, AI, Web3, and digital systems with knowledge of supply chain, production planning, inventory control, and process optimization to build practical solutions that improve business and operational efficiency."
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
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL-STACK WEB DEVELOPMENT, QUANTITATIVE SYSTEMS & INDUSTRIAL OPERATIONS",
  skills: [
    emoji(
      "⚡ Building responsive front-ends and full-stack web applications using React, TypeScript, and Node.js"
    ),
    emoji(
      "⚡ Developing automated cryptocurrency trading engines on OKX with algorithmic risk controls, universe screening, and SQLite trade logging"
    ),
    emoji(
      "⚡ Creating Decision Support Systems (DSS) and predictive models using Python for crop yield forecasting and operational cost planning"
    ),
    emoji(
      "⚡ Implementing Solidity smart contracts for food supply chain traceability and verifiable provenance records"
    ),
    emoji(
      "⚡ Applying industrial engineering methods in unit costing (HPP), production scheduling, inventory management, and process mapping"
    )
  ],

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
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "pandas",
      iconType: "pandas"
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "numpy",
      iconType: "numpy"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "postgresql",
      iconType: "postgresql"
    },
    {
      skillName: "SQLite",
      fontAwesomeClassname: "sqlite",
      iconType: "sqlite"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fastapi",
      iconType: "fastapi"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Excel / Sheets",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "TradingView",
      fontAwesomeClassname: "tradingview",
      iconType: "tradingview"
    },
    {
      skillName: "Solidity / Web3",
      fontAwesomeClassname: "solidity",
      iconType: "solidity"
    },
    {
      skillName: "Git & GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Linux / VPS",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Cloud Computing",
      fontAwesomeClassname: "fas fa-cloud"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
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
  viewSkillBars: true,
  display: true,
  title: "Proficiency",
  subtitle: "CORE TECHNICAL STACK & ENGINEERING SKILLS",
  experience: [
    {
      Stack: "Full-Stack Web Development",
      progressPercentage: "80%",
      technologies: "React, TypeScript, JavaScript, Node.js, HTML5, CSS3"
    },
    {
      Stack: "Quantitative Trading & Data Systems",
      progressPercentage: "80%",
      technologies: "Python, OKX API, CCXT, Pandas, NumPy, TradingView"
    },
    {
      Stack: "Backend, Databases & Cloud",
      progressPercentage: "75%",
      technologies: "PostgreSQL, SQLite, FastAPI, Docker, Alibaba Cloud, Git"
    },
    {
      Stack: "Web3 & Smart Contracts",
      progressPercentage: "65%",
      technologies: "Solidity, Smart Contracts, Supply Chain Traceability, Web3"
    },
    {
      Stack: "Industrial Operations & Unit Costing",
      progressPercentage: "80%",
      technologies: "Process Mapping, Production Planning, Cost of Goods Sold (HPP), Decision Support Systems"
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

const openSource = {
  showGithubProfile: "false",
  display: false
};

// Some projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle:
    "Quantitative trading systems, web applications, smart contracts, and decision support tools I have developed.",
  projects: [
    {
      projectName:
        "Torock Trading Bot — Quantitative & Automated Cryptocurrency Trading System",
      displayName: "Torock Trading Bot",
      image: require("./assets/images/projects/torock-trading.svg").default,
      imageAlt:
        "Torock Trading Bot architecture showing OKX screening, AI strategy, risk validator, and execution",
      previewStyle: "torock",
      previewLabel: "Quantitative Trading System",
      date: "July 2026 - Present",
      projectDesc:
        "An automated crypto trading bot executing on OKX. Features automated ticker universe screening (ADX, RSI, volume surges), rule-based entry/exit execution, hard-coded risk management (max drawdown and leverage limits), SQLite trade journaling, and a FastAPI dashboard with real-time Discord transaction alerts.",
      skills: [
        "Quantitative Trading",
        "OKX API / CCXT",
        "Risk Controls",
        "FastAPI",
        "Python"
      ],
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Radit024"
        },
        {
          name: "View on LinkedIn",
          url: "https://www.linkedin.com/in/daffaradityoadjiefirmansyah/"
        }
      ]
    },
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
        "BisnisKu / BusinessTracker — SME Financial Management & Cost Analytics Platform",
      displayName: "BisnisKu / BusinessTracker",
      image: require("./assets/images/projects/bisnisku-diagram.svg").default,
      imageAlt:
        "BisnisKu financial platform architecture showing cash flow ledger, unit costing, and P&L analytics",
      previewStyle: "arina-agri",
      previewLabel: "Financial Management Platform",
      date: "July 2025 - Present",
      projectDesc:
        "A financial management platform for micro and small businesses. Tracks cash flow journals, categorized expenses, raw material inventory valuation, and Cost of Goods Sold (HPP) to generate automated monthly profit & loss statements.",
      skills: [
        "Financial Accounting",
        "Cash Flow Analytics",
        "Unit Economics",
        "PostgreSQL",
        "TypeScript"
      ],
      footerLink: [
        {
          name: "View on LinkedIn",
          url: "https://www.linkedin.com/in/daffaradityoadjiefirmansyah/details/projects/"
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
      projectName: "WellNessMe",
      image: require("./assets/images/projects/wellness-meditation.svg").default,
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
      title: "SME Financial Record-Keeping & Cost Optimization",
      subtitle: "Program Mahasiswa Membangun Mitra (3M FTP UB) — UMKM Sari Gunung",
      image: require("./assets/images/UB LOGO.jpeg"),
      imageAlt: "Universitas Brawijaya 3M FTP",
      issued: "July 2025",
      footerLink: [
        {
          name: "View profile on LinkedIn",
          url: "https://www.linkedin.com/in/daffaradityoadjiefirmansyah/"
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
  displayMediumBlogs: "true",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "Talks & Presentations",
  subtitle: emoji(
    "Sharing experiences in software development, tech competitions, and student initiatives."
  ),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Favourite Playlist 🎧"),
  subtitle: "Music that fuels my coding & focus sessions",
  podcast: [
    "https://open.spotify.com/embed/track/4eNf4ckHiHsajLCBaOC80l?utm_source=generator",
    "https://open.spotify.com/embed/track/6TTAZeyRDN03BHlhQ9Lq6L?utm_source=generator"
  ],
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in collaborating on software engineering, quantitative trading systems, or agro-industrial operations? Feel free to reach out.",
  number: "",
  email_address: "daffaradityoa03@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "DaffaradityoA",
  display: true
};

const isHireable = true;

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
