import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Banner from './components/Banner';
import Formacao from './components/Formacao';
import Menu from './components/Menu'
import Projetos from './components/Projetos';
import Rodape from './components/Rodape';
import Skills from './components/Skills';
import Sobre from './components/Sobre';
import PaginaPadrao from './components/PaginaPadrao';
import ScrollToTop from './components/ScrollToTop';
import Contato from './components/Contato';



const App = () => {
  
  return (
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
  )
}

export default App;
