import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import News from "./pages/News";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SectionAbout from "./components/SectionAbout";
import InstitutionalValuesAndPrinciples from "./pages/InstitutionalValuesAndPrinciples";
import HistoricalReview from "./pages/HistoricalReview";
import InstitutionalIdentity from "./pages/InstitutionalIdentity";
import Manuals from "./pages/Manuals";
import AdmisionesPacho from "./pages/AdmissionsPacho";
import PreRegistrationsPacho from "./pages/PreRegistrationsPacho";
import PreRegistrationsZipa from "./pages/PreRegistrationsZipa";
import AdmisionesZipa from "./pages/AdmissionsZipa";
import ContactInfo from "./pages/ContactInfo";
import MissionVision from "./pages/MissionVision";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-24 md:pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mision-vision-filosofia" element={<MissionVision />} />
          <Route path="/quienes-somos" element={<SectionAbout />} />
          <Route path="/valores-principios" element={<InstitutionalValuesAndPrinciples />} />
          <Route path="/resena-historica" element={<HistoricalReview />} />
          <Route path="/identidad-institucional" element={<InstitutionalIdentity />} />
          <Route path="/admisiones-pacho" element={<AdmisionesPacho />} />
          <Route path="/admisiones-zipa" element={<AdmisionesZipa />} />
           <Route path="/preinscripciones-pacho" element={<PreRegistrationsPacho />} />
           <Route path="/preinscripciones-zipa" element={<PreRegistrationsZipa />} />
          <Route path="/manuales" element={<Manuals />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/contactanos" element={<ContactInfo />} />
        </Routes>
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
