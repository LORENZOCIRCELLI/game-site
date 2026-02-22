import { motion } from "motion/react";

export default function GameDevelopmentSection() {
  return (
    <section className="w-full min-h-screen bg-[#140f14] text-white px-6 md:px-20 py-20 flex flex-col items-center">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center max-w-4xl"
      >
        Desenvolvimento do Jogo
      </motion.h2>

      <p className="mt-6 text-center max-w-3xl text-lg leading-relaxed">
        Um projeto de iniciação científica que utiliza tecnologia e gamificação
        para ensinar sustentabilidade a crianças do ensino fundamental.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 max-w-6xl w-full">

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#211821] rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Sobre o Projeto</h3>
          <p className="text-sm leading-relaxed">
            Este jogo educativo mobile foi desenvolvido com base nos princípios dos
            Objetivos de Desenvolvimento Sustentável definidos pela Organização das Nações Unidas.
            A proposta é ensinar crianças a cuidar do meio ambiente por meio de experiências
            interativas e divertidas.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#211821] rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">🎯 Objetivos</h3>
          <ul className="text-sm space-y-2 list-disc list-inside">
            <li>Promover educação ambiental de forma lúdica</li>
            <li>Estimular hábitos sustentáveis nas crianças</li>
            <li>Relacionar o gameplay com os ODS</li>
            <li>Desenvolver consciência ecológica desde cedo</li>
          </ul>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#211821] rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Metodologia</h3>
          <p className="text-sm leading-relaxed">
            O projeto utiliza conceitos de gamificação, design centrado no usuário e
            aprendizado ativo. O desenvolvimento está sendo realizado de forma iterativa,
            com testes e validações ao longo das etapas.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#211821] rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Mecânicas do Jogo</h3>
          <ul className="text-sm space-y-2 list-disc list-inside">
            <li>Missões ecológicas</li>
            <li>Reciclagem e coleta seletiva</li>
            <li>Economia de água e energia</li>
            <li>Decisões com impacto ambiental</li>
          </ul>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-20 max-w-4xl text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Impacto Educacional</h3>
        <p className="text-lg leading-relaxed">
          O objetivo do projeto é contribuir para a formação de uma geração mais consciente,
          capaz de tomar decisões responsáveis e sustentáveis, alinhadas com os desafios
          ambientais do século XXI.
        </p>
      </motion.div>

    </section>
  );
}