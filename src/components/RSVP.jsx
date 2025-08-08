import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const RSVP = () => {
  // Animaciones reutilizables
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const pulseRotate = {
    pulse: {
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Función para redirigir a WhatsApp
  const confirmAttendance = () => {
    const phoneNumber = "51924456046"; // Reemplaza con tu número de WhatsApp (sin símbolos)
    const message = encodeURIComponent("¡Confirmo mi asistencia para tu cumpleaños :)!"); // Mensaje predeterminado
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
      className="px-5 py-8 bg-white"
    >
      <div className="max-w-md mx-auto text-center">
        {/* Icono de confirmación animado */}
        <motion.div
          className="flex justify-center mb-3"
          variants={pulseRotate}
          animate="pulse"
        >
          <FaRegCheckCircle className="w-8 h-8 text-cement-green" />
        </motion.div>
        
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl font-regular font-date tracking-wider text-dark-cement mb-1"
        >
          CONFIRMAR TU <br /> ASISTENCIA
        </motion.h2>
        
        <motion.p 
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-gray-600 mb-5 text-xs font-serif"
        >
          Por favor confirmar tu asistencia antes del 16 de agosto
        </motion.p>
        
        <motion.button 
          onClick={confirmAttendance} // Aquí añadimos el evento onClick
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          whileHover={{ 
            scale: 1.05, 
            backgroundColor: "#767d65",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" 
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-cement-green text-white px-8 py-3 rounded-full text-sm mb-5"
        >
          Confirmar
        </motion.button>
        
        <motion.p 
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
          className="text-gray-700 mb-3 text-sm font-serif"
        >
          Con mucha ilusión quiero vivir este momento rodeada de personas que han formado parte de mi vida.
          Será un honor contar con tu presencia.
        </motion.p>
        
        <motion.p 
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-cement-green font-script text-4xl font-bold m-7"
        >
          ¡Te esperamos!
        </motion.p>
      </div>
    </motion.section>
  )
}

export default RSVP;