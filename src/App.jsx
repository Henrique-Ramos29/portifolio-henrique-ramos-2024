import './App.css'
import Banner from './components/Banner';
import Formacao from './components/Formacao';
import Menu from './components/Menu'
import Projetos from './components/Projetos';
import Rodape from './components/Rodape';
import Skills from './components/Skills';
import Sobre from './components/Sobre';


function App() {
  
  return (
     <>
       <Menu />
       <Banner />
       <Sobre />
       <Skills />
       <Formacao />
       <Projetos />
       <Rodape />
     </>
  )
}

export default App;
