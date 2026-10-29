export const NAV_ITEMS = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Education",
  "Hackathons",
  "Contact",
];

// Grouped by category, rendered as icon badges in SkillsSection. Icons and
// colours are resolved by name from lib/techIcons.jsx, so just keep names
// spelled consistently.
export const SKILLS = {
  Languages: ["Java", "C#", "JavaScript", "Python", "C++"],
  Frontend: ["React", "Next.js", "React Native", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["Spring Boot", "Spring Security", "JWT", ".NET / C#", "RESTful APIs", "MySQL", "PostgreSQL", "MSSQL"],
  // "ML & Data": ["TensorFlow", "scikit-learn", "OpenCV", "Pandas"],
  "Tools & DevOps": ["Git", "GitHub", "Azure DevOps", "Docker", "Postman", "Figma"],
  "Currently Learning": ["AWS", "AI Engineering", "LLM Tool Calling"],
};

// Small stat row shown under the About bio.
export const ABOUT_STATS = [
  { label: "CGPA", value: "3.75", suffix: "/4.00" },
  { label: "Internship", value: "6", suffix: " mo" },
  { label: "ERP Platforms", value: "4", suffix: "" },
  { label: "Dean's List", value: "5", suffix: "×" },
];

export const EXPERIENCE = [
  {
    role: "Intern Full Stack Software Engineer",
    company: "Agrithmics (Pvt) Ltd",
    period: "Feb 2025 – Aug 2025",
    stack: ["C# / .NET", "React", "MSSQL", "Azure DevOps"],
    points: [
      "Built full-stack features across 4 international ERP platforms spanning procurement, payroll, inventory, and manufacturing modules.",
      "Developed 10+ screens including a Quotation Management screen with item-wise multi-vendor selection and automated comparison scoring, consolidating vendor evaluation onto a single screen.",
      "Traced and fixed a critical execution bug in the Sick Leave Scheduler causing incorrect payroll processing in production, resolved within a single sprint.",
      "Delivered dynamic reporting modules including a Maternity Leave Weekly Payment Report with automated PDF generation, eliminating a recurring SQL data-grouping error that had affected production for two payroll cycles.",
      "Refactored 5+ legacy query modules following senior code review, replacing N+1 query patterns with optimised SQL joins and indexed stored procedures on data sets exceeding 10,000 records.",
      "Managed sprint tasks via Azure DevOps, Git branching, pull requests with peer review, unit testing, and code reviews.",
    ],
  },
];
// Real recommendations received on LinkedIn. Keep these close to the
// original wording — they're testimonials from named people, so trimming
// for length is fine but don't rewrite what they actually said.
export const RECOMMENDATIONS = [
  {
    name: "Evantha D.",
    title: "Software Engineer at ORYSYS",
    connection: "Managed Siluni directly",
    date: "May 2026",
    quote:
      "Siluni was a dedicated and supportive team member who consistently showed enthusiasm for learning and improving her technical knowledge. She demonstrated good teamwork, professionalism, and a positive attitude when handling assigned tasks and collaborating with others, and was always willing to take on new challenges — showing strong potential for growth in the software engineering field.",
  },
  {
    name: "Vidath Dahanayake",
    title: "Software Engineer | Full Stack Developer",
    connection: "Managed Siluni directly at Agrithmics",
    date: "May 2026",
    quote:
      "Siluni showed great enthusiasm for learning, good problem-solving skills, and a positive attitude towards teamwork during our time at Agrithmics. She was responsible, quick to understand new concepts, and always willing to take initiative when handling tasks. Her dedication and commitment to improving her skills were impressive throughout the internship.",
  },
];

// `image` should point to a real screenshot at /assets/work/<file>. Leave it
// as null until you have one — the card falls back to a clean gradient tile
// instead of showing a placeholder screenshot that isn't actually the project.
// `summary` is the single one-line statement shown on the card itself;
// `description` + `highlights` are the fuller version shown in the modal.
// `image` should point to a real screenshot at /assets/work/<file>. Leave it
// as null until you have one — the card falls back to a clean gradient tile
// instead of showing a placeholder screenshot that isn't actually the project.
// `summary` is the single one-line statement shown on the card itself;
// `description` + `highlights` are the fuller version shown in the modal.
export const PROJECTS = [
  {
    title: "CentralSync",
    subtitle: "Cross-Platform Inventory Management System",
    category: "fullstack",
    context: "Rootcode Labs",
    stack: ["React.js", "React Native", "Spring Boot", "MySQL"],
    problem:
      "Stock tracked across separate tools makes it hard to see what is available or running low, on the web or on the shop floor.",
    built:
      "Item Management, Stock Management and Reporting modules end-to-end (React.js, Spring Boot, MySQL), plus a React Native companion app.",
    result:
      "Stock levels, low-stock alerts and exported reports stay in sync between web and mobile.",
    summary:
      "A cross-platform inventory system with real-time stock tracking, synced across web and mobile.",
    description:
      "Cross-platform inventory system with real-time stock tracking, low-stock alerts, and automated report export — synchronised across web and mobile clients. Built the Item Management, Stock Management, and Reporting modules end-to-end.",
    github: "https://github.com/MaleeshaVidurath/centralSyncBackend",
    image: "/assets/work/centralsync.png",
    highlights: [
      "Built full-stack resource management and order-initiation features, implementing inventory CRUD and ordering workflows across React.js and Spring Boot.",
      "Built an item-usage analysis and reporting module pairing Spring Boot backend logic with React.js visualisations for data-driven inventory insight.",
      "Implemented autocomplete-based search and filtering, and contributed to requirements analysis, UML design, and frontend/backend integration.",
      "Shipped as a companion React Native mobile client, keeping stock data in sync across web and mobile.",
    ],
  },
  {
    title: "Pathwise",
    subtitle: "AI-Powered Career Guidance Platform",
    category: "fullstack",
    context: "Idealize 2025 · Semi-finalist",
    stack: ["Next.js", "Spring Boot", "MySQL", "Generative AI"],
    problem:
      "Students struggle to get personal career guidance and to book time with the right coach.",
    built:
      "Coach session booking with conflict detection, a community discussion platform, and real-time WebSocket messaging with read receipts, from Next.js through Spring Boot to MySQL.",
    result:
      "Semi-finalist at the Idealize 2025 inter-university designathon with Team BitBalance.",
    summary:
      "An AI-powered career guidance platform with real-time coach messaging and session booking.",
    description:
      "Developed the Coach Session booking system, Community discussion platform, and real-time Messaging module — integrated end-to-end from the Next.js UI through the Spring Boot API to the database layer.",
    github: "https://github.com/Ravindu-Hasanka/pathwise-backend",
    image: "/assets/work/pathwise.png",
    highlights: [
      "Developed a coach-session booking system with conflict detection and scheduling logic.",
      "Built a real-time WebSocket-based messaging module with persistence and read receipts.",
      "Integrated the full-stack flow end-to-end: Next.js frontend → Spring Boot APIs → MySQL database.",
      "Built during the Idealize 2025 inter-university designathon as part of Team BitBalance.",
    ],
  },
  {
    title: "Machine Vision System for Identification of Morphologically Similar Ayurvedic Compound-Leaf Species",
    subtitle: "Species Identification & Health Assessment",
    category: "ml",
    context: "Final Year Research · University of Moratuwa",
    stack: ["Python", "OpenCV", "TensorFlow", "scikit-learn"],
    problem:
      "Morphologically similar Ayurvedic leaf species are hard to tell apart, a quality-control gap in Sri Lanka's herbal medicine supply chain.",
    built:
      "An end-to-end vision pipeline: 130+ handcrafted shape, colour, texture and vein features, a soft-voting ensemble (Random Forest, SVM-RBF, HistGradientBoosting) and a two-stage leaf-health assessment.",
    result:
      "93.7% F1-macro across 12 species on a sealed 240-image test set, and 0.885 F1 for health classification.",
    summary:
      "A computer vision pipeline that identifies Ayurvedic leaf species and assesses plant health.",
    description:
      "Machine vision framework to identify Ayurvedic leaf species and assess plant freshness from image inputs — addressing a real quality-control gap in Sri Lanka's herbal medicine supply chain.",
    github: "https://github.com/6614Kavya/ayurveda-recognition",
    image: "/assets/work/ayurveda.png",
    highlights: [
      "Built an end-to-end computer vision pipeline identifying 12 morphologically similar Ayurvedic compound-leaf species — covering preprocessing, feature engineering, model training, and evaluation.",
      "Engineered 130+ handcrafted shape, colour, texture, and vein features; combined them in a soft-voting ensemble (Random Forest + SVM-RBF + HistGradientBoosting) reaching 93.7% F1-macro on a sealed 240-image test set.",
      "Developed a two-stage leaf-health assessment system for healthy/unhealthy classification and severity scoring, reaching 0.885 F1.",
      "Benchmarked handcrafted features against a MobileNetV2 deep-learning baseline through ablation experiments.",
    ],
  },
  {
    title: "DevAssist",
    subtitle: "AI Codebase Assistant for GitHub Repositories",
    category: "fullstack",
    context: "Personal Project",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Flyway",
      "JGit",
      "React",
      "Tailwind CSS",
      "Docker",
      "LLM Tool Calling",
    ],
    problem:
      "Learning an unfamiliar codebase is slow, and an LLM answering from the prompt alone can guess instead of checking the code.",
    built:
      "A Spring Boot tool-calling agent that searches the repository, reads files and queries Git history before answering, with JWT auth, per-user ownership and a React chat interface.",
    result:
      "Answers grounded in the real code, with referenced files shown, outdated answers flagged after a re-sync, and one-command setup with Docker Compose.",
    summary:
      "A full-stack AI assistant that imports public GitHub repositories and answers questions about them using a tool-calling agent over the code and commit history.",
    description:
      "Full-stack developer assistant where users sign in, import a public GitHub repository, and chat with an LLM agent that explores the codebase on demand. The Spring Boot backend clones and indexes each repository, then runs a tool-calling loop (file search, file reading, Git history search) so answers are grounded in the actual code. Conversations are stored per repository and restored across sessions, and every repository, file and message is scoped to its owner.",
    github: "https://github.com/SiluniWijesinghe/DevAssist",
    image: "/assets/work/devassist.jpg",
    highlights: [
      "Built a tool-calling agent in Spring Boot that lets an LLM (via OpenRouter) search the repository, read files and query Git history before answering, instead of guessing from the prompt.",
      "Implemented JGit-based ingestion that clones public GitHub repositories, scans source files into PostgreSQL, and keeps one persistent local clone per repository, updated with fetch.",
      "Secured the API with Spring Security and JWT authentication, and enforced per-user ownership on repositories, tools and chat messages, covered by dedicated ownership tests.",
      "Persisted chat history in PostgreSQL and restored it per repository across logins and devices, and passed recent messages to the model so follow-up questions work.",
      "Added repository re-sync with an indexed-at timestamp, and flagged answers generated before the latest sync as potentially outdated.",
      "Designed the schema with versioned Flyway migrations and validated it with Hibernate, with JUnit tests for authentication, file reading, repository search and Git history search.",
      "Built a React and Tailwind interface with Markdown-rendered answers, starter prompts, a context panel listing the files referenced, and stop and retry controls for in-flight requests.",
      "Containerised the frontend, backend and PostgreSQL with Docker Compose for one-command setup.",
    ],
  },
  {
    title: "LankaGrid Forecaster",
    subtitle: "Short-Term Energy Load Prediction",
    category: "ml",
    context: "University ML Module Assignment",
    stack: ["Python", "XGBoost", "SHAP", "Streamlit", "Pandas"],
    problem:
      "Planning power supply needs accurate short-term demand forecasts for Sri Lanka's grid.",
    built:
      "An XGBoost model forecasting demand at 15-minute intervals, SHAP explanations of each prediction, and a Streamlit dashboard for scenario simulation.",
    result:
      "R\u00b2 = 0.9991 on held-out data, with interpretable drivers and a dashboard for what-if scenarios.",
    summary:
      "An XGBoost-based tool forecasting Sri Lanka's power grid demand at 15-minute intervals.",
    description:
      "XGBoost-based forecasting tool for Sri Lanka's grid demand at 15-minute intervals (R² = 0.9991). Applied SHAP for model interpretability and deployed a Streamlit dashboard for real-time scenario simulation.",
    github: "https://github.com/SiluniWijesinghe/SL-EnergyPredictor",
    image: "/assets/work/lankagrid.png",
    highlights: [
      "Trained an XGBoost regression model to forecast Sri Lanka's national grid demand at 15-minute resolution, reaching R² = 0.9991 on held-out data.",
      "Applied SHAP explainability to surface which features (time-of-day, weather, historical load) drove each prediction.",
      "Built an interactive Streamlit dashboard for real-time scenario simulation and visual forecasting.",
      "Completed as a machine-learning module assignment at the University of Moratuwa.",
    ],
  },


  {
    title: "Human Rescue Rover",
    subtitle: "Autonomous Embedded Rescue Robot",
    category: "embedded",
    context: "Embedded Systems Project",
    stack: ["C++", "Microcontrollers", "Wireless Communication", "Sensors"],
    problem:
      "Rescuers cannot always see or safely reach people in hazardous spaces.",
    built:
      "An autonomous rover on microcontrollers using ultrasonic sensors for obstacle avoidance, with a wireless video feed for remote monitoring.",
    result:
      "Navigates obstacles on its own and streams live video in simulated rescue scenarios.",
    summary:
      "An autonomous rescue rover using microcontrollers and sensors for obstacle avoidance and live video.",
    description:
      "Autonomous rescue rover built on microcontrollers, combining ultrasonic sensor fusion for real-time obstacle avoidance with a wireless video feed for remote monitoring in simulated rescue scenarios.",
    image: "/assets/work/rover.jpg",
    highlights: [
      "Built an autonomous rescue rover using microcontrollers with ultrasonic sensors for real-time obstacle avoidance.",
      "Developed wireless video streaming for remote monitoring in simulated rescue scenarios.",
    ],
  },
];

