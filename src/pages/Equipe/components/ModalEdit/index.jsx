import React, { useState } from 'react';

import './styles.scss';

import Dropdown from '../Dropdown';

import { 
    subtractDates 
} from '../../utils/dates';
import { 
    Type 
} from '../../utils/types';

import { FaUser } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

const ModalEdit = ({ user, closeModal, handleSubmitModal }) => {
    const [dropdownDescription, setDropdownDescription] = useState(user.DESCRICAO);
    const [dropdownSeniority, setDropdownSeniority] = useState(Type[user.SENIORIDADE]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        user[name] = value;
    };

    return (
        <div className='container-modal-equipe'>
            <div className='content-modal-equipe'> 
                <div className='header-modal-equipe'>
                    <div>
                        <h2>{user.NAME + ` ( ${user.ID} )`}</h2>
                        <span>Editar os detalhes sobre o membro.</span>
                    </div>
                    <button className='close-modal-equipe' onClick={() => closeModal('edit')}>
                        <IoCloseCircleOutline/>
                    </button>
                </div>
                <div className='form-modal-equipe'>
                    <div className='form-item-modal-equipe'>
                        <span>Nome</span>
                        <div className='form-input-modal-equipe'>
                            <FaUser/>
                            <input type="text" name="NAME" placeholder={user.NAME} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='form-item-modal-equipe'>
                        <span>Descrição</span>
                        <Dropdown type='description' selected={dropdownDescription} setSelected={setDropdownDescription}/>
                    </div>
                    <div className='form-item-modal-equipe'>
                        <span>Senioridade</span>
                        <Dropdown type='seniority' selected={dropdownSeniority} setSelected={setDropdownSeniority}/>
                    </div>
                    {/* <div className='form-item-modal-equipe'>
                        <span>Observações</span>
                        <div className='form-input-modal-equipe'>
                            <FaUser/>
                            <input type="text" placeholder={user.AUSENCIA_TIPO ? `${user.AUSENCIA_TIPO} ( ${subtractDates(user.AUSENCIA_INI, user.AUSENCIA_FIN)} dias restantes )` : 'Nenhuma'} onChange={handleChange}/>
                        </div>
                    </div> */}
                    <button onClick={() => handleSubmitModal('edit', user)}>Enviar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalEdit;