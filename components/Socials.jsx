import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
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
