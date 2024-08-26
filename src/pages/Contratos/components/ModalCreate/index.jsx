import React, { useState } from "react";
import './styles.scss';
import { IoCloseCircleOutline } from "react-icons/io5";

const ModalCreate = ({ onClose, addNewContract }) => {

  const [contractData, setContractData] = useState({
    CONTRATO: '',
    DESCRICAO: '',
    TIPO_CONTRATO: '',
    TIPO_DEMANDA: '',
    VALORCONTRATO: '',
    EXPERT: '',
    CUSTO_VENDA_EXPERT: '',
    SENIOR: '',
    CUSTO_VENDA_SENIOR: '',
    PLENO: '',
    CUSTO_VENDA_PLENO: '',
    JUNIOR: '',
    CUSTO_VENDA_JUNIOR: '',
    ESTAGIARIO: '',
    CUSTO_VENDA_ESTAGIARIO: '',
    HORAS_GESTAO: '',
    CUSTO_VENDA_GESTAO: '',
    INICIO_CONTRATO: '',
    FIM_CONTRATO: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContractData({
        ...contractData,
        [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewContract(contractData);
    onClose();
  };

  return (
    <div className='modal-create'>
      <div className='modal-content'>
        <span className='close' onClick={onClose}>
          <IoCloseCircleOutline/>
        </span>
        <h2>Criar novo contrato</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Contrato:
              <input type='text' name='CONTRATO' value={contractData.CONTRATO} required="true" onChange={handleInputChange} />
            </label>
            <label>
              Descrição:
              <input type='text' name='DESCRICAO' value={contractData.DESCRICAO} required="true" onChange={handleInputChange} />
            </label>
            <label>
              Tipo de Contrato:
              <input type='text' name='TIPO_CONTRATO' value={contractData.TIPO_CONTRATO} required="true" onChange={handleInputChange} />
            </label>
            <label>
                Tipo de Demanda:
                <input type='text' name='TIPO_DEMANDA' value={contractData.TIPO_DEMANDA} required="true" onChange={handleInputChange} />
            </label>
            <label>
                Valor do Contrato:
                <input type='text' name='VALORCONTRATO' value={contractData.VALORCONTRATO} required="true" onChange={handleInputChange} />
            </label>
          </div>
          <div>
            <label>
              Expert:
              <input type='text' name='EXPERT' value={contractData.EXPERT} required="true" onChange={handleInputChange} />
            </label>
            <label>
              Custo de Venda Expert:
              <input type='text' name='CUSTO_VENDA_EXPERT' value={contractData.CUSTO_VENDA_EXPERT} required="true" onChange={handleInputChange} />
            </label>
            <label>
              Senior:
              <input type='text' name='SENIOR' value={contractData.SENIOR} required="true" onChange={handleInputChange} />
            </label>
            <label>
              Custo de Venda Senior:
              <input type='text' name='CUSTO_VENDA_SENIOR' value={contractData.CUSTO_VENDA_SENIOR} required="true" onChange={handleInputChange} />
            </label>
            <label>
              Pleno:
              <input type='text' name='PLENO' value={contractData.PLENO} required="true" onChange={handleInputChange} />
            </label>
          </div>
          <div>
            <label>
              Custo de Venda Pleno:
              <input type='text' name='CUSTO_VENDA_PLENO' value={contractData.CUSTO_VENDA_PLENO} required="true" onChange={handleInputChange} />
            </label>
            <label>
              Junior:
              <input type='text' name='JUNIOR' value={contractData.JUNIOR} required="true" onChange={handleInputChange} />
            </label>
            <label>
              Custo de Venda Junior:
              <input type='text' name='CUSTO_VENDA_JUNIOR' value={contractData.CUSTO_VENDA_JUNIOR} required="true" onChange={handleInputChange} />
            </label>
            <label>
              Estagiário:
              <input type='text' name='ESTAGIARIO' value={contractData.ESTAGIARIO} required="true" onChange={handleInputChange} />
            </label>
            <label>
              Custo de Venda Estagiário:
              <input type='text' name='CUSTO_VENDA_ESTAGIARIO' value={contractData.CUSTO_VENDA_ESTAGIARIO} required="true" onChange={handleInputChange} />
            </label>
          </div>
          <div>
            <label>
              Horas Gestão:
              <input type='text' name='HORAS_GESTAO' value={contractData.HORAS_GESTAO} required="true" onChange={handleInputChange} />
            </label>
            <label>
              Custo de Venda Gestão:
              <input type='text' name='CUSTO_VENDA_GESTAO' value={contractData.CUSTO_VENDA_GESTAO} required="true" onChange={handleInputChange} />
            </label>
            <div class="date-input-wrapper">
              <label>
                Início do Contrato:
                <input type='date' name='INICIO_CONTRATO' value={contractData.INICIO_CONTRATO} required="true" onChange={handleInputChange} />
              </label>
            </div>
            <div class="date-input-wrapper">
              <label>
                Fim do Contrato:
                <input type='date' name='FIM_CONTRATO' value={contractData.FIM_CONTRATO} required="true" onChange={handleInputChange} />
              </label>
            </div>
            <button type='submit'>Criar contrato</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCreate;
