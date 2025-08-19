import { MoveRight } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperType } from "swiper";
import Pagination from "./ui/svg/pagination";
import Section from "./ui/Section";
import ContainerRow from "./ui/ContainerRow";

export default function OurWork() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <Section id="portfolio" paddingY="py-20 md:py-32 lg:py-40">
            <ContainerRow gap="gap-8">

                <div className="md:w-1/2 md:pl-[71px] text-very-dark-blue-purple text-left">
                    <p className="md:text-2xl font-bold">CONHEÇA</p>
                    <h2 className="font-extrabold text-[32px] md:text-[84px] leading-tight md:leading-[1.1]">
                        <span className="md:hidden">Nosso Trabalho</span>
                        <span className="hidden md:inline">
                            Nosso <br /> Trabalho
                        </span>
                    </h2>
                </div>
                <div className="md:w-1/2 flex flex-col items-center gap-4">

                    <div className="hidden md:grid grid-cols-2 gap-4 justify-center">
                        <img src="src/assets/Rectangle-64.png" alt="Projeto 1"
                            className="w-[440px] h-[375px] object-cover rounded-lg shadow-lg"
                        />
                        <img src="src/assets/Rectangle-65.png" alt="Projeto 2"
                            className="w-[440px] h-[375px] object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="w-full md:hidden">
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1}
                            onSwiper={(swiper: SwiperType | null) => (swiperRef.current = swiper)}
                        >
                            <SwiperSlide>
                                <img src="src/assets/Rectangle-64.png" alt="Projeto 1"
                                    className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="src/assets/Rectangle-65.png" alt="Projeto 2"
                                    className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="mt-6">
                        <Pagination
                            onNext={() => swiperRef.current?.slideNext()}
                        />
                    </div>

                    <button className="mt-6 flex items-center gap-2 bg-strong-violet text-white cursor-pointer px-6 py-3 rounded-lg font-regular">
                        Conheça mais
                        <span className="inline-block transform transition-transform ">
                            <MoveRight size={18} />
                        </span>
                    </button>
                </div>
            </ContainerRow>
        </Section>
    );
}
