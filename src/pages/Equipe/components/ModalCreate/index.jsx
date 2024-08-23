import React, { useState } from 'react';

import './styles.scss';

import Dropdown from '../Dropdown';

import { FaUser } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

const ModalCreate = ({ handleSubmitModal, closeModal }) => {
    const [newUser, setNewUser] = useState({});
    const [dropdownDescription, setDropdownDescription] = useState('Selecione');
    const [dropdownSeniority, setDropdownSeniority] = useState('Selecione');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    return (
        <div className='container-modal-equipe'>
            <div className='content-modal-equipe'> 
                <div className='header-modal-equipe'>
                    <div>
                        <h2>Adicionar novo membro</h2>
                        <span>Adicione os detalhes sobre o novo membro.</span>
                    </div>
                    <button className='close-modal-equipe' onClick={() => closeModal('create')}>
                        <IoCloseCircleOutline/>
                    </button>
                </div>
                <div className='form-modal-equipe'>
                    <div className='form-item-modal-equipe'>
                        <span>Nome</span>
                        <div className='form-input-modal-equipe'>
                            <FaUser/>
                            <input type="text" name="NAME" placeholder='Nome' onChange={handleChange} />
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
                    <button onClick={() => handleSubmitModal('create', {}, newUser)}>Adicionar membro</button>
                </div>
            </div>
        </div>
    );
};

export default ModalCreate;