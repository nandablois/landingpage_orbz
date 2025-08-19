import Sdk from './ui/svg/sdk'
import Brush from './ui/svg/brush'
import Chess from './ui/svg/chess'
import Atr from './ui/svg/atr'
import Section from './ui/Section'
import ContainerRow from './ui/ContainerRow'

const features = [
  { icon: <Sdk />, title: "Projetos únicos" },
  { icon: <Brush />, title: "Criatividade" },
  { icon: <Chess />, title: "Estratégia" },
  { icon: <Atr />, title: "Colaboração" },
]

export default function CreativeTechnology() {
  return (
    <Section bg="bg-gray-light" overflow="overflow-x-hidden">
     <ContainerRow gap="gap-12 md:gap-[120px]">

        <div className="md:w-1/2 min-w-0 flex flex-col items-start gap-4 order-1 md:order-2">
          <h1 className="font-black text-[32px] md:text-[50px] leading-tight md:mr-0 lg:mr-[380px]">
            Na Orbz a criatividade encontra a tecnologia
          </h1>
          <p className="font-misto text-[16px] md:text-xl text-muted-gray md:mr-[240px] text-left md:text-left">
            Somos uma <strong>equipe apaixonada por transformar</strong> conceitos em experiências digitais inesquecíveis. <strong>Combinando design criativo, desenvolvimento habilidoso e estratégia digital inteligente</strong>, estamos aqui para transformar suas ideias em realidade digital.
          </p>
        </div>

        <div className="md:w-1/2 min-w-0 md:pl-[182px] grid grid-cols-2 gap-y-6 gap-x-4 text-muted-gray text-center md:text-left order-2 md:order-1">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center md:items-start gap-2 max-w-[150px]">
              <div className="mb-2 w-10 h-10 sm:w-10 sm:h-10 transform scale-75 sm:scale-100">{feature.icon}</div>
              <span className="text-2xl font-semibold">{feature.title}</span>
            </div>
          ))}
        </div>

      </ContainerRow>
    </Section>
  )
}
