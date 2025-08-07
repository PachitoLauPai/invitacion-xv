import { motion } from 'framer-motion';

const HeroSection = () => {
  // Configuración de animaciones
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const textGlow = {
    hidden: { textShadow: "0 0 0px rgba(255,255,255,0)" },
    visible: { 
      textShadow: "0 0 10px rgba(255,255,255,0.8)",
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.3 }}
      className="relative h-[70vh] w-full overflow-hidden"
    >
      {/* Fondo con efecto de zoom sutil */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('/src/assets/images/hero-mobile.jpeg')] bg-cover bg-center"
      />
      
      {/* Overlay con animación de opacidad */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-black"
      />
      
      {/* Contenido principal */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.h1 
          variants={slideUp}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-4xl md:text-5xl font-script text-white mb-2"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
        >
          Mis 15 años
        </motion.h1>
        
        <motion.h2
          variants={slideUp}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="text-3xl md:text-4xl font-serif text-white mt-4"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
        >
          ¡Llegó el gran día!
        </motion.h2>
      
      </div>
    </motion.section>
  );
};

export default HeroSection;