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
        <div className='container-home'>
            <div className='header-home'>
                <h1>SmartFlow Solution</h1> 
                <span>x</span> 
                <h1>Softtek</h1>
            </div>

            <div className="content-home">
                <div className="box_principal">
                    <div className="box1">
                        <h2>Não Deixe a Gestão de Capacidades e Demandas  <span>Ser um Obstáculo</span> a Produtividade da Sua Empresa!</h2>
                        <p>A SmartFlow Solution tem a intenção de ajudar a sua empresa a gerir de forma mais eficiente as capacidades e demandas presentes no dia a dia, fornecendo uma visão mais clara para os gestores e consequentemente reduzindo os custos, melhorando a produtividade e controle da sua empresa.</p>
                    </div>

                    <div className="info">
                        <div className='info-box'>
                            <div className="box1_info">
                                <img src={Planejamento} alt="imagem planejamento" />
                                <p>Evite desperdícios e custos adicionais com planejamentos imprecisos. O software da SmartFlow Solution gerencia e ajusta as alocações de recursos para garantir que a sua empresa está sempre operando com a máxima eficiência.</p>
                            </div>

                            <div className="box2_info">
                                <img src={Produtividade} alt="imagem produtividade" />
                                <p> Com nosso sistema inteligente de alocação de recursos, você garante que cada membro da sua equipe esteja trabalhando no que faz de melhor, aumentando a eficiência e reduzindo o retrabalho.</p>
                            </div>

                            <div className="box3_info">
                                <img src={Visao} alt="imagem visão" />
                                <p>Obtenha uma visão panorâmica e detalhada de todos os recursos da sua empresa, desde o pessoal até os equipamentos. Com dashboards intuitivos e relatórios dinâmicos, você poderá tomar decisões informadas e ágeis.</p>
                            </div>
                        </div>
                        
                        <button className="botao" onClick={() => setProject(!project)}>Sobre o Projeto</button>
                    
                        {project &&
                            <div className='conteudo'>
                                <div className='conteudo-tecnologias1'>
                                    <h2>Nome dos integrantes</h2>
                                    <div className="lista_tecnologias1">
                                        <div>
                                            <img src={Aaron} alt="Foto de Aaron" />
                                            <h2>Aaron Magalhães</h2>
                                            <span>Desenvolvedor e Editor</span>
                                        </div>
                                        <div>
                                            <img src={Daniel} alt="Foto de Daniel" />
                                            <h2>Daniel Diniz</h2>
                                            <span>Desenvolvedor</span>
                                        </div>
                                        <div>
                                            <img src={Joao} alt="Foto de João" />
                                            <h2>João Mateus</h2>
                                            <span>Desenvolvedor</span>
                                        </div>
                                        <div>
                                            <img src={Renato} alt="Foto de Renato" />
                                            <h2>Renato Messias</h2>
                                            <span>Desenvolvedor</span>
                                        </div>
                                        <div>
                                            <img src={Thiago} alt="Foto de Thiago" />
                                            <h2>Aaron Magalhães</h2>
                                            <span>Desenvolvedor</span>
                                        </div>
                                      </div>
                                </div>
                                <div className='conteudo-tecnologias2'>
                                    <h2 className="conteudo_h2_2">Tecnologias Utilizadas no Desenvolvimento do Projeto</h2>
                                    <p className="conteudo_p_2"> <span> ⤿ </span> No desenvolvimento do software para gestão de capacidades e demandas a SmartFlow Solution utilizou tecnologias como:</p>
                                    <ul className="lista_tecnologias2">
                                        <li>Html <img src={HTML} alt="imagem html" /></li>
                                        <li>Css <img src={Css} alt="imagem css" /></li>
                                        <li>JavaScript <img src={Javascript} alt="imagem js" /></li>
                                        <li>React <img src={ReactImg} alt="imagem react" /></li>
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>
                </div>

                <div className="box2">
                    <div className="box2_superior">
                        <iframe src="https://www.youtube.com/embed/K9NflzFtHR8" width="420" height="315"></iframe>
                        <h3>Video Pitch 1</h3>
                    </div>

                    <div className="box2_inferior">
                        <iframe src="https://www.youtube.com/embed/K9NflzFtHR8" width="420" height="315"></iframe>
                        <h3>Video Pitch 2</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;