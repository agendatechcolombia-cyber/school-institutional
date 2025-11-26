import HeroBanner from "../components/HeroBanner";
import SectionAbout from "../components/SectionAbout";
import SectionAcademics from "../components/SectionAcademics";
import SectionNews from "../components/SectionNews";
import SectionGallery from "../components/SectionGallery";
import AdmissionsModal from "../components/AdmissionsModal";


export default function Home() {
    return (
        <div className="overflow-x-hidden">
            <AdmissionsModal />
            <HeroBanner />
            <SectionAbout />
            <SectionAcademics />
            <SectionNews />
            <SectionGallery />
        </div>
    );
}
