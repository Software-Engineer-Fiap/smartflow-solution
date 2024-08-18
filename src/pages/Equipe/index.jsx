import React, { useState } from 'react';

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

import { FaUser } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

const Equipe = () => {
    const [modal, setModal] = useState({ status: false, type: '' });
    const [user, setUser] = useState({});

    const openModal = (type) => {
        if (type === 'edit') {
            setUser({ 
                ID: user.ID, 
                NAME: user.NAME, 
                DESCRICAO: user.DESCRICAO, 
                SENIORIDADE: user.SENIORIDADE 
            });
        };
        setModal({ status: true, type: type });
    };
    const closeModal = (type) => {
        type === 'edit' && setUser({});

        setModal({ status: !modal, type: 'type' });
    };

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
                    <button onClick={() => openModal('create')}><FaPlus/></button>
                </div>
            </div>

            <table className='content-equipe'>
                <tbody>
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
                            <td><button onClick={() => {openModal('edit'); setUser(item)}}>Editar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {modal.status && 
                <div className='container-modal-equipe'>
                    <div className='content-modal-equipe'> 
                        <div className='header-modal-equipe'>
                            <div>
                                <h2>{modal.type === 'edit' ? `${user.NAME + ` ( ${user.ID} )`}` : 'Adicionar novo membro'}</h2>
                                <span>{modal.type === 'edit' ? 'Editar os detalhes sobre o membro.' : 'Adicione os detalhes sobre o novo membro.'}</span>
                            </div>
                            <button className='close-modal-equipe' onClick={() => closeModal(modal.type)}>
                                <IoCloseCircleOutline/>
                            </button>
                        </div>
                        <div className='form-modal-equipe'>
                            <div className='form-item-modal-equipe'>
                                <span>Nome</span>
                                <div className='form-input-modal-equipe'>
                                    <FaUser/>
                                    <input type="text" placeholder={modal.type === 'edit' ? user.NAME : 'Nome'}/>
                                </div>
                            </div>
                            <div className='form-item-modal-equipe'>
                                <span>Descrição</span>
                                <div className='form-input-modal-equipe'>
                                    <FaUser/>
                                    <input type="text" placeholder={modal.type === 'edit' ? user.DESCRICAO : 'Descrição'}/>
                                </div>
                            </div>
                            <div className='form-item-modal-equipe'>
                                <span>Senioridade</span>
                                <div className='form-input-modal-equipe'>
                                    <FaUser/>
                                    <input type="text" placeholder={modal.type === 'edit' ?  user.SENIORIDADE : 'Senioridade'}/>
                                </div>
                            </div>
                            {modal.type === 'edit' && (
                                <div className='form-item-modal-equipe'>
                                    <span>Observações</span>
                                    <div className='form-input-modal-equipe'>
                                        <FaUser/>
                                        <input type="text" placeholder={user.AUSENCIA_TIPO ? `${user.AUSENCIA_TIPO} ( ${subtractDates(user.AUSENCIA_INI, user.AUSENCIA_FIN)} dias restantes )` : 'Nenhuma'}/>
                                    </div>
                                </div>
                            )}
                            <button onClick={() => closeModal(modal.type)}>{modal.type === 'edit' ? 'Enviar': 'Adicionar membro'}</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Equipe;