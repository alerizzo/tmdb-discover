import React, { useState, useEffect } from 'react';
import './App.scss';
import { DiscoverPage } from './pages';
import { getTMDbSettings } from './lib/TMDbClient';
import AppContext from './AppContext';

function App() {
  const [TMDbSettings, setTMDbSettings] = useState(null);

  useEffect(() => {
    getTMDbSettings().then(response => {
      setTMDbSettings(response.images);
    });
  }, []);

  console.log('render - App');

  if (!TMDbSettings) return <span>Loading...</span>;

  return (
    <AppContext.Provider value={TMDbSettings}>
      <DiscoverPage />
    </AppContext.Provider>
  );
}

export default App;
