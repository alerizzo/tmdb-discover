import React, { useState, useEffect } from 'react';
import './App.scss';
import { DiscoverPage } from './pages';
import { getTMDbSettings } from './lib/TMDbClient';
import AppContext, { ITMDbSettings } from './AppContext';

function App() {
  const [TMDbSettings, setTMDbSettings] = useState<ITMDbSettings | null>(null);

  useEffect(() => {
    getTMDbSettings().then(response => {
      setTMDbSettings(response.images);
    });
  }, []);

  if (!TMDbSettings) return <span>Loading...</span>;

  return (
    <AppContext.Provider value={TMDbSettings}>
      <DiscoverPage />
    </AppContext.Provider>
  );
}

export default App;
