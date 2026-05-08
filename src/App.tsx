import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect } from 'react';
import { db } from './db';
import DataManagement from './components/DataManagement';
import DiagonalGradientBackground from './features/DiagonalGradientBackground';

function App() {
  // Fetch data from database
  const settings = useLiveQuery(() => db.settings.get('main'));

  useEffect(() => {
    if (settings === undefined) {
      return;
    }
    
    if (settings === null) {
      // Initialize default database values
      db.settings.add({
        id: 'main',
        colors: ['#4f219a', '#1a1035', '#000000', '#5d1780']
      });
      console.log("INITIALIZED SETTINGS DATA")
    }
  }, [settings]);

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