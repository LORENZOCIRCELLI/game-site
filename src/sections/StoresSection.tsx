import { motion } from "motion/react";

export default function DownloadSection() {
  return (
    <section className="w-full bg-[#140f14] text-white py-16 px-8 flex justify-center">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#231B23] rounded-2xl px-8 py-12 max-w-4xl w-full text-center shadow-lg"
      >
        <h2 className="text-2xl md:text-4xl font-bold">
          Jogue e Aprenda com Sustentabilidade
        </h2>

        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Em breve você poderá baixar o jogo e explorar missões ecológicas
          inspiradas nos Objetivos de Desenvolvimento Sustentável.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
          
          <div className="relative">
            <button
              disabled
              className="bg-[#34A853] text-white font-semibold px-6 py-3 rounded-xl opacity-70 cursor-not-allowed"
            >
              Google Play
            </button>
            <span className="absolute -top-3 -right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-md">
              Em breve
            </span>
          </div>

          <div className="relative">
            <button
              disabled
              className="bg-black text-white font-semibold px-6 py-3 rounded-xl opacity-70 cursor-not-allowed"
            >
              App Store
            </button>
            <span className="absolute -top-3 -right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-md">
              Em breve
            </span>
          </div>

        </div>

      </motion.div>

    </section>
  );
}