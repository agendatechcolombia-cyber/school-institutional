import React from "react";

const posts = [
  { id:1, title:"Semana cultural", date:"2025-05-02", body:"Actividades culturales y artísticas" },
  { id:2, title:"Viaje de estudios", date:"2025-04-12", body:"Salida educativa a parque" }
];

export default function News(){
  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold text-primary">Noticias</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {posts.map(p => (
          <article key={p.id} className="p-5 bg-white rounded shadow">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-slate-500">{new Date(p.date).toLocaleDateString()}</p>
            <p className="mt-2 text-slate-700">{p.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
