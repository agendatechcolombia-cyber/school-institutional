import React from "react";
import { MapPin, MailIcon, Facebook, Youtube } from "lucide-react";

export default function ContactInfo() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6 md:px-0">


                <div>
                    <h2 className="text-2xl font-semibold mb-4 border-b border-secondary inline-block pb-1">
                        DATOS DEL COLEGIO
                    </h2>

                    <p className="mb-6 leading-relaxed text-gray-700">
                        Institución educativa con formación en preescolar, básica primaria y bachillerato
                        con valores católicos, humanos, sociales y capacidad empresarial cuyo liderazgo les
                        permita generar empleo, mejorar su calidad de vida y trabajar con alta responsabilidad social.
                    </p>


                    <div className="mb-6">
                        <h3 className="font-semibold flex items-center gap-2 text-[#0e1b2a]">
                            <MapPin size={18} /> Sede Zipa:
                        </h3>

                        <p className="ml-6 text-sm text-gray-700">
                            Calle 8 # 4-96 Centro Zipaquirá <br />
                            320 838 5312 <br />
                            secretaria.zipa@coldiocesano.edu.co
                        </p>
                    </div>


                    <div className="mb-6">
                        <h3 className="font-semibold flex items-center gap-2 text-[#0e1b2a]">
                            <MapPin size={18} /> Sede Pacho:
                        </h3>

                        <p className="ml-6 text-sm text-gray-700">
                            Calle 7A # 38A-112 al lado de la Capilla del Divino Niño <br />
                            323 623 1940 <br />
                            secretaria.pacho@coldiocesano.edu.co
                        </p>
                    </div>


                    <div className="flex gap-4 ml-1 mt-20">
                        <a
                            href="https://www.facebook.com/coldiocesanoasuncion?mibextid=LQQJ4d"
                            target="_blank"
                            className="p-3 rounded-md btn-primary hover:bg-[var(--color-primary)] transition"
                        >
                            <Facebook className="text-white" size={20} />
                        </a>

                        <a
                            href="https://www.youtube.com/channel/UCe3rci-ICdjB-SYIvFb4X5w"
                            target="_blank"
                            className="p-3 rounded-md btn-primary hover:bg-[var(--color-primary)]  transition"
                        >
                            <Youtube className="text-white" size={20} />
                        </a>

                        <a
                            href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&dsh=S321277000%3A1764197405084495&hd=coldiocesano.edu.co&osid=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession"
                            target="_blank"
                            className="p-3 rounded-md btn-primary hover:bg-[var(--color-primary)]  transition"
                        >
                            <MailIcon className="text-white" size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4 border-b border-secondary inline-block pb-1">
                        BUZÓN DE SUGERENCIAS PQRS
                    </h2>

                    <form className="space-y-4 text-[#0e1b2a]">


                        <input
                            type="text"
                            placeholder="Nombre Completo"
                            className="w-full p-3 rounded-lg bg-white text-[#0e1b2a] border border-[#0e1b2a] placeholder-gray-400 
                            focus:outline-none focus:ring-2 focus:ring-[#0e1b2a]/40 focus:border-[#0e1b2a]"
                        />

                        <input
                            type="email"
                            placeholder="Correo Electrónico"
                            className="w-full p-3 rounded-lg bg-white text-[#0e1b2a] border border-[#0e1b2a] placeholder-gray-400 
                            focus:outline-none focus:ring-2 focus:ring-[#0e1b2a]/40 focus:border-[#0e1b2a]"
                        />

                        <input
                            type="text"
                            placeholder="Teléfono"
                            className="w-full p-3 rounded-lg bg-white text-[#0e1b2a] border border-[#0e1b2a] placeholder-gray-400 
                            focus:outline-none focus:ring-2 focus:ring-[#0e1b2a]/40 focus:border-[#0e1b2a]"
                        />


                        <select
                            className="w-full p-3 rounded-lg bg-white text-[#0e1b2a] border border-[#0e1b2a] 
                            focus:outline-none focus:ring-2 focus:ring-[#0e1b2a]/40 focus:border-[#0e1b2a]"
                        >
                            <option value="">—Sede—</option>
                            <option value="pacho">Pacho</option>
                            <option value="zipa">Zipaquirá</option>
                        </select>

                        <select
                            className="w-full p-3 rounded-lg bg-white text-[#0e1b2a] border border-[#0e1b2a] 
                            focus:outline-none focus:ring-2 focus:ring-[#0e1b2a]/40 focus:border-[#0e1b2a]"
                        >
                            <option value="">—Tipo—</option>
                            <option value="felicitacion">Felicitación</option>
                            <option value="peticion">Petición</option>
                            <option value="queja">Queja</option>
                            <option value="reclamo">Reclamo</option>
                            <option value="sugerencia">Sugerencia</option>
                        </select>


                        <textarea
                            placeholder="Mensaje"
                            rows={4}
                            className="w-full p-3 rounded-lg bg-white text-[#0e1b2a] border border-[#0e1b2a] placeholder-gray-400
                            focus:outline-none focus:ring-2 focus:ring-[#0e1b2a]/40 focus:border-[#0e1b2a]"
                        />

                        <button
                            type="submit"
                            className="px-6 py-3 btn-primary text-white rounded-md hover:bg-[#14273a] transition font-semibold"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
