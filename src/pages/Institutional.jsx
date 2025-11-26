import React from "react";

export default function Institutional(){
  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold text-primary">Institucional</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold">Misión</h3>
          <p className="mt-2 text-slate-700">Nuestra misión es ...</p>
        </div>
        <div>
          <h3 className="font-semibold">Visión</h3>
          <p className="mt-2 text-slate-700">Nuestra visión es ...</p>
        </div>
      </div>
    </section>
  );
}
