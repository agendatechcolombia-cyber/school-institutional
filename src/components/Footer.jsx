import React from "react";
import { MapPin, Mail, Phone, Facebook, Youtube, MailIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#0e1b2a] text-white pt-16">

            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">

       
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="w-24 h-24 rounded overflow-hidden mb-4 shadow-md ring-2 ring-accent/40">
                        <img
                            src="./images/config/logo.jpg"
                            alt="Escudo Colegio Diocesano"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <h3 className="text-xl font-semibold text-accent">
                        Colegio Diocesano
                    </h3>
                    <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                        Educación con valores, humanismo y excelencia académica.
                    </p>
                </div>

          
                <div>
                    <h3 className="text-xl font-semibold mb-4 border-b border-accent pb-1">
                        Información Institucional
                    </h3>

                    <div className="space-y-4 text-sm">

               
                        <div>
                            <h4 className="flex items-center gap-2 font-semibold text-accent text-sm">
                                <MapPin size={16} /> Sede Zipa
                            </h4>
                            <p className="ml-6 text-gray-300">
                                Calle 8 # 4-96 Centro Zipaquirá <br />
                                Tel. 320 838 5312 <br />
                                secretaria.zipa@coldiocesano.edu.co
                            </p>
                        </div>

                 
                        <div>
                            <h4 className="flex items-center gap-2 font-semibold text-accent text-sm">
                                <MapPin size={16} /> Sede Pacho
                            </h4>
                            <p className="ml-6 text-gray-300">
                                Calle 7A # 38A-112 (Capilla del Divino Niño) <br />
                                Tel. 323 623 1940 <br />
                                secretaria.pacho@coldiocesano.edu.co
                            </p>
                        </div>

                    </div>
                </div>

          
                <div>
                    <h3 className="text-xl font-semibold mb-4 border-b border-accent pb-1">
                        Navegación
                    </h3>

                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-accent">Inicio</Link></li>

                        <li><Link to="/quienes-somos" className="hover:text-accent">¿Quiénes Somos?</Link></li>
                        <li><Link to="/mision-vision-filosofia" className="hover:text-accent">Misión - Visión - Filosofía</Link></li>
                        <li><Link to="/resena-historica" className="hover:text-accent">Reseña Histórica</Link></li>
                        <li><Link to="/identidad-institucional" className="hover:text-accent">Identidad Institucional</Link></li>

                        <li><Link to="/academica" className="hover:text-accent">Niveles Educativos</Link></li>
                        <li><Link to="/manuales" className="hover:text-accent">Manuales</Link></li>

                        <li><Link to="/admisiones-pacho" className="hover:text-accent">Admisiones (Pacho)</Link></li>
                        <li><Link to="/admisiones-zipa" className="hover:text-accent">Admisiones (Zipa)</Link></li>

                        <li><Link to="/contactanos" className="hover:text-accent">Contáctanos</Link></li>
                    </ul>
                </div>

         
                <div>
                    <h3 className="text-xl font-semibold mb-4 border-b border-accent pb-1">
                        Síguenos
                    </h3>

                    <p className="text-gray-300 text-sm mb-4">
                        Conoce noticias, actividades y comunicados oficiales.
                    </p>

                    <div className="flex gap-3 mb-6">
                        <a href="https://www.facebook.com/coldiocesanoasuncion?mibextid=LQQJ4d" target="_blank" className="p-3 bg-[var(--color-accent)]  rounded-md hover:bg-[var(--color-primary2)] transition">
                            <Facebook size={20} className="text-white" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCe3rci-ICdjB-SYIvFb4X5w" target="_blank" className="p-3 bg-[var(--color-accent)] rounded-md hover:bg-[var(--color-primary2)] transition">
                            <Youtube size={20} className="text-white" />
                        </a>
                        <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&dsh=S321277000%3A1764197405084495&hd=coldiocesano.edu.co&osid=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession" target="_blank" className="p-3 bg-[var(--color-accent)] rounded-md hover:bg-[var(--color-primary2)] transition">
                            <MailIcon size={20} className="text-white" />
                        </a>
                        <Link
                            to="/contactanos"
                            className="inline-block px-3 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-md hover:bg-[var(--color-primary2)] transition"
                        >
                            Escríbenos
                        </Link>
                    </div>
                </div>

            </div>

        
            <div className="mt-12 bg-[#081521] text-center py-4 text-xs text-gray-400">
                © {new Date().getFullYear()} Colegio Diocesano — Todos los derechos reservados |
                Diseñado con ♥ por{" "}
                <a
                    href="https://agendatech.com.co"
                    target="_blank"
                    className="text-accent hover:underline"
                >
                    agendatech.com.co
                </a>
            </div>
        </footer>
    );
}
