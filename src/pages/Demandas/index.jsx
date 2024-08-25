import React from 'react';
import DemandasData from '../../assets/demandas.json';
import './styles.scss';
import { IoIosRefresh } from 'react-icons/io';
import { ButtonModal } from './components/Modal';

const Demandas = () => {

    return (
        <div className='container-demandas'>
            <div className='header-demandas'>
                <h2>Contrato vs Análise de Entrega</h2>
                <div>
                    <span>Esta página permite ao usuário comparar as discrepâncias entre contratos de venda e entrega de projetos atuais</span>
                    <button className='button-demandas'>
                        <IoIosRefresh />
                        <span>
                            Atualizar Dados
                        </span>
                    </button>
                    <ButtonModal className="button-adicionar"/>
                </div>
            </div>

            <table className='content-demandas'>
                <thead>
                    <tr>
                        <th>ID do chamado</th>
                        <th>Projeto</th>
                        <th>Consultor</th>
                        <th>Setor do Chamado</th>
                        <th>Tipo de Chamado</th>
                        <th>Complexidade</th>
                        <th>Data de Abertura</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        DemandasData.map((item, key) => (
                            item.STATUS_CHAMADO != "Closed" &&
                            <tr key={key}>
                                <td>
                                    {item.CHAMADO}
                                </td>
                                <td>
                                    {item.PROJETO}
                                </td>
                                <td>
                                    {item.CONSULTOR}
                                </td>
                                <td>
                                    {item.MODULO_CHAMADO}
                                </td>
                                <td>
                                    {item.TIPO_CHAMADO}
                                </td>
                                <td>
                                    {item.COMPLEXIDADE}
                                </td>
                                <td>
                                    {item.DT_ABERTURA_CHAMADO}
                                </td>
                                <td>
                                    {item.STATUS_CHAMADO}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Demandas;