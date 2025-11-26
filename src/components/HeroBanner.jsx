import React, { useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroBanner() {
    const sliderRef = useRef(null);

    const slides = [
        {
            image: "./images/hero-banner/hero-banner-1.jpg",
            title: "Formación académica con valores",
            text: "Formamos a quienes liderarán el mundo con valores y visión",
        },
        {
            image: "./images/hero-banner/hero-banner-2.jpg",
            title: "Educación integral para el futuro",
            text: "Una educación que conecta fe, innovación y futuro",
        },
        {
            image: "./images/hero-banner/hero-banner-3.jpg",
            title: "Una comunidad educativa con valores",
            text: "Donde el proyecto de vida de tu hijo empieza a construirse con propósito",
        },
        {
            image: "./images/hero-banner/hero-banner-4.jpg",
            title: "Educamos para que tus hijos",
            text: "Brillen en el mundo y dejen huella en la vida",
        },
        {
            image: "./images/hero-banner/hero-banner-5.jpg",
            title: "Un colegio que no solo enseña",
            text: "Transforma, inspira y prepara para la vida real",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        pauseOnHover: false,
    };

    return (
        <section className="relative w-full h-[90vh] overflow-hidden">

            <button
                onClick={() => sliderRef.current.slickPrev()}
                className="absolute left-6 top-1/2 z-50 -translate-y-1/2 bg-black/70 hover:bg-[var(--color-primary2)] border border-accent text-accent p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="Anterior"
            >
                <ChevronLeft size={28} />
            </button>

   
            <button
                onClick={() => sliderRef.current.slickNext()}
                className="absolute right-6 top-1/2 z-50 -translate-y-1/2 bg-black/70 hover:bg-[var(--color-primary2)] border border-accent text-accent p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="Siguiente"
            >
                <ChevronRight size={28} />
            </button>

            <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="w-full h-[90vh] bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black/50" />

                            <div className="relative z-10 flex flex-col justify-center h-full px-6 container mx-auto text-white">
                                <motion.h2
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-4xl md:text-5xl font-bold max-w-3xl drop-shadow-lg"
                                >
                                    {slide.title}
                                </motion.h2>

                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-4 max-w-2xl text-lg drop-shadow-md"
                                >
                                    {slide.text}
                                </motion.p>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                    className="mt-6 flex gap-4"
                                >
                                    <a
                                        href="/admisiones-pacho"
                                        className="px-6 py-3 font-semibold rounded-md transition"
                                        style={{
                                            background: "#C0A16E",
                                            color: "#0e1b2a",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "#002855";
                                            e.currentTarget.style.color = "#C0A16E";
                                            e.currentTarget.style.border = "1px solid #C0A16E";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "#C0A16E";
                                            e.currentTarget.style.color = "#0e1b2a";
                                            e.currentTarget.style.border = "none";
                                        }}
                                    >
                                        Admisiones
                                    </a>

                                    <a
                                        href="/contactanos"
                                        className="inline-block border px-6 py-3 rounded-md transition"
                                        style={{
                                            borderColor: "#fff",
                                            color: "#fff",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "#C0A16E";
                                            e.currentTarget.style.color = "#0e1b2a";
                                            e.currentTarget.style.borderColor = "#C0A16E";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "transparent";
                                            e.currentTarget.style.color = "#fff";
                                            e.currentTarget.style.borderColor = "#fff";
                                        }}
                                    >
                                        Contáctanos
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}
