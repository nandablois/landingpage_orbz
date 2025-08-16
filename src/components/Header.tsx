import { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BsList } from "react-icons/bs";
import orbzLogo from '../assets/logo-orbz.png';
import React from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#servicos", label: "Serviços" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#nos", label: "Nós" },
    { href: "#contato", label: "Contato" },
  ];

  const socialLinks = [
    { href: "#", icon: <RiWhatsappFill /> },
    { href: "#", icon: <FaInstagram /> },
    { href: "#", icon: <FaFacebookF /> },
    { href: "#", icon: <FaLinkedinIn /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-very-dark-gray text-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <div className="flex px-0 md:px-[173px]">
            <img src={orbzLogo} alt="Logo" className="h-12 w-auto" />
          </div>

      
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

     
          <div className="flex items-center space-x-4">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {React.cloneElement(item.icon, {size: isMobile ? 12 : 22 })}
              </a>
            ))}
          </div>

          <div className="md:hidden ml-2">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <BsList size={28} />
            </button>
          </div>

        </div>

        {menuOpen && (
          <nav className="md:hidden bg-very-dark-gray mt-2 flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 px-4 rounded hover:bg-gray-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
