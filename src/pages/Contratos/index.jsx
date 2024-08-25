import { React, useState } from 'react';

import './styles.scss';

import ContratoData from '../../assets/contratos.json';

import { FaFileContract } from 'react-icons/fa6';
import { FaPlus } from "react-icons/fa";
import ModalCreate from './components/ModalCreate';

const Contratos = () => {
    const [contractData, setContractData] = useState(ContratoData);
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);

    const handleOpenCreateContractModal = () => {
        setIsModalCreateOpen(true);
    }

    const handleAddContract = (newContract) => {
        setContractData([...contractData, newContract]);
    }

    const handleCloseCreateContractModal = () => {
        setIsModalCreateOpen(false);
    }
    
    return (
        <div className='container-contratos'>
            <div className='header-contratos'>
                <div className='header-contratos-left'>
                    <div>
                        <FaFileContract/>
                        <h2>Gerenciamento de Contratos</h2>
                    </div>
                    <span>Dashboard para explorar contratos atuais e finalizados.</span>
                </div>
                <div className='header-contratos-right'>
                    <button onClick={handleOpenCreateContractModal}><FaPlus/></button>
                </div>
            </div>

            <div className='content-contratos'>
                {contractData.map((item, key) => (
                    <div key={key}>
                        <h4>Contrato: {item.CONTRATO}</h4>
                        <p>Descrição: {item.DESCRICAO}</p>
                        <p>Tipo de Contrato: {item.TIPO_CONTRATO}</p>
                        <p>Tipo de Demanda: {item.TIPO_DEMANDA}</p>
                        <p>Valor do Contrato: {item.VALORCONTRATO}</p>
                        <p>Expert: {item.EXPERT}</p>
                        <p>Custo de Venda Expert: {item.CUSTO_VENDA_EXPERT}</p>
                        <p>Senior: {item.SENIOR}</p>
                        <p>Custo de Venda Senior: {item.CUSTO_VENDA_SENIOR}</p>
                        <p>Pleno: {item.PLENO}</p>
                        <p>Custo de Venda Pleno: {item.CUSTO_VENDA_PLENO}</p>
                        <p>Junior: {item.JUNIOR}</p>
                        <p>Custo de Venda Junior: {item.CUSTO_VENDA_JUNIOR}</p>
                        <p>Estagiário: {item.ESTAGIARIO}</p>
                        <p>Custo de Venda Estagiário: {item.CUSTO_VENDA_ESTAGIARIO}</p>
                        <p>Horas Gestão: {item.HORAS_GESTAO}</p>
                        <p>Custo de Venda Gestão: {item.CUSTO_VENDA_GESTAO}</p>
                        <p>Início do Contrato: {item.INICIO_CONTRATO}</p>
                        <p>Fim do Contrato: {item.FIM_CONTRATO}</p>
                    </div>
                ))}
            </div>
            {isModalCreateOpen && <ModalCreate onClose={handleCloseCreateContractModal} addNewContract={handleAddContract} />}
        </div>
    );
};

export default Contratos;