import React, { useState } from 'react';

import './styles.scss';

import Planejamento from '../../assets/images/planejamentoazul.png';
import Css from '../../assets/images/cssazul.png';
import Aaron from '../../assets/images/fotoaaron.jpg';
import Daniel from '../../assets/images/fotodaniel.jpg';
import Joao from '../../assets/images/fotojoao.png';
import Renato from '../../assets/images/fotorenato.png';
import Thiago from '../../assets/images/fotothiago.png';
import HTML from '../../assets/images/htmlazul.png';
import Javascript from '../../assets/images/javascriptazul.png';
import Produtividade from '../../assets/images/produtividadeazul.png';
import ReactImg from '../../assets/images/reactazul.png';
import Visao from '../../assets/images/visaoazul.png';

const Home = () => {
    const [project, setProject] = useState(false);

    return (
        <div className='core'>
            <h1>SmartFlow Solution <span>x</span> Softtek</h1>

            <div className="container">
                <div className="box_principal">
                    <div className="box1">
                        <h2>Não Deixe a Gestão de Capacidades e Demandas  <span>Ser um Obstáculo</span> a Produtividade da Sua Empresa!</h2>
                        <p>A SmartFlow Solution tem a intenção de ajudar a sua empresa a gerir de forma mais eficiente as capacidades e demandas presentes no dia a dia, fornecendo uma visão mais clara para os gestores e consequentemente reduzindo os custos, melhorando a produtividade e controle da sua empresa.</p>
                    </div>

                    <div className="info">
                        <div className="box1_info">
                            <img src={Planejamento} alt="imagem planejamento"/>
                            <p>Evite desperdícios e custos adicionais com planejamentos imprecisos. O software da SmartFlow Solution gerencia e ajusta as alocações de recursos para garantir que a sua empresa está sempre operando com a máxima eficiência.</p>
                        </div>

                        <div className="box2_info">
                            <img src={Produtividade} alt="imagem produtividade"/>
                            <p> Com nosso sistema inteligente de alocação de recursos, você garante que cada membro da sua equipe esteja trabalhando no que faz de melhor, aumentando a eficiência e reduzindo o retrabalho.</p>
                        </div>

                        <div className="box3_info">
                            <img src={Visao} alt="imagem visão"/>
                            <p>Obtenha uma visão panorâmica e detalhada de todos os recursos da sua empresa, desde o pessoal até os equipamentos. Com dashboards intuitivos e relatórios dinâmicos, você poderá tomar decisões informadas e ágeis.</p>
                        </div>
                    </div>
                </div>

                <div className="box2">
                    <div className="box2_superior">
                        <iframe src="https://www.youtube.com/embed/UAJcp_sqDsk" width="420" height="315"></iframe>
                        <h3>Video Pitch 1</h3>
                    </div>

                    <div className="box2_inferior">
                        <iframe src="https://www.youtube.com/embed/K9NflzFtHR8" width="420" height="315"></iframe>
                        <h3>Video Pitch 2</h3>
                    </div>
                </div>
            </div>

            <button className="botao" onClick={() => {setProject(!project); console.log(project)}}>Sobre o Projeto</button>

            {project && 
                <div className='conteudo'>
                    <h2>Nome Dos Integrantes da SmartFlow Solution e Suas Respectivas Funções:</h2>
                    <ul className="lista_tecnologias1">
                        <img src={Aaron} alt="Foto de Aaron" />
                        <li>Aaron Magalhães Sena e Silva<span className="span_time"> ➙ </span> Desenvolvedor da página "Sobre o Projeto"</li>

                        <img src={Daniel} alt="Foto de Daniel" />
                        <li>Daniel Diniz Morais <span className="span_time">➙</span> Desenvolvedor da página "Demandas"</li>

                        <img src={Joao} alt="Foto de João" />
                        <li>João Mateus Guides <span className="span_time">➙</span> Desenvolvedor da página "Custos"</li>

                        <img src={Renato} alt="Foto de Renato" />
                        <li>Renato Messias Soares Conigero <span className="span_time">➙</span> Desenvolvedor da página "Equipe"</li>

                        <img src={Thiago} alt="Foto de Thiago" />
                        <li>Thiago Terra Fernandes <span className="span_time">➙</span> Desenvolvedor da página "Contratos"</li>
                    </ul>

                    <h2 className="conteudo_h2_2">Tecnologias Utilizadas no Desenvolvimento do Projeto</h2>
                    <p className="conteudo_p_2"> <span> ⤿ </span> No desenvolvimento do software para gestão de capacidades e demandas a SmartFlow Solution utilizou tecnologias como:</p>
                    <ul className="lista_tecnologias2">

                        <li>Html <img src={HTML} alt="imagem html" /></li>
                        <li>Css <img src={Css} alt="imagem css" /></li>
                        <li>JavaScript <img src={Javascript} alt="imagem js" /></li>
                        <li>React <img src={ReactImg} alt="imagem react" /></li>
                    </ul>
                </div>
            }

            <footer>
                <p>© 2024 SmartFlow Solution - Todos os Direitos Reservados.</p>
            </footer>
        </div>
    );
};

export default Home;