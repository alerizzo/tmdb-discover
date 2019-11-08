import React from 'react';

export interface ITMDbSettings {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: string[];
  logo_sizes: string[];
  poster_sizes: string[];
  profile_sizes: string[];
  still_sizes: string[];
}

export const AppContext = React.createContext<ITMDbSettings | null>(null);

export default AppContext;
