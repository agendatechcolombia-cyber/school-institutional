"use client";

import { motion } from "framer-motion";

export default function AdmisionesZipa() {
  return (
    <section className="bg-white">

      {/* HERO */}
      <div className="w-full">
        <img
          src="./images/admissions/zipa.jpg"
          alt="Admisiones Sede Zipa"
          className="w-full object-cover max-h-[380px]"
        />
      </div>

      {/* CONTENIDO */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">

        {/* TÍTULO */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#7f3c4d] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Admisiones Sede Zipaquirá
        </motion.h2>

        {/* BOTÓN / IMAGEN AL FORMULARIO */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <a href="/preinscripciones-zipa">
            <img
              src="./images/admissions/header-pacho.jpg"
              alt="Preinscripciones Zipaquirá"
              className="rounded-lg shadow-lg w-full max-w-[650px] cursor-pointer hover:scale-[1.02] transition"
            />
          </a>
        </motion.div>

        <hr className="border-t-4 border-[#b80000] mb-12" />

        {/* IMAGEN DE PASOS */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
