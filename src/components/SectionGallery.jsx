import React, { useState } from "react";

const images = [
  "./images/admissions/pacho.jpg",
  "./images/admissions/zipa.jpg",
  "./images/hero-banner/hero-banner-1.jpg",
  "./images/hero-banner/hero-banner-2.jpg",
  "./images/hero-banner/hero-banner-3.jpg",
  "./images/hero-banner/hero-banner-4.jpg",
  "./images/hero-banner/hero-banner-5.jpg",
  "./images/manuals/manuals.jpg",
  "./images/mission-vision/filosofia.jpg",
  "./images/mission-vision/mision.jpg",
  "./images/mission-vision/vision.jpg",
];

export default function SectionGallery() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  return (
    <section className="container py-12">
      <h3 className="text-2xl font-semibold text-primary">Galería</h3>
      <div className="mt-6 grid sm:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <button key={i} onClick={() => { setIdx(i); setOpen(true); }}>
            <img src={src} alt={`gal-${i}`} className="w-full h-36 object-cover rounded shadow-sm" />
          </button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setOpen(false)}>
          <img src={images[idx]} alt="large" className="max-h-[80vh] rounded shadow-lg" />
        </div>
      )}
    </section>
  );
}
