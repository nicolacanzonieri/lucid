import { useState, useEffect } from "react";
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from './db';
import { useUserActivity } from "./hooks/useUserActivity";

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

    initDb();

    const timer = setInterval(() => {
      setIdleCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentColors = settingsData?.colors ?? ['#333', '#000'];

  // IDLE MONITOR
  useUserActivity(() => {
    setIdleCounter(0);
    setIsUserIdle(false);
  }, 1000);

  useEffect(() => {
    if (idleCounter >= 5 && !isUserIdle) {
      setIsUserIdle(true);
    }
  }, [idleCounter, isUserIdle]);

  return (
    <>
      <DiagonalGradientBackground colors={currentColors} />

      {/* WINDOW STRUCTURE */}
      <div className={`w-screen h-screen flex flex-col relative overflow-hidden`}>
        <div className='flex-none'>
          <Headbar isUserIdle={isUserIdle} onClickSettings={() => {setShowModal(true)}} />
        </div>

        {/* MAIN VIEW */}
        <div className={`flex-1 flex flex-col items-center justify-center`}>
          <Home />
        </div>

        <div className='flex-none'>
          <Bottombar isUserIdle={isUserIdle} />
        </div>
      </div>

      <div onClick={() => {setShowModal(false)}} className={`w-screen h-screen absolute inset-0 flex flex-col items-center justify-center ${showModal ? 'backdrop-blur-md bg-black/25' : 'pointer-events-none'} transition-all ease-in-out duration-350`}>
        {showModal ? <Modal show={showModal} title={"Settings"}/> : null}
      </div>

      {/* DEBUG ONLY */}
      <DataManagement />
    </>
  );
}

export default App;