import { motion } from "motion/react";

export default function InformationSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center w-full min-h-screen bg-[#140f14] px-6 md:px-20 py-16 justify-center"
    >
      <h2 className="text-white text-3xl md:text-5xl font-bold text-center max-w-4xl leading-snug">
        O que são os Objetivos de Desenvolvimento Sustentável?
      </h2>

      <p className="text-white text-center mt-6 max-w-3xl text-lg leading-relaxed">
        Os ODS são 17 objetivos globais criados pela Organização das Nações Unidas para
        tornar o mundo um lugar melhor até 2030.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl">
        
        <div className="bg-[#2A202A] rounded-2xl p-6 text-white shadow-lg">
          <h3 className="text-xl font-bold mb-3">O que são?</h3>
          <p className="text-sm leading-relaxed">
            São metas globais que ajudam a combater problemas como pobreza, fome e poluição.
          </p>
        </div>

        <div className="bg-[#2A202A] rounded-2xl p-6 text-white shadow-lg">
          <h3 className="text-xl font-bold mb-3">Para que servem?</h3>
          <p className="text-sm leading-relaxed">
            Eles guiam países e pessoas para melhorar a vida de todos e proteger o planeta.
          </p>
        </div>

        <div className="bg-[#2A202A] rounded-2xl p-6 text-white shadow-lg">
          <h3 className="text-xl font-bold mb-3">Como você pode ajudar?</h3>
          <p className="text-sm leading-relaxed">
            Economizando água, reciclando, respeitando as pessoas e cuidando da natureza.
          </p>
        </div>
      </div>
    </motion.section>
  );
}