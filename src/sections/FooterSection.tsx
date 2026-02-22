import { motion } from "motion/react";

export default function FooterSection() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-black text-white px-6 md:px-20 py-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <h2 className="text-2xl font-bold">Guardiões do Planeta</h2>
          <p className="text-sm mt-3 text-gray-300 leading-relaxed">
            Um jogo educativo voltado para conscientização ambiental baseado
            nos Objetivos de Desenvolvimento Sustentável.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Navegação</h3>
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">ODS</a>
          <a href="#" className="hover:underline">Sobre o Projeto</a>
          <a href="#" className="hover:underline">Contato</a>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Projeto Acadêmico</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Desenvolvido em colaboração com a Universidade de Ribeirão Preto
            para fins educacionais e científicos. 
            <p>Projeto pertencente a Prof. Dra. Isadora A. L. Ismail</p>
          </p>
          
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Guardiões do Planeta — Todos os direitos reservados
      </div>
    </motion.footer>
  );
}