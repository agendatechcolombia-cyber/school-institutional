import React from "react";
import { motion } from "framer-motion";

const levels = [
  { title: "Preescolar", desc: "Desarrollo integral inicial." },
  { title: "Primaria", desc: "Formación básica con énfasis en competencias." },
  { title: "Bachillerato", desc: "Preparación académica y humana para la vida." },
  { title: "Técnica", desc: "Preparación académica y humana para la vida." }
];

export default function SectionAcademics(){
  return (
    <motion.section className="py-12 bg-surface">
      <div className="container">
        <h3 className="text-2xl font-semibold text-primary ">Niveles Académicos</h3>
        <div className="mt-6 grid sm:grid-cols-3 gap-6">
          {levels.map((l, i) => (
            <div key={i} className="p-6 bg-white rounded shadow">
              <h4 className="font-semibold">{l.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
