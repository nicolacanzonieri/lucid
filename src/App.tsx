import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect } from 'react';
import { db } from './db';
import DataManagement from './components/DataManagement';
import DiagonalGradientBackground from './features/DiagonalGradientBackground';

function App() {
  // Fetch data from database
  const settings = useLiveQuery(() => db.settings.get('main'));

  useEffect(() => {
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
      <DiagonalGradientBackground colors={currentColors}>
      </DiagonalGradientBackground>
      <DataManagement />
    </>
  );
}

export default App;