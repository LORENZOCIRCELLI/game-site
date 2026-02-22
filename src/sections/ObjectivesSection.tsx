import { motion } from "motion/react";

const odsList = [
  { id: 1, title: "Erradicação da Pobreza", color: "#E5243B" },
  { id: 2, title: "Fome Zero e Agricultura Sustentável", color: "#DDA63A" },
  { id: 3, title: "Saúde e Bem-estar", color: "#4C9F38" },
  { id: 4, title: "Educação de Qualidade", color: "#C5192D" },
  { id: 5, title: "Igualdade de Gênero", color: "#FF3A21" },
  { id: 6, title: "Água Potável e Saneamento", color: "#26BDE2" },
  { id: 7, title: "Energia Limpa e Acessível", color: "#FCC30B" },
  { id: 8, title: "Trabalho Decente e Crescimento Econômico", color: "#A21942" },
  { id: 9, title: "Indústria, Inovação e Infraestrutura", color: "#FD6925" },
  { id: 10, title: "Redução das Desigualdades", color: "#DD1367" },
  { id: 11, title: "Cidades e Comunidades Sustentáveis", color: "#FD9D24" },
  { id: 12, title: "Consumo e Produção Responsáveis", color: "#BF8B2E" },
  { id: 13, title: "Ação Contra a Mudança Global do Clima", color: "#3F7E44" },
  { id: 14, title: "Vida na Água", color: "#0A97D9" },
  { id: 15, title: "Vida Terrestre", color: "#56C02B" },
  { id: 16, title: "Paz, Justiça e Instituições Eficazes", color: "#00689D" },
  { id: 17, title: "Parcerias e Meios de Implementação", color: "#19486A" },
];

export default function ODSGrid() {
  return (
    <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen w-full bg-[#140f14] px-6 md:px-20 py-4 text-white items-center flex flex-col justify-center gap-10">
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold text-center mb-12 px-5"
      >
        Os 17 Objetivos de Desenvolvimento Sustentável
      </motion.h2>

    <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
    {odsList.map((ods) => (
    <motion.div
      key={ods.id}
      whileHover={{ scale: 1.05 }}
      className="w-40 h-32 rounded-2xl p-4 flex flex-col justify-between shadow-lg"
      style={{ backgroundColor: ods.color }}
    >
      <div className="text-sm font-bold">ODS {ods.id}</div>
      <div className="text-xs md:text-sm font-semibold leading-snug">
        {ods.title}
      </div>
    </motion.div>
  ))}
</div>
    </motion.section>
  );
}