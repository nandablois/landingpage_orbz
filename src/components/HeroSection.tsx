export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-32 lg:py-40 bg-gradient-to-r from-very-dark-gray to-vivid-violet">
            <div className="max-w-4xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-snug md:leading-tight">
                    &lt;/Criamos juntos seu <br />
                    universo{" "}
                    <span className="bg-[url('src/assets/2Prancheta.png')]  bg-no-repeat bg-center bg-contain inline-block">
                        digital único
                    </span>
                </h1>
                <p className="mt-4 text-base sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-gray-300 font-archivo leading-snug">
                    Desde o código até o design, estamos aqui <br />
                    para transformar suas ideias em sites incríveis!
                </p>
            </div>
        </section>
    );
}
