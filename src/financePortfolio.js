import emoji from "react-easy-emoji";

// Finance Greeting Section
export const financeGreeting = {
  username: "Daffa Radityo",
  title: "Hi all, I'm Daffa",
  subTitle: emoji(
    "An Agro-industrial Technology undergraduate at Universitas Brawijaya specializing in quantitative trading systems, financial modeling, and operational economics. Experienced in developing automated crypto trading bots on OKX with algorithmic risk controls, building financial management platforms for SME cash flow and unit costing, and evaluating agricultural capital investments."
  ),
  resumeLink: "",
  displayGreeting: true,
  specialtyTags: [
    {
      name: "Quant Bots & OKX API",
      icon: "fab fa-python",
      accent: "emerald"
    },
    {
      name: "TradingView & Signals",
      icon: "tradingview",
      accent: "blue"
    },
    {
      name: "SME P&L & Costing",
      icon: "fas fa-file-excel",
      accent: "amber"
    },
    {
      name: "Web3 & Value Chain",
      icon: "solidity",
      accent: "purple"
    }
  ]
};

// Finance Skills Section
export const financeSkillsSection = {
  title: "What I do in Finance",
  subTitle: "QUANTITATIVE STRATEGIES, RISK CONTROLS & OPERATIONAL FINANCIAL SYSTEMS",
  skills: [
    emoji(
      "⚡ Developing automated cryptocurrency trading engines with multi-indicator screening (RSI, ADX, Volume) and live execution on OKX"
    ),
    emoji(
      "⚡ Implementing hard-coded risk management rules: maximum drawdown limits, position sizing algorithms, and automated stop-loss triggers"
    ),
    emoji(
      "⚡ Building financial management platforms (BisnisKu) for SME double-entry ledgers, unit economics, and Cost of Goods Sold (HPP) calculation"
    ),
    emoji(
      "⚡ Engineering agro-industrial feasibility models and Decision Support Systems (DSS) for farm capital budgeting and investment ROI"
    ),
    emoji(
      "⚡ Writing Solidity smart contracts for supply chain financial provenance and transparent distributor-to-retailer price verification"
    )
  ],
  skillCards: [
    {
      icon: "fab fa-python",
      accent: "emerald",
      title: "Quantitative & Algorithmic Trading",
      description:
        "Engineering automated crypto trading bots connected directly to the OKX API. Incorporates automated ticker screening (ADX, RSI, volume surges), trend filters, and rule-based trade execution with SQLite logging.",
      tags: [
        {name: "Python", icon: "fab fa-python"},
        {name: "OKX API / CCXT", icon: "fas fa-exchange-alt"},
        {name: "Pandas & NumPy", icon: "pandas"},
        {name: "FastAPI", icon: "fastapi"}
      ]
    },
    {
      icon: "fas fa-shield-alt",
      accent: "amber",
      title: "Risk Controls & Capital Preservation",
      description:
        "Enforcing disciplined risk parameters in trading software: volatility-adjusted position sizing, automated stop-loss and take-profit orders, max drawdown circuit breakers, and real-time Discord risk alerts.",
      tags: [
        {name: "Position Sizing", icon: "fas fa-calculator"},
        {name: "Drawdown Controls", icon: "fas fa-chart-pie"},
        {name: "Stop-Loss Engine", icon: "fas fa-hand-paper"},
        {name: "Discord Webhooks", icon: "fab fa-discord"}
      ]
    },
    {
      icon: "fas fa-file-excel",
      accent: "blue",
      title: "SME Financial Tracking & Unit Costing",
      description:
        "Developing bookkeeping and financial management software (BisnisKu / BusinessTracker) with categorized cash flow journals, raw material inventory valuation, and automated monthly P&L reporting for SMEs.",
      tags: [
        {name: "Cash Flow Ledgers", icon: "fas fa-money-bill-wave"},
        {name: "Cost of Goods (HPP)", icon: "fas fa-receipt"},
        {name: "P&L Statements", icon: "fas fa-file-alt"},
        {name: "PostgreSQL / SQLite", icon: "postgresql"}
      ]
    },
    {
      icon: "solidity",
      accent: "purple",
      title: "Agro-Economic Feasibility & Web3",
      description:
        "Evaluating agricultural capital investments and production batch feasibility with Decision Support Systems (DSS), alongside Solidity smart contracts for verifiable supply chain settlement and transparent pricing.",
      tags: [
        {name: "Feasibility Analysis", icon: "fas fa-clipboard-check"},
        {name: "Solidity", icon: "solidity"},
        {name: "Investment ROI", icon: "fas fa-percentage"},
        {name: "Decision Support (DSS)", icon: "fas fa-brain"}
      ]
    }
  ],

  softwareSkills: [
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
      skillName: "Git & GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Linux / VPS",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Discord API",
      fontAwesomeClassname: "fab fa-discord"
    }
  ],
  display: true
};

