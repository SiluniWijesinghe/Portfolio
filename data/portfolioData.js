export const NAV_ITEMS = ["About", "Skills", "Experience", "Projects", "Contact"];

export const SKILLS = {
  Languages:   ["Java", "JavaScript", "TypeScript", "Python", "C#", "C++"],
  Frontend:    ["React", "Next.js", "React Native", "Tailwind CSS", "HTML/CSS"],
  Backend:     ["Spring Boot", ".NET / C#", "MySQL", "MSSQL", "RESTful APIs"],
  "ML & Data": ["TensorFlow", "scikit-learn", "OpenCV", "XGBoost", "Pandas", "SHAP"],
  DevOps:      ["Git", "Azure DevOps", "Postman", "Agile / Scrum"],
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
    title: "CentralSync — Inventory Management System",
    context: "Rootcode Labs",
    stack: ["React.js", "React Native", "Spring Boot", "MySQL"],
    description:
      "Cross-platform inventory system with real-time stock tracking, low-stock alerts, and automated report export — synchronised across web and mobile clients. Built the Item Management, Stock Management, and Reporting modules end-to-end.",
    github: "https://github.com/SiluniWijesinghe",
  },
  {
    title: "Pathwise — AI-Powered Career Guidance Platform",
    context: "Idealize 2025 · Semi-finalist",
    stack: ["Next.js", "Spring Boot", "MySQL", "Generative AI"],
    description:
      "Developed the Coach Session booking system, Community discussion platform, and real-time Messaging module — integrated end-to-end from the Next.js UI through the Spring Boot API to the database layer.",
    github: "https://github.com/SiluniWijesinghe",
  },
  {
    title: "LankaGrid-Forecaster — Energy Load Prediction",
    context: "Individual Project",
    stack: ["Python", "XGBoost", "SHAP", "Streamlit", "Pandas"],
    description:
      "XGBoost-based forecasting tool for Sri Lanka's grid demand at 15-minute intervals (R² = 0.9991). Applied SHAP for model interpretability and deployed a Streamlit dashboard for scenario simulation.",
    github: "https://github.com/SiluniWijesinghe",
  },
  {
    title: "Compound Leaf Analysis — Final Year Research",
    context: "University of Moratuwa (Ongoing)",
    stack: ["Python", "OpenCV", "TensorFlow", "scikit-learn"],
    description:
      "Machine vision framework to identify Ayurvedic leaf species and assess plant freshness from image inputs. Comparing handcrafted morphological feature extraction against deep learning on a custom 1,200+ image dataset.",
    github: "",
  },
];
