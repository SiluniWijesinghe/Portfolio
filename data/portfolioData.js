export const NAV_ITEMS = ["About", "Projects", "Experience", "Skills", "Contact"];

export const SKILLS = {
  Languages: ["Java", "JavaScript", "TypeScript", "Python", "C#", "C++"],
  Frontend: ["React", "Next.js", "React Native", "Tailwind CSS", "HTML/CSS"],
  Backend: ["Spring Boot", ".NET / C#", "MySQL", "MSSQL", "RESTful APIs"],
  "ML & Data": ["TensorFlow", "scikit-learn", "OpenCV", "XGBoost", "Pandas", "SHAP"],
  DevOps: ["Git", "Azure DevOps", "Postman", "Agile / Scrum"],
};

export const EXPERIENCE = [
  {
    role: "Intern Full Stack Software Engineer",
    company: "Agrithmics (Pvt) Ltd",
    period: "Feb 2025 – Aug 2025",
    stack: ["C# / .NET", "React", "MSSQL", "Azure DevOps"],
    points: [
      "Built full-stack features across 4 international ERP platforms — Ispahani, Lankem, Hayleys, and HNB Farmer System — spanning procurement, payroll, inventory, and manufacturing modules.",
      "Traced and fixed a critical execution bug in the Sick Leave Scheduler causing incorrect payroll processing in production, resolved within a single sprint.",
      "Engineered reporting modules with dynamic column generation, refined SQL joins and stored procedures, and added Excel export for bulk downloads.",
      "Managed sprint tasks via Azure DevOps — Git branching, PRs, unit testing, and code reviews.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "CentralSync",
    subtitle: "Cross-Platform Inventory Management System",
    category: "fullstack",
    context: "Rootcode Labs",
    stack: ["React.js", "React Native", "Spring Boot", "MySQL"],
    description:
      "Cross-platform inventory system with real-time stock tracking, low-stock alerts, and automated report export — synchronised across web and mobile clients. Built the Item Management, Stock Management, and Reporting modules end-to-end.",
    github: "https://github.com/MaleeshaVidurath/centralSyncBackend",
  },
  {
    title: "Pathwise",
    subtitle: "AI-Powered Career Guidance Platform",
    category: "fullstack",
    context: "Idealize 2025 · Semi-finalist",
    stack: ["Next.js", "Spring Boot", "MySQL", "Generative AI"],
    description:
      "Developed the Coach Session booking system, Community discussion platform, and real-time Messaging module — integrated end-to-end from the Next.js UI through the Spring Boot API to the database layer.",
    github: "https://github.com/Ravindu-Hasanka/pathwise-backend",
  },
  {
    title: "Ayurvedic Leaf Analysis",
    subtitle: "Species Identification & Health Assessment",
    category: "ml",
    context: "Final Year Research · University of Moratuwa",
    stack: ["Python", "OpenCV", "TensorFlow", "scikit-learn"],
    description:
      "Machine vision framework to identify Ayurvedic leaf species and assess plant freshness from image inputs — addressing a real quality-control gap in Sri Lanka's herbal medicine supply chain.",
    github: "https://github.com/6614Kavya/ayurveda-recognition",
  },
  {
    title: "LankaGrid Forecaster",
    subtitle: "Short-Term Energy Load Prediction",
    category: "ml",
    context: "Individual Project",
    stack: ["Python", "XGBoost", "SHAP", "Streamlit", "Pandas"],
    description:
      "XGBoost-based forecasting tool for Sri Lanka's grid demand at 15-minute intervals (R² = 0.9991). Applied SHAP for model interpretability and deployed a Streamlit dashboard for real-time scenario simulation.",
    github: "https://github.com/SiluniWijesinghe/SL-EnergyPredictor",
  },

];

export const EDUCATION = [
  {
    degree: "BSc (Hons) in Information Technology",
    school: "University of Moratuwa",
    period: "2022 – 2025",
    detail: "CGPA 3.78 / 4.00 · Dean's List: L1S2 (3.92) · L2S1 (4.00) · L2S2 (3.96)",
  },
  {
    degree: "G.C.E. Advanced Level — Physical Science",
    school: "Anula Vidyalaya, Nugegoda",
    period: "2020",
    detail: "Z-score 1.7467 · 2As & 1B",
  },
  {
    degree: "G.C.E. Ordinary Level",
    school: "Ananda Balika Vidyalaya, Kotte",
    period: "2017",
    detail: "9 A's",
  },
];
