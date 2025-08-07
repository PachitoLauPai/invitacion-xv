import { motion } from 'framer-motion';
import { IoLocationOutline } from "react-icons/io5";

const EventDetails = () => {
  // Animaciones
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const pulse = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Función para abrir Google Maps
  const openGoogleMaps = () => {
    const address = encodeURIComponent("Amancaes 264, Villa María del Triunfo 15812");
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeIn}
      className="px-5 py-8 bg-gray-50"
    >
      <div className="text-center">
        {/* Icono de ubicación animado */}
        <motion.div
          variants={pulse}
          animate="pulse"
          className="flex justify-center mb-3"
        >
          <IoLocationOutline className="w-8 h-8 text-cement-green"/>
        </motion.div>
        
        <motion.h2 
          variants={fadeIn}
          className="text-2xl font-regular font-date text-dark-cement mb-3 tracking-wider"
        >
          DIRECCIÓN
        </motion.h2>
        
        <motion.p 
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="text-gray-700 mb-5 text-sm font-serif"
        >
          Calle los Amancaes 219, San Gabriel, Valle Bajo
        </motion.p>
        
        <motion.button
          onClick={openGoogleMaps}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "#767d65", // dark-cement
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }}
          whileTap={{ scale: 0.95 }}
          variants={fadeIn}
          transition={{ delay: 0.4 }}
          className="bg-cement-green text-white px-6 py-2 rounded-full text-sm"
        >
          Ver ubicación
        </motion.button>
      </div>
    </motion.section>
  )
}

export default EventDetails;