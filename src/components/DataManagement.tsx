import { useState } from 'react';
import { db } from '../db';

export default function DataManagement() {
  const [isOpen, setIsOpen] = useState(false);

  const clearAllData = async () => {
    if (confirm("Delete all data? This will reset your app.")) {
      await db.settings.clear();
      window.location.reload();
    }
  };

  const updateAppTheme = async () => {
    // Generates 4 random hex colors
    const randomColors = Array.from({ length: 4 }, () => 
      '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
    );
    
    await db.settings.put({
      id: 'main',
      colors: randomColors
    });
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-50 flex items-center gap-2 px-5 py-3 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:border-white/30 hover:bg-black/30 hover:scale-105 active:scale-95 transition-all duration-300 group"
      >
        <div className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white transition-colors" />
        <span className="text-white/90 font-medium text-sm tracking-wide">Data</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-200">
          {/* Blur Background */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-md" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal Card */}
          <div className="relative bg-neutral-900/90 border border-white/10 p-8 rounded-3xl w-full max-w-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
            <h2 className="text-xl font-semibold mb-1 text-white tracking-tight">System Data</h2>
            <p className="text-gray-400 text-sm mb-8">Manage your application content and storage.</p>
            
            <div className="flex flex-col gap-3">
              <button 
                onClick={updateAppTheme}
                className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl transition-all duration-200 text-white font-medium hover:scale-[1.02] active:scale-[0.98]"
              >
                Update Theme
              </button>
              <button 
                onClick={clearAllData}
                className="w-full py-3 bg-red-500/10 hover:bg-red-500/20 text-red-200 border border-red-500/10 rounded-2xl transition-all duration-200 font-medium hover:scale-[1.02] active:scale-[0.98]"
              >
                Clear All Data
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full py-3 mt-2 text-gray-500 hover:text-gray-300 transition-colors text-sm font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}