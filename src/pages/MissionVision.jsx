import { motion } from "framer-motion";

const items = [
  {
    title: "Misión",
    image: "./images/mission-vision/mision.jpg",
    text: [
      "El Colegio Diocesano de la Asunción, fundamentado en los valores y principios de la fe católica,se dedica a formar integralmente a sus estudiantes, promoviendo su desarrollo humano, personal, familiar y espiritual. A través de procesos académicos de excelencia y la práctica empresarial, fomenta el fortalecimiento de sus capacidades intelectuales, cultivando la autonomía y el compromiso para el bien común y el servicio a la sociedad."
    ],
  },
  {
    title: "Visión",
    image: "./images/mission-vision/vision.jpg",
    text: [
      "El Colegio Diocesano de la Asunción será reconocido como una comunidad educativa de excelencia que transforma vidas, promoviendo una formación integral basada en los valores católicos y en el desarrollo humano. Inspirados en nuestra misión evangelizadora, proyectamos estudiantes que impacten positivamente en la sociedad, destacándose por su ética, liderazgo, pensamiento crítico y compromiso social."
    ],
  },
  {
    title: "Filosofía",
    image: "./images/mission-vision/filosofia.jpg",
    text: [
      "Nuestra Filosofía: La Institución, bajo la dirección y orientación del Señor Obispo de la Diócesis de Zipaquirá y como colegio que pertenece a la Diócesis de Zipaquirá, brinda una formación integral con base en la doctrina de la Iglesia Católica, para contribuir al crecimiento personal, comunitario y social.",
      "La filosofía educativa del Colegio Diocesano de la Asunción se fundamenta en una visión antropológica que reconoce a la persona humana como centro y principio de toda acción pedagógica."
    ],
  },
];

const filosofiaFinal = [
  "La autonomía escolar, entendida como la capacidad de la institución para superar sus propias dificultades y alcanzar los fines mínimos de formación establecidos en la Ley General de Educación, se construye a partir de la integración de las dimensiones física, intelectual, social, espiritual y económica del ser humano, orientando su desarrollo hacia la responsabilidad, la libertad equilibrada y la madurez ética.",
  "Toda actividad formativa se centra en la persona como ser trascendente, libre, reflexivo y creativo, capaz de buscar metas que den sentido a su vida personal y comunitaria. El proceso educativo trasciende la instrucción para promover la investigación crítica, la innovación y la reflexión sobre los desafíos del mundo contemporáneo."
];

export default function MissionVision() {
  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary border-b border-secondary mb-12 pb-1">
          Misión · Visión · Filosofía
        </h2>

      
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={item.image}
                alt={`Imagen de ${item.title}`}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-secondary">
                  {item.title}
                </h3>
                {item.text.map((paragraph, i) => (
                  <p key={i} className="text-gray-700 text-base text-justify mb-3">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


        <div>
          {filosofiaFinal.map((paragraph, i) => (
            <p key={i} className="text-gray-700 text-base text-justify mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
