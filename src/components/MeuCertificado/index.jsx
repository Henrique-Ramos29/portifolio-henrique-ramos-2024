import React from 'react';
import certificadoData from '../../json/certificadoAlura.json';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiExternalLink, FiBookOpen } from "react-icons/fi";
import './index.css';

const MeuCertificado = () => {
  const { certificado, informacoesAlura } = certificadoData;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="meu-certificado-container"
    >
      <header className="certificado-header-main">
        <FiAward className="icon-main" />
        <h2 className="certificado-titulo">Certificações & Cursos</h2>
        <div className="decoracao-titulo"></div>
        
        <div className="header-status">
          <p className="aluno-nome">Dev: <strong>{certificado.nomeCompleto}</strong></p>
          <p className="periodo-certificacao">
            Jornada de aprendizado: <span>{certificado.periodo.inicio} — {certificado.periodo.fim}</span>
          </p>
          <a 
            href={certificado.linkCertificado} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-certificado-online"
          >
            <FiExternalLink /> Ver Certificado Oficial Online
          </a>
        </div>
      </header>

      <div className="grid-conquistas">
        {/* Seção de Formações */}
        <section className="secao-conquista">
          <h3 className="subtitulo-secao"><FiBookOpen /> Formações Acadêmicas</h3>
          <div className="lista-cards">
            {certificado.formacoes.map((formacao, index) => (
              <div key={index} className="card-conquista formacao-border">
                <h4 className="nome-item">{formacao.nome} <span className="carga-horaria">{formacao.cargaHorariaTotal}</span></h4>
                
                <div className="detalhes-lista">
                  {formacao.cursos.map((curso, i) => (
                    <div key={i} className="item-curso">
                      <FiCheckCircle className="check-icon" />
                      <span>{curso.nome}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Imersões e Cursos Avulsos agrupados */}
        <section className="secao-conquista">
          <h3 className="subtitulo-secao"><FiAward /> Imersões & Especializações</h3>
          <div className="lista-cards">
            {certificado.imersoes.map((imersao, index) => (
              <div key={index} className="card-conquista imersao-border">
                <h4 className="nome-item">{imersao.nome} <span className="carga-horaria">{imersao.cargaHorariaTotal}</span></h4>
                <p className="tag-status">Concluído</p>
              </div>
            ))}

            {certificado.cursosAvulsos.map((categoria, index) => (
              <div key={index} className="card-conquista avulso-border">
                <h4 className="nome-item">{categoria.nome} <span className="carga-horaria">{categoria.cargaHorariaTotal}</span></h4>
                <div className="detalhes-lista-compacta">
                  {categoria.cursos.length} cursos concluídos nesta trilha.
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="info-alura-footer">
        <div className="dados-instituicao">
          <p><strong>{informacoesAlura.empresa}</strong></p>
          <p>{informacoesAlura.endereco} | {informacoesAlura.telefone}</p>
          <p>CNPJ: {informacoesAlura.cnpj}</p>
          <a href={`https://${informacoesAlura.site}`} target="_blank" rel="noreferrer">{informacoesAlura.site}</a>
        </div>
      </footer>
    </motion.div>
  );
};

export default MeuCertificado;