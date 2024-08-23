import React, { useState } from 'react';

import './styles.scss';

import ModalCreate from './components/ModalCreate';
import ModalEdit from './components/ModalEdit';

import EquipeData from '../../assets/equipe.json';

import { 
    Type 
} from './utils/types';
import { 
    subtractDates 
} from './utils/dates';
import {
    generateRandomId
} from './utils/id';

import { FaUserGroup } from 'react-icons/fa6';
import { FaPlus } from "react-icons/fa";

const Equipe = () => {
    const [data, setData] = useState(EquipeData);

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

    const handleSubmitModal = (type, editUser, newUser) => {
        if (type === 'edit') {
            const itemIndex = data.findIndex(item => item.ID === editUser.ID);
            if (itemIndex !== -1) {
                const newData = [...data];
                newData[itemIndex] = {
                    IS: editUser.IS,
                    NAME: editUser.NAME,
                    ID: editUser.ID,
                    DESCRICAO: editUser.DESCRICAO,
                    SENIORIDADE: editUser.SENIORIDADE,
                    AUSENCIA_INI: null,
                    AUSENCIA_FIN: null,
                    AUSENCIA_TIPO: null
                };
                setData(newData);
            };
        } else {
            setData([...data, {
                IS: "AWDE4",
                NAME: newUser.NAME,
                ID: generateRandomId(),
                DESCRICAO: newUser.DESCRICAO,
                SENIORIDADE: newUser.SENIORIDADE,
                AUSENCIA_INI: null,
                AUSENCIA_FIN: null,
                AUSENCIA_TIPO: null
            }]);
        };

        closeModal(type);
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

                    {data.reverse().map((item, key) => (
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

            {modal.status ?
                modal.type === 'edit' ? 
                    <ModalEdit
                        user={user}
                        closeModal={closeModal}
                        handleSubmitModal={handleSubmitModal}
                    /> 
                : 
                    <ModalCreate
                        closeModal={closeModal}
                        handleSubmitModal={handleSubmitModal}
                    />
                :
            <div/>}
        </div>
    );
};

export default Equipe;