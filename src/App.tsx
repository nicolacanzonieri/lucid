import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect } from 'react';
import { db } from './db';

import DataManagement from './components/DataManagement';

import DiagonalGradientBackground from './features/DiagonalGradientBackground';
import Headbar from './features/Headbar';
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
      <div className={`w-screen h-screen flex flex-col`}>
        <Headbar />
        
        {/* MAIN VIEW */}
        <div className={`w-screen h-[84%] flex flex-col items-center justify-center`}>
          <Home />
        </div>

        {/* BOTTOM BAR */}
      </div>
      

      {/* DEBUG ONLY */}
      <DataManagement />
    </>
  );
}

export default App;