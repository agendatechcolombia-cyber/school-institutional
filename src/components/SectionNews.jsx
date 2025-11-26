import React from "react";
import { Link } from "react-router-dom";

const sample = [
  { id: 1, title: "Semana de la ciencia 2025", date: "2025-04-10", excerpt: "Actividades y feria científica." },
  { id: 2, title: "Entrega de reconocimientos", date: "2025-03-02", excerpt: "Premios a la excelencia." }
];

export default function SectionNews(){
  return (
    <section className="container py-12">
      <h3 className="text-2xl font-semibold text-primary">Noticias</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {sample.map(n => (
          <article key={n.id} className="p-5 bg-white rounded shadow">
            <h4 className="font-semibold">{n.title}</h4>
            <p className="text-sm text-slate-500">{new Date(n.date).toLocaleDateString()}</p>
            <p className="mt-2 text-slate-700">{n.excerpt}</p>
            <Link to="/noticias" className="mt-3 inline-block text-primary font-medium">Leer más →</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
