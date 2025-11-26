import React from "react";
import { motion } from "framer-motion";

export default function SectionAbout(){
  return (
    <motion.section className="container py-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-semibold text-primary">Quiénes somos</h3>
          <p className="mt-4 text-slate-700">Somos una institución educativa comprometida con la formación integral de nuestros estudiantes, fomentando valores, ciencia y cultura.</p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Excelencia académica</li>
            <li>• Formación en valores</li>
            <li>• Actividades extracurriculares</li>
          </ul>
        </div>
        <div>
          <img src="./images/manuals/manuals.jpg" alt="Quiénes somos" className="rounded shadow-md" />
        </div>
      </div>
    </motion.section>
  );
}
