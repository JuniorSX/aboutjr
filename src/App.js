import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import Contato from './components/Contato';
import Cover from './components/Cover';
import Footer from './components/Footer';
import Header from './components/Header';
import Projetos from './components/Projetos';
import Skills from './components/Skills';
import Sobre from './components/Sobre';
import GlobalContext from './context/GloblalContext';

function App() {
  const [themeColor, setThemeColor] = useState(localStorage.getItem('hs_theme') || 'light');

  function toggleTheme() {
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark');
  }
  return (
    <GlobalContext.Provider value={{theme: themeColor, toggleTheme}}>
      <Header />
      <Fade duration={1100}>
      <Cover />
      <Sobre />
      <hr className='dark:border-gray-700' />
      <Skills />
      <hr className='dark:border-gray-700' />
      <Projetos />
      <Contato />
      <Footer />
      </Fade>
    </GlobalContext.Provider>
  );
}
export default App;
