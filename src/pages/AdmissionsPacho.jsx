"use client";

import { motion } from "framer-motion";

export default function AdmissionsPacho() {
  return (
    <section className="bg-white">

      {/* HERO */}
      <div className="w-full">
        <img
          src="./images/admissions/pacho.jpg"
          alt="Admisiones Sede Pacho"
          className="w-full object-cover max-h-[380px]"
        />
      </div>

      {/* CONTENIDO */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#7f3c4d] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Admisiones Sede Pacho
        </motion.h2>

        {/* BOTÓN QUE LLEVA AL FORMULARIO */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <a href="/preinscripciones-pacho">
            <img
              src="./images/admissions/header-pacho.jpg"
              alt="Preinscripciones Pacho"
              className="rounded-lg shadow-lg w-full max-w-[650px] cursor-pointer hover:scale-[1.02] transition"
            />
          </a>
        </motion.div>

        <hr className="border-t-4 border-[#b80000] mb-12" />

        {/* IMAGEN DE PASOS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src="./images/admissions/pasos-admisiones.jpg"
            alt="Pasos de Admisión"
            className="rounded-lg shadow-md w-full max-w-[900px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
