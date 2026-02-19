import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from '/logo.png'
import './App.css'
import { motion } from "motion/react"
import bg from '/bg.png'
import Button from '/button.svg'
function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='text-gray-800 w-screen h-screen flex items-center justify-center flex-col bg-cover bg-center'
      style={{ backgroundImage: `url(${bg})` }}
    >
    <div className="grid grid-rows-4 w-screen h-screen">
      <div className=''></div>
      <div className="justify-center items-stretch flex object-contain h-80"><img src={logo} alt="Logo" className=''/></div>
      <div className='justify-center flex w-full'>
        <motion.a
          href="#"
          whileHover={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
          }}
          className='flex justify-end items-end'
        >
          <img src={Button} alt="Button" className='w-32'/>
        </motion.a>
      </div>
      <div></div>
    </div>
    </motion.div>
  )
}

export default App
