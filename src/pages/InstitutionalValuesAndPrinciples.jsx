import { motion } from "framer-motion";

const valores = [
  {
    title: "Respeto",
    image: "./images/institutional-values-principles/valores1.png",
    text: "Reconocemos y valoramos a todas las personas, entendiendo nuestras diferencias y actuando con reciprocidad en derechos y deberes.",
  },
  {
    title: "Compromiso",
    image: "./images/institutional-values-principles/valores2.png",
    text: "Mantenemos un alto compromiso con el aprendizaje de los estudiantes en todos los niveles.",
  },
  {
    title: "Búsqueda de la Excelencia",
    image: "./images/institutional-values-principles/valores3.png",
    text: "Orientados al mejoramiento constante y la innovación continua.",
  },
  {
    title: "Integridad",
    image: "./images/institutional-values-principles/valores4.png",
    text: "Somos honestos, justos y confiables en todo lo que hacemos.",
  },
  {
    title: "Responsabilidad",
    image: "./images/institutional-values-principles/valores5.png",
    text: "Cumplimos compromisos y asumimos las consecuencias de nuestros actos.",
  },
  {
    title: "Libertad",
    image: "./images/institutional-values-principles/valores6.png",
    text: "Formamos alumnos orientados hacia la libertad con respeto y responsabilidad.",
  },
  {
    title: "Justicia",
    image: "./images/institutional-values-principles/valores7.png",
    text: "Buscamos el equilibrio entre el propio bien y el bien común.",
  },
  {
    title: "Tolerancia",
    image: "./images/institutional-values-principles/valores8.png",
    text: "La dignidad, diversidad y el respeto por las diferencias guían nuestra convivencia.",
  },
  {
    title: "Honestidad",
    image: "./images/institutional-values-principles/valores9.png",
    text: "Promovemos la verdad, transparencia y credibilidad.",
  },
  {
    title: "Cuidado del medio ambiente",
    image: "./images/institutional-values-principles/valores10.png",
    text: "La supervivencia humana depende de la salud del planeta.",
  },
  {
    title: "Solidaridad",
    image: "./images/institutional-values-principles/valores11.png",
    text: "Fomentamos el trabajo en equipo, compartir y convivir con los demás.",
  },
];

export default function InstitutionalValuesAndPrinciples() {
  return (
    <motion.section
      className="py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">

        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#7f3c4d] mb-12">
          Valores y Principios Institucionales
        </h2>


        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {valores.map((item, index) => (
            <motion.div
              key={index}
              className={`rounded-xl shadow-lg p-8 text-center ${
                index % 2 === 0 ? "bg-white" : "bg-[#f4f4f4]"
              }`}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
  
              <div className="flex justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-contain"
                  loading="lazy"
                />
              </div>

       
              <h3 className="text-xl font-semibold text-accent mb-3">
                {item.title}
              </h3>

        
              <p className="text-gray-700 leading-relaxed text-center">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
