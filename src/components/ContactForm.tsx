import { MoveRight } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import Section from "./ui/Section";

export default function ContactForm() {
  const socialIcons = [
    { icon: FaWhatsapp, link: "#" },
    { icon: FaInstagram, link: "#" },
    { icon: FaFacebook, link: "#" },
    { icon: FaLinkedin, link: "#" },
  ];

  return (
    <Section overflow="overflow-x-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-[147px] pl-0 md:pl-[143px] pr-0 md:pr-[184px]">

  
        <div className="md:w-1/2 flex flex-col md:items-start  md:text-left gap-6">
          <h1 className="font-extrabold text-[32px] md:text-[84px] leading-tight">
            Entre em contato
          </h1>
          <p className="font-regular text-muted-gray text-base md:text-2xl max-w-md">
            Estamos prontos para ouvir suas ideias e transformá-las em sites incríveis.
          </p>

          <div className="flex gap-4 mt-9">
            {socialIcons.map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                className="flex items-center justify-center w-[55px] h-[55px] rounded-full bg-strong-violet text-white hover:opacity-80"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 w-full flex flex-col gap-6 bg-white mt-12 md:mt-0">
          <h2 className="text-[24px] md:text-[48px] font-black text-center md:text-left">
            Peça um orçamento!
          </h2>
          <form className="flex flex-col gap-4 items-center md:items-start">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-[304px] h-[69px] md:w-[530px] md:h-[69px] px-4 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-strong-violet"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-[304px] h-[69px] md:w-[530px] md:h-[69px] px-4 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-strong-violet"
            />
            <textarea
              placeholder="Escreva sua mensagem aqui..."
              className="w-[304px] h-[233px] md:w-[530px] md:h-[200px] px-4 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-strong-violet resize-none"
            ></textarea>
          </form>

          <div className="flex justify-center md:justify-start">
            <button className="flex items-center justify-center gap-2 bg-strong-violet text-white w-[233px] h-[44px] md:w-[342px] md:h-[54px] rounded-md font-medium hover:opacity-90 cursor-pointer transition">
              Envie a mensagem
              <MoveRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
