
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Importe seus componentes de página
import PaginaPadrao from './components/PaginaPadrao';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Skills from './components/Skills';
import Formacao from './components/Formacao';
import MeuCertificado from './components/MeuCertificado';

// Importe os componentes de layout
import Menu from './components/Menu';
import Rodape from './components/Rodape';
import ScrollToTop from './components/ScrollToTop';
import ThemeProvider from './components/Tema/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
          
          {/* Rotas adicionais, se necessário */}
          <Route path='/softSkills' element={<Skills/>} />
          <Route path='/formacao' element={<Formacao />} />
          <Route path='/meu-certificado' element={<MeuCertificado />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

