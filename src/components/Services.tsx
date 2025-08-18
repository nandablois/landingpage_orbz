import { LaptopMinimalCheck } from "lucide-react";
import ActionKey from "./ui/svg/action_key";
import Build from "./ui/svg/build";


export default function Services() {
    const services = [
        {
            icon: <LaptopMinimalCheck size={52} />,
            title: "Sites Personalizados",
            description: "Criamos sites sob medida que refletem a essência da sua marca."
        },
        {
            icon: <ActionKey />,
            title: "SEO",
            description: "Maximizamos a visibilidade da sua marca nos resultados de pesquisa, aumentando o tráfego e as conversões."
        },
        {
            icon: <Build />,
            title: "Manutenção e Suporte",
            description: "Estamos aqui para garantir que seu site permaneça atualizado, seguro e funcionando sem problemas, para que você possa focar no crescimento do seu negócio."
        }
    ];

    return (
        <section className="flex flex-col px-6 py-10 md:py-32 lg:py-40 text-very-dark-blue-purple bg-gray-light">
            <div className="max-w-6xl mx-auto ">
                <h2 className="text-3xl md:text-7xl font-bold text-center mb-12">O que nós fazemos</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service, index) => {
                        const isBuild = index === 2;
                        return (
                            <div
                                key={index}
                                className={`
                                 p-6 flex flex-col transition-colors duration-300
                                ${isBuild ? 'bg-strong-violet text-white md:bg-white md:text-black hover:bg-strong-violet hover:text-white'
                                : 'bg-white hover:bg-strong-violet hover:text-white'}
                                group
                                `}
                            >
                                <div className="mb-4 p-2">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-black mb-4">{service.title}</h3>
                                <p className="font-archivo md:text-muted-gray group-hover:text-white">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
