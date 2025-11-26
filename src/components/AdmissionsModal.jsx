import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function AdmissionsModal() {
    const [open, setOpen] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => {
            setOpen(true);
            setTimeout(() => setAnimate(true), 50);
        }, 300);
        return () => clearTimeout(t);
    }, []);

    const closeModal = () => {
        setAnimate(false);
        setTimeout(() => setOpen(false), 300);
    };

    if (!open) return null;

    return (
        <div
            className={`fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center px-4 transition-opacity duration-500 ${animate ? "opacity-100" : "opacity-0"
                }`}
            onClick={closeModal}
        >
            <div
                className={`relative max-w-3xl w-full bg-[#0e1b2a] rounded-lg overflow-hidden shadow-2xl border border-[#C0A16E] transform transition-all duration-500 ${animate ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-5"
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* BOTÓN CERRAR */}
                <button
                    className="absolute top-3 right-3 bg-[#C0A16E] text-[#0e1b2a] rounded-full p-1 hover:bg-[#d4ba82] transition z-50"
                    onClick={closeModal}
                >
                    <X size={20} />
                </button>

                {/* IMAGEN SUPERIOR */}
                <div className="relative">
                    <img
                        src="/images/admissions/pacho.jpg"
                        alt="Admisiones abiertas"
                        className="w-full h-64 object-cover"
                    />

                    {/* CURVA INVERTIDA EXACTA */}
                    <svg
                        className="absolute bottom-0 left-0 w-full h-32 z-10"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#0e1b2a"
                            d="M0,256 C300,350 1140,350 1440,256 V320 H0 Z"
                        ></path>
                    </svg>

                    {/* ESCUDO SUPERPUESTO */}
                    <img
                        src="https://www.coldiocesano.edu.co/wp-content/uploads/2025/09/escudo-2025.jpg"
                        alt="Escudo"
                        className="absolute right-8 -bottom-16 w-32 drop-shadow-2xl z-20"
                    />
                </div>

                {/* CONTENIDO INTERIOR */}
                <div className="pt-20 px-10 pb-12 text-white relative z-40">

                    <h2 className="text-lg tracking-wide font-light text-[#C0A16E]">
                        Colegio Diocesano de la Asunción
                    </h2>

                    <h3 className="text-3xl font-semibold mb-6">
                        Niveles educativos:
                    </h3>

                    <p className="text-xl font-light mb-8">
                        Preescolar | Primaria | Secundaria | Media Técnica
                    </p>

                    <h1 className="text-4xl font-bold mb-4 text-[#C0A16E]">
                        Admisiones abiertas
                    </h1>

                    <p className="text-xl mb-8 leading-relaxed">
                        Formamos corazones, mentes y espíritus para cambiar el mundo.
                    </p>

                    <div className="text-sm space-y-3">
                        <p>
                            <span className="text-[#C0A16E]">Pacho</span> |
                            Calle 7A No. 38A - 112 |
                            📞 333 400 6473
                        </p>
                        <p>
                            <span className="text-[#C0A16E]">Zipaquirá</span> |
                            Calle 8 No. 4-96 |
                            📞 320 838 5312
                        </p>
                    </div>

                    <p className="text-right text-sm mt-6 opacity-80">
                        www.diocesano.edu.co
                    </p>
                </div>
            </div>
        </div>
    );
}
