import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Formacao from './components/Formacao';
import Menu from './components/Menu'
import Projetos from './components/Projetos';
import Rodape from './components/Rodape';
import Skills from './components/Skills';
import Sobre from './components/Sobre';
import PaginaPadrao from './components/PaginaPadrao';
import ScrollToTop from './components/ScrollToTop';
import Contato from './components/Contato';
import ThemeProvider from './components/Tema/ThemeContext';



const App = () => {
  
  return (
  <ThemeProvider>

    <BrowserRouter>
     <ScrollToTop />
      <Menu />
      <Routes>
          <Route path='/' element={<PaginaPadrao />} />
            <Route path='/sobreMim' element={<Sobre />} />
            <Route path='/softSkills' element={<Skills/>} />
            <Route path='/formacao' element={<Formacao />} />
            <Route path='/projetos' element={<Projetos />} />
            <Route path='/contato' element={<Contato />} />
      </Routes>
        <Rodape />
    </BrowserRouter>

  </ThemeProvider>
  )
}

export default App;