// `logo` should point to a real institution crest at /assets/education/<file>.
// Leave null until you have one — the timeline falls back to a graduation-cap
// icon instead of a broken image. `extra` lines render directly under the
// entry (no click-to-expand).
export const EDUCATION = [
  {
    degree: "BSc (Hons) in Information Technology",
    school: "University of Moratuwa",
    period: "2022 – 2026",
    detail: "OGPA 3.75 / 4.00 - First Class",
    logo: "/assets/education/moratuwa.png",
    extra: [
      "Dean's List: L1S2 (3.92) · L2S1 (4.00) · L2S2 (3.96) · L4S1 (3.88) · L4S2 (3.81)",
    ],
  },
  {
    degree: "G.C.E. Advanced Level — Physical Science",
    school: "Anula Vidyalaya, Nugegoda",
    period: "2020",
    detail: "Z-score 1.7467 · 2As & 1B",
    medium: "English Medium",
    logo: "/assets/education/anula.png",
  },
  {
    degree: "G.C.E. Ordinary Level",
    school: "Ananda Balika Vidyalaya, Kotte",
    period: "2017",
    detail: "9 A's",
    medium: "Bilingual (Sinhala & English)",
    logo: "/assets/education/anandabalika.jpeg",
  },
];

// `certificate` should point to a real image at /assets/certificates/<file>
// once you actually have it (e.g. a PDF export of the participation
// certificate). Leave it null until then — the card just shows the trophy
// icon instead of a placeholder standing in for a certificate you don't
// have yet.
export const HACKATHONS = [
  {
    name: "Idealize",
    year: "2025",
    type: "Inter-University Designathon",
    result: "Semi-Finalist",
    team: "Team BitBalance",
    note: "Built Pathwise, an AI-powered career guidance platform, over the competition weekend.",
    certificate: "/assets/certificates/idealize.png",
  },
  {
    name: "HackElite 1.0",
    year: "2024",
    type: "Inter-University Ideathon",
    result: "Semi-Finalist",
    team: "Team VivalaCodes",
    certificate: "/assets/certificates/Hackelite.png",
  },
  {
    name: "InspiHer-Tech V2.0",
    year: "2023",
    type: "Programming Hackathon",
    result: "Semi-Finalist",
    team: "Team VivalaCodes",
    certificate: "/assets/certificates/InspiHer.png",
  },
  {
    name: "Coderush",
    year: "2023",
    type: "Programming Hackathon",
    result: "Participant",
    certificate: "/assets/certificates/coderush.png",
  },
  {
    name: "Devthon",
    year: "2023",
    type: "Programming Hackathon",
    result: "Participant",
    certificate: "/assets/certificates/devthon.png",
  },
];

// Add real certificates here as you earn/collect them:
//   { title: "...", issuer: "...", date: "...", image: "/assets/certificates/xxx.png", url: "" }
// The section only renders certificates you've actually added — an empty
// array simply hides the section rather than showing placeholders.
export const CERTIFICATES = [];
