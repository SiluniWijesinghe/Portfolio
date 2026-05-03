import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { SectionLabel, SectionHeading } from "@/components/ui/primitives";

const contacts = [
  {
    icon: <FiMail size={15} />,
    label: "wijesinghe.anj@gmail.com",
    href: "mailto:wijesinghe.anj@gmail.com",
  },
  {
    icon: <FiPhone size={15} />,
    label: "+94 77 994 3832",
    href: "tel:+94779943832",
  },
];

const socials = [
  {
    label: "GitHub",
    icon: <FaGithub size={15} />,
    href: "https://github.com/SiluniWijesinghe",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin size={15} />,
    href: "https://www.linkedin.com/in/siluni-wijesinghe-81009728a/",
  },
];

const ContactSection = () => (
  <section id="contact" className="py-24 px-6 xl:px-0 border-t border-white/5">
    <div className="container mx-auto max-w-3xl">
      <SectionLabel>Contact</SectionLabel>
      <SectionHeading>Get in touch</SectionHeading>

      <p className="text-white/50 text-sm xl:text-base leading-relaxed mb-10 max-w-lg">
        I'm currently looking for entry-level software engineering roles. If you'd like
        to talk, feel free to reach out — I'll get back to you promptly.
      </p>

      {/* Contact cards */}
      <div className="flex flex-col sm:flex-row gap-4">
        {contacts.map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-white/8
                       bg-white/[0.025] hover:border-emerald-500/35 hover:bg-emerald-500/[0.05]
                       text-white/60 hover:text-white text-sm transition-all duration-200"
          >
            <span className="text-emerald-400">{icon}</span>
            {label}
          </a>
        ))}
      </div>

      {/* Social links */}
      <div className="flex gap-6 mt-8">
        {socials.map(({ label, icon, href }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            className="flex items-center gap-2 text-white/35 hover:text-emerald-400 text-sm transition-colors duration-200"
          >
            {icon} {label}
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
