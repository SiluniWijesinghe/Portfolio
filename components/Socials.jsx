import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/SiluniWijesinghe" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/siluni-wijesinghe-81009728a/" },
  { icon: <FaInstagram />, path: "" },
];

const Social = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyle}>
            {item.icon}
        </Link>;
      })}
    </div>
  );
};

export default Social;
