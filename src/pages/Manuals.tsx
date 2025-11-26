"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Manuals() {

    // PDF seleccionado por defecto
    const [selectedPdf, setSelectedPdf] = useState("/pdfs/manual-convivencia.pdf");

    return (
        <section className="bg-white">


            <div className="w-full">
                <img
                    src="./images/manuals/manuals.jpg"
                    alt="Manual de Convivencia"
                    className="w-full max-h-[380px] object-cover"
                />
            </div>

      
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                  
                    <motion.article
                        className="lg:col-span-8"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#7f3c4d] mb-6">
                            Manual de Convivencia
                        </h2>

                
                        <iframe
                            key={selectedPdf}
                            src={selectedPdf}
                            title="Manual PDF"
                            width="100%"
                            height="790"
                            style={{
                                border: "none",
                                borderRadius: "10px",
                                boxShadow: "0 2px 12px rgba(0,0,0,0.15)"
                            }}
                        ></iframe>
                    </motion.article>

           
                    <motion.aside
                        className="lg:col-span-4 bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-xl font-semibold text-[#7f3c4d] mb-4">
                            Manuales
                        </h4>

                        <ul className="space-y-3 text-gray-700">

                            <li
                                onClick={() => setSelectedPdf("/pdfs/manual-convivencia.pdf")}
                                className={`px-3 py-2 rounded-md font-semibold cursor-pointer ${
                                    selectedPdf === "/pdfs/manual-convivencia.pdf"
                                        ? "bg-[#00000010] text-[#7f3c4d]"
                                        : "hover:text-[#7f3c4d]"
                                }`}
                            >
                                Manual de Convivencia
                            </li>

                            <li
                                onClick={() => setSelectedPdf("/pdfs/modelo-pedagogico.pdf")}
                                className="cursor-pointer hover:text-[#7f3c4d]"
                            >
                                Modelo Pedagógico
                            </li>

                            <li
                                onClick={() => setSelectedPdf("/pdfs/pei.pdf")}
                                className="cursor-pointer hover:text-[#7f3c4d]"
                            >
                                Nuestro PEI
                            </li>

                            <li
                                onClick={() => setSelectedPdf("/pdfs/protocolos-atencion.pdf")}
                                className="cursor-pointer hover:text-[#7f3c4d]"
                            >
                                Protocolos de Atención
                            </li>

                            <li
                                onClick={() => setSelectedPdf("/pdfs/rutas-procesos.pdf")}
                                className="cursor-pointer hover:text-[#7f3c4d]"
                            >
                                Rutas de Procesos
                            </li>
                        </ul>
                    </motion.aside>

                </div>
            </div>
        </section>
    );
}
