import { motion } from "framer-motion";
import { RiShirtLine } from "react-icons/ri";
import { PiDressBold } from "react-icons/pi";

const DressCode = () => {
  // Animaciones
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const bounce = {
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  const swing = {
    swing: {
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.15 }
        }
      }}
      className="px-5 py-8 bg-white"
    >
      <div className="max-w-md mx-auto text-center">
        {/* Iconos de vestimenta animados */}
        <motion.div className="flex justify-center mb-3 gap-4">
          <motion.div
            variants={bounce}
            animate="bounce"
          >
            <RiShirtLine className="w-8 h-8 text-cement-green"/>
          </motion.div>
          <motion.div
            variants={swing}
            animate="swing"
          >
            <PiDressBold className="w-8 h-8 text-cement-green"/>
          </motion.div>
        </motion.div>
        
        <motion.h2 
          variants={fadeIn}
          className="text-2xl font-regular font-date tracking-wider text-dark-cement mb-2"
        >
          VESTIMENTA
        </motion.h2>
        
        <motion.p 
          variants={fadeIn}
          transition={{ delay: 0.1 }}
          className="text-gray-700 font-bold text-3xl mb-2 font-script"
        >
          Sport elegante
        </motion.p>
        
        <motion.p 
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-xs font-serif"
        >
          Amablemente, el color verde únicamente para la quinceañera
        </motion.p>
      </div>
    </motion.section>
  )
}

export default DressCode;