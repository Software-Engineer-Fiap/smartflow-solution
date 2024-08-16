import React from 'react';

import './styles.scss';

import { FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

const ModalEquipe = () => {
    return (
        <div className='container-modal-equipe'>
            {/* Criar */}
            <div className='content-modal-equipe'>
                
                <div className='header-modal-equipe'>
                    <div>
                        <h2>Adicionar novo membro</h2>
                        <span>Adicione os detalhes sobre o novo membro.</span>
                    </div>
                    <button className='close-modal-equipe'>
                        <IoCloseCircleOutline/>
                    </button>
                </div>
                <div className='form-modal-equipe'>
                    <div className='form-item-modal-equipe'>
                        <span>Nome</span>
                        <div className='form-input-modal-equipe'>
                            <FaUser/>
                            <input type="text" placeholder='Nome'/>
                        </div>
                    </div>
                    <div className='form-item-modal-equipe'>
                        <span>Descrição</span>
                        <div className='form-input-modal-equipe'>
                            <FaUser/>
                            <input type="text" placeholder='Selecione a Descrição'/>
                        </div>
                    </div>
                    <div className='form-item-modal-equipe'>
                        <span>Senioridade</span>
                        <div className='form-input-modal-equipe'>
                            <FaUser/>
                            <input type="text" placeholder='Selecione a Senioridade'/>
                        </div>
                    </div>
                    <button>Adicionar membro</button>
                </div>
            </div> 
            {/* Editar */}
            {/* 
                <div>
                    <div>
                        <h2></h2>
                        <span></span>
                    </div>
                    <div>
                        <div>
                            <span></span>
                            <input type="text"/>
                        </div>
                        <div>
                            <span></span>
                            <input type="text"/>
                        </div>
                        <div>
                            <span></span>
                            <input type="text"/>
                        </div>
                        <button></button>
                    </div>
                </div> 
            */}
        </div>
    );
};

export default ModalEquipe;