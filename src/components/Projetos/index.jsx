import { motion } from 'framer-motion';
import projectsData from '../../json/projetos.json';
import FastFoodVigia from '../../../public/fastfoodvigia.jpeg';
import { FiGithub, FiExternalLink, FiLock, FiSmartphone, FiMonitor, FiCheckCircle } from "react-icons/fi";
import './index.css';

const Projetos = () => {
  return (
    <section className="projetos-section">
      <h2 className="section-title">Meus Projetos</h2>

      {/* --- PROJETO DESTAQUE (FAST FOOD VIGIA) --- */}
      <div className="container-destaque">
        <motion.div
          className="projeto-card destaque"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="badge-destaque">PROJETO DESTAQUE / CASE REAL</div>

          <div className="projeto-content-destaque">
            <div className="projeto-img-destaque">
              {/* Certifique-se de que a imagem existe nesta pasta pública */}
              <img src={FastFoodVigia} alt="Fast Food Vigia System" />
              <div className="tech-stack-floating">
                <span>React + Vite</span>
                <span>Firebase</span>
                <span>Leaflet Maps</span>
              </div>
            </div>

            <div className="projeto-info">
              <h3>Fast Food Vigia</h3>
              <p className="descricao-destaque">
                Uma plataforma de delivery 360º que resolve o problema logístico local.
                Diferente de projetos de curso, este sistema lida com a complexidade de
                <strong> 4 aplicações em uma</strong>, com foco em performance e escalabilidade.
              </p>

              <ul className="lista-features">
                <li><FiCheckCircle /> <strong>Painel Admin:</strong> Gestão financeira e monitoramento de entregadores.</li>
                <li><FiCheckCircle /> <strong>Painel Restaurante:</strong> Gestão de cardápio e fluxo de pedidos.</li>
                <li><FiCheckCircle /> <strong>Área do Cliente:</strong> Checkout completo, cupons e histórico.</li>
                <li><FiCheckCircle /> <strong>App Entregador:</strong> React Native - Expo para gestão de corridas.</li>
              </ul>

              <div className="projeto-links">
                {/* Substitua pelo link real se tiver, ou remova o <a> se não houver demo */}
                <a href="https://fastfoodvigia.site" target="_blank" rel="noreferrer" className="btn-destaque-demo">
                  <FiExternalLink /> Ver Demonstração
                </a>
                <span className="info-privado">
                  <FiLock /> Repositório Privado (Projeto Comercial)
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- OUTROS PROJETOS --- */}
      <h3 className="subtitulo-outros">Outras Experiências</h3>
      <div className="projetos-grid">
        {projectsData.map((proj, index) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="projeto-card"
          >
            <div className="projeto-img-wrapper">
              <img src={proj.imagem} alt={proj.subtitulo} />
            </div>
            <div className="projeto-info">
              <h3>{proj.subtitulo}</h3>
              <div className="projeto-links">
                <a href={proj.demoLink} target="_blank" rel="noreferrer">
                  <FiExternalLink /> Demo
                </a>
                <a href={proj.repositorioLink} target="_blank" rel="noreferrer">
                  <FiGithub /> Repo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;