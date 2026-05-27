import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

const ContactSection = () => (
  <section id="contact" className="py-28 px-6 xl:px-0 border-t border-white/5">
    <div className="container mx-auto">

      {/* Big statement heading */}
      <h2 className="text-[clamp(2rem,6vw,5rem)] font-extrabold leading-tight text-white mb-6 max-w-3xl">
        Let's build something{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
          together.
        </span>
      </h2>

      <p className="text-white/45 text-sm xl:text-base leading-relaxed max-w-xl mb-14">
        I'm currently looking for entry-level software engineering roles. If you'd like
        to talk about an opportunity or just want to connect, feel free to reach out.
      </p>

      {/* Contact cards */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        {[
          { icon: <FiMail size={16} />, label: "wijesinghe.anj@gmail.com", href: "mailto:wijesinghe.anj@gmail.com" },
          { icon: <FiPhone size={16} />, label: "+94 77 994 3832", href: "tel:+94779943832" },
        ].map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            className="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/8
                       bg-white/[0.02] hover:border-emerald-500/30 hover:bg-emerald-500/[0.04]
                       text-white/55 hover:text-white text-sm transition-all duration-200"
          >
            <span className="text-emerald-400">{icon}</span>
            {label}
          </a>
        ))}
      </div>

      {/* Social links — inline, uppercase */}
      <div className="flex flex-wrap gap-6">
        {[
          { label: "LINKEDIN ↗", icon: <FaLinkedin size={14} />, href: "https://www.linkedin.com/in/siluni-wijesinghe-81009728a/" },
          { label: "GITHUB ↗", icon: <FaGithub size={14} />, href: "https://github.com/SiluniWijesinghe" },
        ].map(({ label, icon, href }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            className="flex items-center gap-2 text-white/25 hover:text-emerald-400
                       text-xs font-semibold tracking-widest transition-colors duration-200"
          >
            {icon} {label}
          </Link>
        ))}
      </div>

    </div>
  </section>
);

export default ContactSection;
