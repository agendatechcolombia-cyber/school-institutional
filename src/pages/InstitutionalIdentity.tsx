"use client";

import { motion } from "framer-motion";

export default function InstitutionalIdentity() {
  return (
    <section className="bg-white">

      <div className="w-full">institutional-Identity
        <img
          src="./images/institutional-identity/quienes-somos.jpg"
          alt="Identidad institucional"
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#7f3c4d] mb-10">
          Identidad institucional
        </h2>


        <div className="flex justify-center mb-8">
          <img
            src="./images/config/logo.jpg"
            alt="Himno Colegio"
            className="w-[260px] md:w-[380px] object-contain rounded-lg"
          />
        </div>

        <div className="flex justify-center mb-10">
          <audio
            controls
            src="./media/himno-colegio-diocesano.mp3"
            className="w-[330px] md:w-[450px]"
          />
        </div>


        <div className="text-gray-800 leading-relaxed text-[17px] space-y-8">

          <h3 className="text-center font-bold text-[20px]">
            HIMNO DEL COLEGIO DIOCESANO DE LA ASUNCIÓN ZIPAQUIRÁ
          </h3>


          <div>
            <h4 className="text-center text-[#7f3c4d] font-bold mb-2">CORO</h4>
            <p className="text-center font-semibold">
              Diocesanos por siempre seremos <br />
              Un ejemplo de Fe y de Virtud <br />
              y en la vida siempre aplicaremos <br />
              Esa gran formación con valor. (bis)
            </p>
          </div>


          <div>
            <h4 className="text-center text-[#7f3c4d] font-bold">I</h4>
            <p className="text-center">
              Con orgullo en el pecho portemos, <br />
              Del Colegio el emblema ideal <br />
              Y en el Alma por siempre llevemos <br />
              Un gran sello de ciencia y bondad.
            </p>
          </div>


          <div>
            <h4 className="text-center text-[#7f3c4d] font-bold">II</h4>
            <p className="text-center">
              A María su nombre honraremos, <br />
              Es Patrona de nuestro plantel <br />
              Con su ejemplo de Amor aprendamos <br />
              En un mundo difícil vencer
            </p>
          </div>


          <div>
            <h4 className="text-center text-[#7f3c4d] font-bold">III</h4>
            <p className="text-center">
              Con fervor y constancia estudiemos <br />
              Que el Colegio nos brinda el saber, <br />
              Muy seguro el mañana forjaremos <br />
              Aprender nos permite crecer.
            </p>
          </div>


          <div>
            <h4 className="text-center text-[#7f3c4d] font-bold">IV</h4>
            <p className="text-center">
              Compañeros con Fe y Esperanza <br />
              Construyamos un mundo de Paz, <br />
              Donde reine gloriosa armonía <br />
              Y nuestro paso que no se haga fugaz.
            </p>
          </div>


          <div>
            <h4 className="text-center text-[#7f3c4d] font-bold">V</h4>
            <p className="text-center">
              Como altivos jóvenes viviendo, <br />
              Con respeto, fe y dignidad <br />
              Bien lo dice el lema de lucha, <br />
              Orden, trabajo, también lealtad.
            </p>
          </div>

  
          <div>
            <h4 className="text-center text-[#7f3c4d] font-bold">VI</h4>
            <p className="text-center">
              Los maestros nos han inculcado <br />
              Ser personas de mucho valor, <br />
              Que nos llene de orgullo y de gozo, <br />
              Anhelando un futuro mejor.
            </p>
          </div>


          <div>
            <h4 className="text-center text-[#7f3c4d] font-bold">VII</h4>
            <p className="text-center">
              Con diseño, también confección, <br />
              Al mundo retamos con dignidad.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
