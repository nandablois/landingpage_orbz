import orbzLogo from '../../assets/logo-orbz.png';

export default function LogoDescription({ className = "" }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <img src={orbzLogo} alt="Logo Orbz" className="h-12 mb-4 w-[127px]" />
      <p className="text-[10px] md:text-sm text-gray-300 font-archivo">
        Em busca de um site que realmente se destaque? Solicite um orçamento hoje e dê o próximo passo para o sucesso online.
      </p>
    </div>
  );
}