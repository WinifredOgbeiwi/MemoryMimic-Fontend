import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomeRoutes from './routes/HomeRoutes';



const App = () => {
  return (
    <BrowserRouter>
      <HomeRoutes />
    </BrowserRouter>
  );
};


export default App;
