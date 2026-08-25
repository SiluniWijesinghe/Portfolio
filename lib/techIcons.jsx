import { FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCsharp,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiDotnet,
  SiMysql,
  SiMicrosoftsqlserver,
  SiPostman,
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiPandas,
  SiGit,
  SiGithub,
  SiAzuredevops,
  SiFigma,
  SiStreamlit,
  SiDocker
} from "react-icons/si";
import { Cpu, Wifi, Radar, Sparkles, TrendingUp, Code2 } from "lucide-react";

// Single source of truth: tech/skill name -> icon + brand colour. Used by
// both the Skills grid and the tech-stack logo rows on project cards, so
// names only need to be spelled consistently in data/portfolioData.js.
export const TECH_ICONS = {
  Java: { Icon: FaJava, color: "#F58219" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  Python: { Icon: SiPython, color: "#3776AB" },
  "C#": { Icon: SiCsharp, color: "#9B4F96" },
  "C++": { Icon: SiCplusplus, color: "#00599C" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
  HTML5: { Icon: SiHtml5, color: "#E34F26" },
  CSS3: { Icon: SiCss3, color: "#1572B6" },
  "Spring Boot": { Icon: SiSpringboot, color: "#6DB33F" },
  ".NET / C#": { Icon: SiDotnet, color: "#512BD4" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  MSSQL: { Icon: SiMicrosoftsqlserver, color: "#CC2927" },
  "RESTful APIs": { Icon: SiPostman, color: "#FF6C37" },
  TensorFlow: { Icon: SiTensorflow, color: "#FF6F00" },
  "scikit-learn": { Icon: SiScikitlearn, color: "#F7931E" },
  OpenCV: { Icon: SiOpencv, color: "#5C3EE8" },
  Pandas: { Icon: SiPandas, color: "#150458" },
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: "#FFFFFF" },
  "Azure DevOps": { Icon: SiAzuredevops, color: "#0078D7" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  Streamlit: { Icon: SiStreamlit, color: "#FF4B4B" },
  "Generative AI": { Icon: Sparkles, color: "#A78BFA" },
  XGBoost: { Icon: TrendingUp, color: "#4ADE80" },
  SHAP: { Icon: Sparkles, color: "#FBBF24" },
  Microcontrollers: { Icon: Cpu, color: "#38BDF8" },
  "Wireless Communication": { Icon: Wifi, color: "#34D399" },
  Sensors: { Icon: Radar, color: "#F472B6" },
};

export const DEFAULT_TECH_ICON = { Icon: Code2, color: "#9CA3AF" };

export const getTechIcon = (name) => TECH_ICONS[name] || DEFAULT_TECH_ICON;
