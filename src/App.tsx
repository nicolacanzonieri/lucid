import { useState, useEffect } from "react";
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from './db';
import { useUserActivity } from "./hooks/useUserActivity";

import DataManagement from './components/DataManagement';

import DiagonalGradientBackground from './features/DiagonalGradientBackground';
import _Headbar from './features/Headbar';
import _Bottombar from "./features/Bottombar";
import Home from './features/Home';

function App() {
  const [idleCounter, setIdleCounter] = useState(0);
  const [isUserIdle, setIsUserIdle] = useState(false);

  // Fetch data from database
  const settings = useLiveQuery(() => db.settings.get('main'));

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
  }, []);

  const currentColors = settings?.colors ?? ['#333', '#000'];

  // IDLE MONITOR
  useUserActivity(() => {
    setIdleCounter(0);
    setIsUserIdle(false);
  }, 1000);

  // TIMING
  useEffect(() => {
    const timer = setInterval(() => {
      setIdleCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // IDLE THRESHOLD CHECK
  useEffect(() => {
    if (idleCounter >= 5 && !isUserIdle) {
      setIsUserIdle(true);
    }
  }, [idleCounter, isUserIdle]);

  return (
    <>
      <DiagonalGradientBackground colors={currentColors} />

      {/* WINDOW STRUCTURE */}
      <div className={`w-screen h-screen flex flex-col overflow-hidden`}>
        {/* <div className='flex-none'>
          <Headbar isUserIdle={isUserIdle} />
        </div> */}

        {/* MAIN VIEW */}
        <div className={`flex-1 flex flex-col items-center justify-center`}>
          <Home />
        </div>

        {/* <div className='flex-none'>
          <Bottombar isUserIdle={isUserIdle} />
        </div> */}
      </div>


      {/* DEBUG ONLY */}
      <DataManagement />
    </>
  );
}

export default App;