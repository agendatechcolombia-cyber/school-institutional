"use client";

import { motion } from "framer-motion";

export default function HistoricalReview() {
  return (
    <section className="bg-white">

      <div className="w-full">
        <img
          src="./images/historical/historia.jpg"
          alt="Reseña Histórica"
          className="w-full max-h-[380px] object-cover"
        />
      </div>


      <motion.div
        className="container mx-auto px-6 py-12 max-w-5xl"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#7f3c4d] text-center mb-10">
          Reseña Histórica
        </h2>


        <div className="space-y-6 text-gray-800 leading-relaxed text-justify text-[17px]">
          <p>
            Hacia el año 1955 suceden hechos revolucionarios de carácter político en el país.
            En Cundinamarca, Región de Rio negro la violencia desplaza campesinos y muchas
            de esas personas huyendo de sus regiones, se establecen en Zipaquirá.
          </p>

          <p>
            Para enfrentar la problemática de la difícil situación social y económica y ayudar
            a las familias desplazadas, el padre José del Carmen López, sacerdote Jesuita,
            promueve una institución: “El Centro Social San José”, cuya finalidad era la de
            preparar mujeres en el arte de las manualidades.
          </p>

          <p>
            En 1962, se presenta una crisis económica en los llamados municipios salineros,
            debido a que el Gobierno Nacional ordena cerrar los hornos caseros procesadores
            de sal.
          </p>

          <p>
            Que habían sido entonces la forma de trabajo y manera de ganarse la vida para
            muchas familias, lo cual trajo como consecuencia que mucha gente se quedara
            desempleada y sus familias con dificultades para educar a sus hijos.
          </p>

          <p>
            En este mismo año (1962) nace la “Normal Diocesana” por iniciativa del padre José
            de Carmen López y la aprobación de Monseñor Buenaventura Jáuregui, entonces
            obispo de la Diócesis de Zipaquirá; quienes para responder a esta urgente necesidad
            de preparar niñas hijas de los salineros y de los desplazados que llegan a Zipaquirá,
            donde algunas de ellas se capacitaban en manualidades en el Centro Social. El padre
            López dirigió el colegio hasta 1965, cuando la Diócesis asume la dirección del colegio
            y nombra una rectora.
          </p>

          <p>
            A partir de 1974 y mediante decreto 017 de la Secretaría de Educación, se continuó
            labores, pero no como normal, sino con la modalidad de bachillerato académico y cuyo
            propósito inicial y hasta el día de hoy es prestar un servicio social, especialmente a
            las familias de escasos recursos económicos del casco urbano y las hijas de las
            familias campesinas de la zona rural del municipio.
          </p>

          <p>
            En el año de 1976, el Centro Social San José cambia su visión social y las docentes
            que enseñaban manualidades en este centro social pasan al Colegio Diocesano de la
            Asunción, donde se impulsa el arte y las manualidades, entre ellas corte y confección.
          </p>

          <p>
            El Colegio Diocesano de la Asunción de Zipaquirá fue constituido el día 18 de Febrero
            de 1974 mediante el decreto 017 de 1974 como continuación de las labores educativas
            que venía desarrollando la Normal Diocesana de Zipaquirá, intensificando las áreas de
            manualidades con el recurso humano docente y la maquinaría proveniente del Centro
            Social San José.
          </p>

          <p>
            Desde el año 1992 se identificó la necesidad de mejorar la calidad de la formación en el
            área de vocacionales transformando las manualidades en la especialidad de Diseño,
            Patronaje y Confección; para ésta labor se contó con el apoyo de la Diócesis de
            Zipaquirá, la Conferencia Episcopal Italiana y la Asociación de Padres de Familia.
          </p>

          <p>
            En el año 1995 la Directora Licenciada Isabel Piñeros de Gutiérrez solicitó al SENA el
            apoyo para articular el programa de formación en confecciones. El 28 de Noviembre de
            1996 se gradúa la primera promoción de Bachiller Académico Técnico en Confección y
            Patronaje Industrial con 20 estudiantes.
          </p>

          <p>
            Desde su inicio y hasta 1996, el Colegio Diocesano contó con la aprobación oficial de la
            Secretaría de Educación hasta grado noveno. En este año se gestiona la aprobación
            de décimo y once completando el bachillerato. En 1999 se nombra como rector al
            señor Jairo Uhia.
          </p>

          <p>
            En el año 2000 es aprobado como Colegio Técnico con Especialización en Confección y
            Patronaje Industrial. Entre 2000 y 2004, el colegio sufre una crisis económica debido a
            reformas del Ministerio que retiraron docentes oficiales de instituciones privadas.
          </p>

          <p>
            En 2005 es nombrado rector el padre Fabio Sady Gómez, quien lidera la recuperación
            económica de la institución.
          </p>

          <p>
            En el año 2010 se aprueba la Básica Primaria. En 2011 se amplía la cobertura para
            Preescolar. En 2014 se solicitan nuevos énfasis técnicos con el SENA. En 2015 se
            aprueba el carácter mixto.
          </p>

          <p>
            En el 2019 se gradúa la primera promoción mixta con dos estudiantes varones en la
            especialidad de Diseño, Patronaje y Confección.
          </p>


          <div className="p-6 rounded-xl bg-[#0000001a] mt-10">
            <h3 className="text-xl font-semibold mb-4">
              Rectores que han hecho parte de la administración del Colegio
            </h3>

            <ul className="list-disc pl-5 space-y-1">
              <li>
                HERMANA MARIA DE BETANIA – <strong>1962-1963</strong>
              </li>
              <li>
                PRESBÍTERO JOSE DEL CARMEN LOPEZ – <strong>1963-1965</strong>
              </li>
              <li>
                SEÑORA ISABEL DE PIÑEROS – <strong>1965-1999</strong>
              </li>
              <li>
                SEÑOR JAIRO UHIA – <strong>2000-2004</strong>
              </li>
              <li>
                PRESBÍTERO FABIO SADY GOMEZ – <strong>2005 – 13 junio 2021</strong>
              </li>
              <li>
                PRESBÍTERO CARLOS EDUARDO VILLAMIL MOLINA –{" "}
                <strong>2021 – 2023</strong>
              </li>
              <li>
                LIC. ISABEL KARINA GARCÍA CASTAÑEDA –{" "}
                <strong>2024 – ACTUAL</strong>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
