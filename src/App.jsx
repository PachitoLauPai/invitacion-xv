import { AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import InvitationSection from './components/InvitationSection';
import BibleVerse from './components/BibleVerse';
import EventDetails from './components/EventDetails';
import DressCode from './components/DressCode';
import GiftsSection from './components/GiftsSection';
import RSVP from './components/RSVP';

function App() {
  return (
    <div className="w-full max-w-md mx-auto bg-white text-gray-800 font-sans overflow-hidden">
      <AnimatePresence mode="wait">
        {/* HeroSection no necesita AnimatePresence porque usa animate inicial */}
        <HeroSection />
        
        {/* InvitationSection con animación de presencia */}
        <InvitationSection key="invitation" />
        
        {/* BibleVerse con key única para cada instancia */}
        <BibleVerse 
          key="verse1"
          verse="Porque yo sé los planes que tengo para vosotros, dice Jehová, planes de bienestar y no de mal, para daros porvenir y esperanza."
          reference="Jeremías 29:11"
        />
        
        <EventDetails key="eventDetails" />
        <DressCode key="dressCode" />
        <GiftsSection key="gifts" />
        
        <BibleVerse 
          key="verse2" 
          verse="Jehová cumplirá su propósito en mí; Tu misericordia, oh Jehová, es para siempre; No desampares la obra de tus manos."
          reference="Salmos 138:8"
        />
        
        <RSVP key="rsvp" />
      </AnimatePresence>
    </div>
  )
}

export default App;