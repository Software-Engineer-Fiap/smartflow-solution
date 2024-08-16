import React from 'react';

import './styles.scss';

import EquipeData from '../../assets/equipe.json';

import { 
    Type 
} from './utils/types';
import { 
    subtractDates 
} from './utils/dates';

import { FaUserGroup } from 'react-icons/fa6';
import { FaPlus } from "react-icons/fa";

const Equipe = () => {
    return (
        <div className='container-equipe'>
            <div className='header-equipe'>
                <div className='header-equipe-left'>
                    <div>
                        <FaUserGroup/>
                        <h2>Gestão da equipe</h2>
                    </div>
                    <span>Dashboard para monitoramento e gestão da equipe.</span>
                </div>
                <div className='header-equipe-right'>
                    <button><FaPlus/></button>
                </div>
            </div>

            <div className='content-equipe'>
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
                        <td>{item.NAME} {item.AUSENCIA_TIPO && <div className='content-equipe-notify'/>}</td>
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
                        <td>{item.AUSENCIA_TIPO ? `${item.AUSENCIA_TIPO} ( ${subtractDates(item.AUSENCIA_INI, item.AUSENCIA_FIN)} dias restantes )` : 'Nenhuma'}</td>
                        <td><button>Editar</button></td>
                    </tr>
                ))}
            </div>
        </div>
    );
};

export default Equipe;