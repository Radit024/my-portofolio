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
  title: "Hi all, I'm Daffa Radityo",
  subTitle: emoji(
    "A passionate Full Stack Developer & Tech Innovator ⚡ with a strong focus on Web & Mobile applications, Web3 architectures, and data-driven Agribusiness systems. Driven to build impactful digital solutions with JavaScript, TypeScript, React, Dart, and modern cloud technologies."
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
  subTitle: "DYNAMIC FULL-STACK DEVELOPER & DIGITAL SYSTEMS BUILDER",
  skills: [
    emoji(
      "⚡ Building responsive, high-performance Web and Mobile applications using modern JavaScript, TypeScript, React, and Dart"
    ),
    emoji(
      "⚡ Architecting decentralized Web3 solutions, Smart Contracts, and Blockchain-based supply chain traceability with Solidity"
    ),
    emoji(
      "⚡ Engineering AI-powered Agribusiness Platforms, Decision Support Systems (DSS), and automated market analysis tools"
    ),
    emoji(
      "⚡ End-to-end Project Management, Agile team coordination, and intuitive UI/UX design from concept to production deployment"
    )
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
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "fas fa-mobile-alt"
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
      desc: "Graduated with distinction (Score: 85.9). Developed foundational analytical thinking and early programming exploration."
    }
  ]
};

// Technologies & Proficiencies

const techStack = {
  viewSkillBars: true, // Set to true to show Proficiency Section
  display: true,
  title: "Proficiency",
  subtitle: "CORE COMPETENCIES & TECHNICAL PROFICIENCY",
  experience: [
    {
      Stack: "Frontend & Mobile Development",
      progressPercentage: "85%",
      technologies: "HTML5, CSS3, JavaScript, TypeScript, React, Dart"
    },
    {
      Stack: "Backend, Cloud & Databases",
      progressPercentage: "75%",
      technologies: "Node.js, SQL, Alibaba Cloud, Git & GitHub"
    },
    {
      Stack: "Web3 & Smart Contracts",
      progressPercentage: "70%",
      technologies: "Solidity, Smart Contracts, Supply Chain Traceability"
    },
    {
      Stack: "Industrial Systems & Problem Solving",
      progressPercentage: "80%",
      technologies: "Agile Leadership, UI/UX Design, Decision Support Systems"
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
  subtitle: "",
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
        "A decentralized food supply chain traceability platform built with Solidity, eliminating record tampering and bridging farm-to-table transparency via verifiable QR codes.",
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
        "A comprehensive digital Decision Support System (DSS) transforming Indonesian agribusiness with data-driven yield forecasting, operational costing, and intelligent market analytics.",
      contributors: "Ade Surya and Mutiara",
      skills: [
        "Full Stack Web",
        "Decision Support Systems",
        "AI Prompting",
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
        "A dynamic pop-culture and technology digital media publication engaging Gen Z & Millennials with curated reviews, gaming insights, and interactive community spaces.",
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
        "An AI-powered SaaS companion for modern farmers, calculating production ROI, resource input optimization, and predicting agricultural commodity price fluctuations.",
      contributors: "Ade Surya, Azel, and two other contributors",
      skills: [
        "AI Analytics",
        "SaaS Architecture",
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
        "A personal health & wellbeing tracking application designed to monitor sleep quality, physical activity, and holistic lifestyle routines.",
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
    "Achievements, Certifications, and Verified Credentials That Highlight My Continuous Growth!",

  achievementsCards: [
    {
      title: "APAC Solution Challenge Innovator",
      subtitle: "Google Asia Pacific",
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
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
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
    "Discuss a project, collaborate on tech, or just want to say hi? My inbox is open for all!",
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
