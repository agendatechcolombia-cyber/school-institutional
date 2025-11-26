import React from "react";
import SectionAcademics from "../components/SectionAcademics";

export default function Academics(){
  return (
    <div>
      <section className="py-12 bg-surface">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary border-b border-secondary">Académica</h2>
          <p className="mt-2 text-slate-700">Información de planes de estudio y niveles.</p>
        </div>
      </section>
      <SectionAcademics />
    </div>
  );
}
