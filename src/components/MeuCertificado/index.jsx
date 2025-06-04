import React from 'react';
import certificadoData from '../../json/certificadoAlura.json';
import { motion } from 'framer-motion';
import './index.css'; // Importe o CSS para este componente

const MeuCertificado = () => {
  const { certificado, informacoesAlura } = certificadoData;

  return (
    <motion.div id="meu-certificado" className="meu-certificado-container">
      <h2 className="certificado-titulo">Meu Certificado Alura</h2>

      <div className="certificado-header">
        <p className="aluno-nome">Certificamos que <strong>{certificado.nomeCompleto}</strong></p>
        <p className="periodo-certificacao">
          concluiu os cursos, formações e imersões a seguir, no período de{' '}
          <strong>{certificado.periodo.inicio} a {certificado.periodo.fim}</strong>.
        </p>
        <a 
          href={certificado.linkCertificado} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="certificado-link-completo"
        >
          Ver Certificado Completo Online
        </a>
      </div>

      {/* Seção de Formações */}
      <section className="secao-formacoes">
        <h3>Formações</h3>
        {certificado.formacoes.length > 0 ? (
          certificado.formacoes.map((formacao, index) => (
            <div key={index} className="card-formacao">
              <h4 className="nome-formacao">{formacao.nome} - {formacao.cargaHorariaTotal}</h4>
              
              {formacao.cursos.length > 0 && (
                <div className="subsecao">
                  <h5>Cursos:</h5>
                  <ul className="lista-cursos">
                    {formacao.cursos.map((curso, cursoIndex) => (
                      <li key={cursoIndex}>
                        {curso.nome} (de {curso.periodo}) {curso.cargaHoraria}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {formacao.conteudosComplementares.length > 0 && (
                <div className="subsecao">
                  <h5>Conteúdos Complementares:</h5>
                  <ul className="lista-conteudos">
                    {formacao.conteudosComplementares.map((conteudo, conteudoIndex) => (
                      <li key={conteudoIndex}>
                        <strong>{conteudo.tipo}</strong>: {conteudo.titulo} - {conteudo.cargaHoraria}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>Nenhuma formação encontrada.</p>
        )}
      </section>

      {/* Seção de Imersões */}
      <section className="secao-imersoes">
        <h3>Imersões</h3>
        {certificado.imersoes.length > 0 ? (
          certificado.imersoes.map((imersao, index) => (
            <div key={index} className="card-imersao">
              <h4 className="nome-imersao">{imersao.nome} - {imersao.cargaHorariaTotal}</h4>
              {imersao.cursos && imersao.cursos.length > 0 && (
                <ul className="lista-cursos">
                  {imersao.cursos.map((curso, cursoIndex) => (
                    <li key={cursoIndex}>
                      {curso.nome} - {curso.cargaHoraria}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))
        ) : (
          <p>Nenhuma imersão encontrada.</p>
        )}
      </section>

      {/* Seção de Cursos Avulsos */}
      <section className="secao-cursos-avulsos">
        <h3>Cursos Avulsos</h3>
        {certificado.cursosAvulsos.length > 0 ? (
          certificado.cursosAvulsos.map((categoriaCurso, index) => (
            <div key={index} className="card-curso-avulso">
              <h4 className="nome-categoria-curso">{categoriaCurso.nome} - {categoriaCurso.cargaHorariaTotal}</h4>
              <ul className="lista-cursos">
                {categoriaCurso.cursos.map((curso, cursoIndex) => (
                  <li key={cursoIndex}>
                    {curso.nome} (de {curso.periodo}) {curso.cargaHoraria}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>Nenhum curso avulso encontrado.</p>
        )}
      </section>

      <div className="info-alura-footer">
        <p>{informacoesAlura.endereco}</p>
        <p>{informacoesAlura.telefone}</p>
        <p>{informacoesAlura.empresa}, CNPJ: {informacoesAlura.cnpj}</p>
        <p><a href={`https://${informacoesAlura.site}`} target="_blank" rel="noopener noreferrer">{informacoesAlura.site}</a></p>
      </div>
    </motion.div>
  );
};

export default MeuCertificado;