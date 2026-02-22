import { motion } from "motion/react";
import bg from "/bg.jpg";
import logo from "/logo.png";
import Button from "@mui/material/Button";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center justify-center min-h-screen w-screen bg-cover bg-center px-6 md:px-16 py-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative flex flex-col items-center text-center max-w-4xl">
        
        <img
          src={logo}
          alt="Logo Guardiões do Planeta"
          className="w-40 sm:w-56 md:w-72 lg:w-96 object-contain drop-shadow-2xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 md:mt-10 text-white font-bold text-lg sm:text-xl md:text-2xl leading-relaxed drop-shadow-xl"
        >
          Aprenda sobre o impacto ambiental e como proteger nosso planeta através
          de um jogo educativo e divertido!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 md:mt-12"
        >
          <Button
            variant="contained"
            color="success"
            size="large"
            className="px-6 py-3 text-base md:text-lg"
          >
            Descobrir Mais
          </Button>
        </motion.div>

      </div>
    </motion.section>
  );
}