// Finance Technologies & Proficiencies
export const financeTechStack = {
  viewSkillBars: true,
  display: true,
  title: "Proficiency in Finance & Systems",
  subtitle: "CORE QUANTITATIVE, ANALYTICAL & RISK COMPETENCIES",
  experience: [
    {
      Stack: "Algorithmic & Quantitative Trading",
      progressPercentage: "80%",
      technologies: "Python, OKX API, CCXT, Pandas, NumPy, TradingView"
    },
    {
      Stack: "Automated Risk Architecture",
      progressPercentage: "80%",
      technologies: "Position Sizing, Max Drawdown Stops, Volatility Limits, Discord Alerts"
    },
    {
      Stack: "Financial Management & Unit Costing",
      progressPercentage: "75%",
      technologies: "Cash Flow Ledgers, Cost of Goods Sold (HPP), P&L Analytics, Excel"
    },
    {
      Stack: "Trading Infrastructure & Backend",
      progressPercentage: "70%",
      technologies: "SQLite, PostgreSQL, FastAPI, Docker, Ubuntu VPS, Git"
    },
    {
      Stack: "Web3 & Value Chain Transparency",
      progressPercentage: "65%",
      technologies: "Solidity Smart Contracts, Supply Chain Value Auditing, On-Chain Verification"
    }
  ]
};

// Finance Featured Projects
export const financeBigProjects = {
  title: "Finance & Quantitative Projects",
  subtitle:
    "Algorithmic trading systems, corporate financial bookkeeping platforms, and agro-economic feasibility engines.",
  headerTags: [
    "Quantitative Trading",
    "Risk Architecture",
    "Cash Flow & P&L",
    "Financial Feasibility"
  ],
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
        "Arina Agri — Decision Support System & Agribusiness Financial Feasibility Engine",
      displayName: "Arina Agri Feasibility Engine",
      image: require("./assets/images/projects/arina-field.jpg"),
      imageAlt: "Agro-industrial financial feasibility concept artwork",
      previewStyle: "arina",
      previewLabel: "Financial Feasibility DSS",
      date: "March 2026 - Present",
      projectDesc:
        "A digital Decision Support System (DSS) calculating agricultural operational ROI, resource input optimization, capital expenditure payback periods, and price fluctuation scenarios to assist farm financial planning.",
      skills: [
        "Financial Feasibility",
        "ROI Simulation",
        "Decision Support (DSS)",
        "Unit Costing",
        "Python"
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
        "Agrilink — Decentralized Supply Chain Value Transparency & Verification",
      displayName: "Agrilink Settlement & Provenance",
      image: require("./assets/images/projects/agrilink-diagram.svg").default,
      imageAlt: "Supply chain financial transparency and verifiable settlement diagram",
      previewStyle: "agrilink",
      previewLabel: "DeFi & Value Chain",
      date: "September 2026 - Present",
      projectDesc:
        "A decentralized system utilizing Solidity smart contracts to verify food provenance and eliminate pricing fraud between distributors, suppliers, and retailers from farm to consumer.",
      skills: [
        "Web3 / DeFi",
        "Solidity",
        "Smart Contracts",
        "Value Chain Transparency"
      ],
      footerLink: [
        {
          name: "View on LinkedIn",
          url: "https://www.linkedin.com/in/daffaradityoadjiefirmansyah/overlay/1789751222392/single-media-viewer/"
        }
      ]
    }
  ],
  display: true
};

// Finance Achievements & Certifications Section
export const financeAchievementSection = {
  title: emoji("Finance & Quantitative Credentials 🏆"),
  subtitle:
    "Certifications, market participation, and field credentials across quantitative trading and business finance.",
  achievementsCards: [
    {
      title: "Web3 University Tour Participant",
      subtitle: "Binance Academy & Coinvestasi — Crypto Markets & Blockchain Ecosystems",
      image:
        require("./assets/images/binanceLogo.svg").default ||
        require("./assets/images/binanceLogo.svg"),
      imageAlt: "Binance Academy & Coinvestasi",
      issued: "September 2026",
      footerLink: [
        {
          name: "View credential on LinkedIn",
          url: "https://www.linkedin.com/in/daffaradityoadjiefirmansyah/overlay/Honor/1410413014/treasury/"
        }
      ]
    },
    {
      title: "SME Financial Record-Keeping & Operational Cost Optimization",
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
      title: "Agro-industrial Feasibility Study & Engineering Economics",
      subtitle: "Universitas Brawijaya — Industrial Systems & Financial Optimization",
      image: require("./assets/images/UB LOGO.jpeg"),
      imageAlt: "Universitas Brawijaya",
      issued: "2023 - Present",
      footerLink: [
        {
          name: "View on LinkedIn",
          url: "https://www.linkedin.com/in/daffaradityoadjiefirmansyah/"
        }
      ]
    },
    {
      title: "Cloud Infrastructure for Financial & Real-Time Services",
      subtitle: "Alibaba Cloud — High Availability & Distributed Services",
      image:
        require("./assets/images/alibabaCloudLogo.svg").default ||
        require("./assets/images/alibabaCloudLogo.svg"),
      imageAlt: "Alibaba Cloud Certification",
      issued: "February 2024",
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

// Finance Contact Info
export const financeContactInfo = {
  title: emoji("Connect for Finance & Trading 📈"),
  subtitle:
    "Interested in discussing quantitative strategies, algorithmic trading systems, or SME financial modeling? Let's connect.",
  number: "",
  email_address: "daffaradityoa03@gmail.com"
};
