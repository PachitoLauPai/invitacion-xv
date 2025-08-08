import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPause, FaMusic } from 'react-icons/fa';

const InvitationSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [youtubePlayer, setYoutubePlayer] = useState(null);

  const handlePlayMusic = () => {
    if (!isPlaying) {
      // Crear el reproductor de YouTube si no existe
      if (!youtubePlayer) {
        const player = document.createElement('div');
        player.id = 'youtube-player';
        player.style.position = 'fixed';
        player.style.bottom = '-100px';
        player.style.left = '0';
        player.style.width = '0';
        player.style.height = '0';
        document.body.appendChild(player);

        // Cargar el iframe de YouTube API
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
          const ytPlayer = new window.YT.Player('youtube-player', {
            height: '0',
            width: '0',
            videoId: 'SnIzImY9wO4', // Reemplaza con el ID de tu video
            playerVars: {
              autoplay: 1,
              loop: 1,
              playlist: 'SnIzImY9wO4' // Mismo ID para loop
            },
            events: {
              onReady: () => {
                ytPlayer.playVideo();
                setYoutubePlayer(ytPlayer);
              }
            }
          });
        };
      } else {
        youtubePlayer.playVideo();
      }
    } else {
      youtubePlayer.pauseVideo();
    }
    setIsPlaying(!isPlaying);
  };

  // Animaciones
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      className="relative w-full px-5 py-12 bg-white"
    >
      {/* Fondo texturizado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/src/assets/images/soft-paper.jpg')] bg-cover"
      />

      {/* Indicador "Deslizar" */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-4 left-0 right-0 flex justify-center"
      >
        <div className="text-xs text-gray-500 tracking-widest">Deslizar ▼</div>
      </motion.div>

      <div className="max-w-md mx-auto text-center">
        {/* Botón de música */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePlayMusic}
          className="mb-8 p-3 rounded-full bg-cement-green bg-opacity-10 hover:bg-opacity-20 transition-all"
          variants={pulse}
          animate="pulse"
        >
          {isPlaying ? (
            <FaPause className="w-8 h-8 text-cement-green" />
          ) : (
            <FaMusic className="w-8 h-8 text-gray-400" />
          )}
        </motion.button>

        {/* Título principal */}
        <motion.h2
          variants={fadeInUp}
          className="text-5xl font-medium text-cement-green mb-6 font-special tracking-wider"
        >
          Estás Invitado
        </motion.h2>

        {/* Texto descriptivo */}
        <motion.p
          variants={fadeInUp}
          className="text-gray-700 mb-8 leading-relaxed font-serif text-sm md:text-base"
        >
          Nos embarcamos en una nueva aventura, y mis XV años no estarían completos sin la presencia de mis seres queridos, así que quiero que estés allí conmigo.
        </motion.p>

        {/* Fecha */}
        <motion.div
          variants={fadeInUp}
          className="my-8"
        >
          <p className="text-gray-600 mb-2 font-serif">El cumpleaños será el sábado</p>
          <div className="flex justify-center items-center space-x-3 font-date tracking-tight">
            <span className="text-4xl text-cement-green">23</span>
            <span className="text-xl text-gray-500">|</span>
            <span className="text-4xl text-gray-700 font-script">Agosto</span>
            <span className="text-xl text-gray-500">|</span>
            <span className="text-4xl text-cement-green">2025</span>
          </div>
          {/* Línea agregada para la hora */}
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
            className="text-gray-600 mt-3 text-lg font-serif"
          >
            A las <span className="text-dark-cement font-medium">9:00 PM</span>
          </motion.p>
        </motion.div>

        {/* Firma */}
        <motion.div
          variants={fadeInUp}
          className="my-8"
        >
          <p className="font-script text-4xl text-dark-cement">Jhonny Quispe</p>
          <p className="text-xl text-gray-500 font-serif">y</p>
          <p className="font-script text-4xl text-dark-cement">Norma Quispe</p>
        </motion.div>

        {/* Invitación formal */}
        <motion.div variants={fadeInUp}>
          <p className="mb-6 text-gray-600 text-sm font-serif">
            Se complacen en invitarles a celebrar los
          </p>
          <motion.h3
            whileHover={{ scale: 1.05 }}
            className="text-6xl font-script text-cement-green my-4"
          >
            XV
          </motion.h3>
          <p className="text-gray-700 text-sm font-serif">de su hija:</p>
          <motion.h4
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-script text-dark-cement mt-4"
          >
            Enny Noemi
          </motion.h4>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InvitationSection;