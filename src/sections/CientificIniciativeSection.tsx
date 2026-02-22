import { motion } from "motion/react";

export default function InformationSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col justify-start items-center h-screen w-screen bg-"
    >
      <div className=" text-white text-4xl w-full flex justify-center h-40 items-center">Information Section</div>
      <div className=" bg-gray-700 -z-10 grid grid-cols-2 w-screen">
        <div className="p-4 text-white">Information 1</div>
      </div>
      
    </motion.div>
  );
}