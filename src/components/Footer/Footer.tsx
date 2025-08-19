import LogoDescription from "./LogoDescription";
import SocialIcons from "./SocialIcons";


const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#nos", label: "Nós" },
  { href: "#contato", label: "Contato" },
];


export default function Footer() {
  return (
    <footer className="bg-very-dark-gray text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-start md:hidden">
          <LogoDescription />
          <SocialIcons className="mt-2" />
        </div>

        <div className="hidden md:flex justify-between items-start gap-8 relative">
          <LogoDescription className="max-w-md md:pl-[220px]" />

          <div className="flex flex-col items-end ml-auto mr-[118px] text-[24px]">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <SocialIcons className="mt-[108px]" />
          </div>
        </div>

      </div>
    </footer>
  );
}
