import { useState, useEffect } from "react";
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from './db';
import { useUserActivity } from "./hooks/useUserActivity";
import { useTransition } from "./hooks/useTransitions";

// COMPONENTS
import DataManagement from './components/DataManagement';
import Modal from "./components/Modal";

// FEATURES
import DiagonalGradientBackground from './features/DiagonalGradientBackground';
import Headbar from './features/Headbar';
import Bottombar from "./features/Bottombar";
import Home from './features/Home';

function App() {
  // MODALS PARAMETERS
  const [showModal, setShowModal] = useState(false);
  const { shouldRender, isAnimating } = useTransition(showModal, 500);

  // USER IDLE PARAMETERS
  const [idleCounter, setIdleCounter] = useState(0);
  const [isUserIdle, setIsUserIdle] = useState(false);

  // DATA PARAMETERS
  const settingsData = useLiveQuery(() => db.settings.get('main'));

  useEffect(() => {
    // Load/Initialize settings data
    const initDb = async () => {
      const existing = await db.settings.get('main');
      if (!existing) {
        await db.settings.put({
          id: 'main',
          colors: ['#4f219a', '#1a1035', '#000000', '#5d1780']
        });
        console.log("INITIALIZED SETTINGS DATA");
      }
    };

    // Increment idle counter
    const timer = setInterval(() => {
      setIdleCounter((prev) => prev + 1);
    }, 1000);
    
    initDb();

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (idleCounter >= 5 && !isUserIdle) {
      setIsUserIdle(true);
    }
  }, [idleCounter, isUserIdle]);

  useUserActivity(() => {
    // Reset idle counter if user is not idle
    setIdleCounter(0);
    setIsUserIdle(false);
  }, 1000);

  const currentColors = settingsData?.colors ?? ['#333', '#000'];

  return (
    <>
      <DiagonalGradientBackground colors={currentColors} />

      {/* WINDOW STRUCTURE */}
      <div className={`w-screen h-screen flex flex-col relative overflow-hidden`}>
        <div className='flex-none'>
          <Headbar isUserIdle={showModal ? false : isUserIdle} onClickSettings={() => {setShowModal(true)}} />
        </div>

        {/* MAIN VIEW */}
        <div className={`flex-1 flex flex-col items-center justify-center`}>
          <Home />
        </div>

        <div className='flex-none'>
          <Bottombar isUserIdle={showModal ? false : isUserIdle} />
        </div>
      </div>

      <div 
        onClick={() => {setShowModal(false)}} 
        style={{ transitionDelay: isAnimating ? "0ms" : "250ms" }}
        className={`w-screen h-screen absolute inset-0 flex flex-col items-center justify-center transition-all ease-in-out duration-500 ${isAnimating ? 'opacity-100 backdrop-blur-2xl' : 'opacity-0 backdrop-blur-none pointer-events-none'}`}
      >
        {shouldRender ? <Modal isAnimating={isAnimating} title={"Settings"} enterDelay="250ms" exitDelay="0ms"/> : null}
      </div>

      {/* DEBUG ONLY */}
      <DataManagement />
    </>
  );
}

export default App;