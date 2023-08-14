import Fade from 'react-reveal/Fade';
import Contato from './components/Contato';
import Cover from './components/Cover';
import Footer from './components/Footer';
import Header from './components/Header';
import Projetos from './components/Projetos';
import Skills from './components/Skills';
import Sobre from './components/Sobre';

function App() {
  return (
    <>
      <Header />
      <Fade>
      <Cover />
      <Sobre />
      <Projetos />
      <hr className='dark:border-gray-700' />
      <Skills />
      <hr className='dark:border-gray-700' />
      <Contato />
      <Footer />
      </Fade>
    </>
  );
}

export default App;
