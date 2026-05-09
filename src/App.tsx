import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect } from 'react';
import { db } from './db';

import DataManagement from './components/DataManagement';

import DiagonalGradientBackground from './features/DiagonalGradientBackground';
import Headbar from './features/Headbar';
import BottomBar from './features/BottomBar';
import Home from './features/Home';

function App() {
  // Fetch data from database
  const settings = useLiveQuery(() => db.settings.get('main'));

  useEffect(() => {
    // Load/Initialize settings data
    const initDb = async () => {
      const existing = await db.settings.get('main');
      if (!existing) {
        await db.settings.put({
          id: 'main',
          colors:['#4f219a', '#1a1035', '#000000', '#5d1780']
        });
        console.log("INITIALIZED SETTINGS DATA");
      }
    };

    initDb();
  },[]);

  const currentColors = settings?.colors ?? ['#333', '#000']; 

  return (
    <>
      <DiagonalGradientBackground colors={currentColors} />

      {/* WINDOW STRUCTURE */}
      <div className={`w-dvw h-dvh flex flex-col overflow-hidden pb-[env(safe-area-inset-bottom)]`}>
        <div className='flex-none'>
          <Headbar />
        </div>
        
        {/* MAIN VIEW */}
        <div className={`flex-1 flex flex-col items-center justify-center`}>
          <Home />
        </div>

        <div className='flex-none'>
          {/* BOTTOM BAR */}
          <BottomBar />
        </div>
      </div>
      

      {/* DEBUG ONLY */}
      <DataManagement />
    </>
  );
}

export default App;