import React from 'react';

import './styles.scss';

import EquipeData from '../../assets/equipe.json';

import { 
    Type 
} from './data/types';
import { 
    subtractDates 
} from './data/dates';

const Equipe = () => {
    return (
        <div className="container-equipe">
            <div className="header-equipe">
                <h2>Gestão da equipe</h2>
                <span>Dashboard para monitoramento e gestão da equipe.</span>
            </div>

            <div className="content-equipe">
                <tr>
                    <th>Nome</th>
                    <th>Código AT</th>
                    <th>Descrição</th>
                    <th>Senioridade</th>
                    <th>Observação</th>
                    <th>Editar</th>
                </tr>

                {EquipeData.map((item, key) => (
                    <tr key={key}>
                        <td>{item.NAME}</td>
                        <td>{item.ID}</td>
                        <td>
                            <div className={`content-equipe-color-${Type[item.DESCRICAO]}`}>
                                <span>{item.DESCRICAO}</span>
                            </div>
                        </td>
                        <td>
                            <div className={`content-equipe-color-${Type[item.SENIORIDADE]}`}>
                                <span>{Type[item.SENIORIDADE]}</span>
                            </div>
                        </td>
                        <td>{subtractDates(item.AUSENCIA_INI, item.AUSENCIA_FIN)} {item.AUSENCIA_TIPO ? `dias restantes de ${item.AUSENCIA_TIPO.toLowerCase()}` : 'Nenhuma'}</td>
                        <td><button>Editar</button></td>
                    </tr>
                ))}
            </div>
        </div>
    );
};

export default Equipe;