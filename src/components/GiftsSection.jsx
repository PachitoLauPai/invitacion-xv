import { motion, AnimatePresence } from 'framer-motion';
import { IoMdGift } from "react-icons/io";
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const GiftsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const titleAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: { opacity: 0, y: 20 }
  };

  const dressCodeData = [
    { label: "Zapatilla", value: "37" },
    { label: "Pantalón", value: "28" },
    { label: "Polo", value: "S" },
    { label: "Color fav.", value: "rojo vino, verde cemento" }
  ];

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
        className="px-5 py-8 bg-gray-50"
      >
        <div className="max-w-md mx-auto text-center">
          {/* Icono de regalo animado */}
          <motion.div
            variants={pulse}
            animate="pulse"
            className="flex justify-center mb-4"
          >
            <IoMdGift className="w-10 h-10 text-cement-green" />
          </motion.div>
          
          <motion.h2 
            variants={titleAnimation}
            className="text-3xl font-regular font-special text-dark-cement mb-3"
          >
            Sugerencia de regalos
          </motion.h2>
          
          <motion.p 
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-gray-700 mb-5 text-sm font-serif"
          >
            Tu presencia en este día tan especial es el mejor regalo, pero si deseas obsequiarme un detalle, será recibido con mucho cariño y gratitud.
          </motion.p>
          
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#767d65",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="bg-cement-green text-white px-5 py-2 rounded-full text-sm"
          >
            Datos importantes
          </motion.button>
        </div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            {/* Fondo oscuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black bg-opacity-50"
            />
            
            {/* Contenido del modal */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              className="relative bg-white rounded-lg shadow-lg w-full max-w-sm p-6"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-dark-cement transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </button>
              
              <h3 className="text-xl font-medium font-special text-dark-cement mb-4 text-center">
                Mis medidas
              </h3>
              
              <ul className="space-y-3">
                {dressCodeData.map((item, index) => (
                  <li key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700 font-serif">{item.label}</span>
                    <span className="text-dark-cement font-medium">{item.value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GiftsSection;