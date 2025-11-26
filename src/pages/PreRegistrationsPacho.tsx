"use client";

import { motion } from "framer-motion";

export default function PreRegistrationsPacho() {
  return (
    <section className="bg-white">

      <div className="container mx-auto px-6 py-12 max-w-5xl">
        
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#7f3c4d] mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Preinscripciones Sede Pacho
        </motion.h2>

        {/* FORMULARIO */}
        <motion.iframe
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          src="https://docs.google.com/forms/d/e/1FAIpQLSctb9DpSi_prDjSthGVrFnZqlZKBmGuqq21iU83WTRriQhxow/viewform"
          width="100%"
          height="1500"
          style={{
            border: "none",
            borderRadius: "10px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.15)"
          }}
        ></motion.iframe>

      </div>
    </section>
  );
}
