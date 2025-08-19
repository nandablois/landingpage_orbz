import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const socialLinks = [
  { href: "#", icon: <RiWhatsappFill size={22} /> },
  { href: "#", icon: <FaInstagram size={22} /> },
  { href: "#", icon: <FaFacebookF size={22} /> },
  { href: "#", icon: <FaLinkedinIn size={22} /> },
];

export default function SocialIcons({ className = "" }) {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}