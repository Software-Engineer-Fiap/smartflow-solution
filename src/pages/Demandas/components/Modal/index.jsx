import { FaPlus } from "react-icons/fa";
import "./style.scss";
import { IoCloseCircleOutline } from "react-icons/io5";
import { SelectInput } from "./SelectInput";
import { typeInput } from "./SelectInput/utils/type";
import { useEffect, useState } from "react";
import { ModelChamado } from "./utils/ModelChamado";

export const ButtonModal = ({ className, onClick }) => {
  return (
    <button
      className={`${className && className}
         openModal-button`}
      onClick={onClick}
    >
      <FaPlus />
    </button>
  );
};

const ModalDemandas = ({
  config,
  closeFunction,
  atualizaDados,
  dadosExistentes,
}) => {

  const [novoChamado, setNovoChamado] = useState({});
  
  useEffect(()=>{
    setNovoChamado(config.itemEdit)
  },[config.itemEdit])


  function handleChange(target) {
    const { name, value } = target;
    setNovoChamado({ ...novoChamado, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let chamado_model;

    
    switch (config.type) {
      case "create":
        chamado_model = ModelChamado(novoChamado);
        if (chamado_model == -1) {
          alert("Campo não Preenchido");
          return;
        }
        chamado_model = [chamado_model, ...dadosExistentes];
        break;
      
      case "edit":
        chamado_model = dadosExistentes
        const indexEditado = chamado_model.findIndex(obj => obj === config.itemEdit)
        chamado_model[indexEditado] = novoChamado
        break;
    }

    atualizaDados(chamado_model);
    setNovoChamado({});
    closeFunction({ render: false, type: "none" });
  }

  return (
    config.render && (
      <div className="container-modal-demandas">
        <div className="blur"></div>
        <div className="content-modal-demandas">
          <button className="close-modal-demandas" onClick={closeFunction}>
            <IoCloseCircleOutline />
          </button>

          <form
            className="form-modal-demandas"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div>
              <label>Nome do Projeto:</label>
              <input
                name="PROJETO"
                type="text"
                onChange={(e) => handleChange(e.target)}
                placeholder={config.itemEdit && config.itemEdit.PROJETO}
                />
            </div>
            <div>
              <label>Nome do Consultor:</label>
              <SelectInput
                array={typeInput().consultor}
                className="select-input-demandas"
                name="CONSULTOR"
                onChange={(e) => handleChange(e.target)}
                placeholder={config.itemEdit && config.itemEdit.CONSULTOR}
              />
            </div>
            <div>
              <label>Tipo de Chamado</label>
              <SelectInput
                array={typeInput().tipo_chamado}
                className="select-input-demandas"
                name="TIPO_CHAMADO"
                onChange={(e) => handleChange(e.target)}
                placeholder={config.itemEdit && config.itemEdit.TIPO_CHAMADO}
              />
            </div>
            <div>
              <label>Setor do Chamado</label>
              <SelectInput
                array={typeInput().setor_chamado}
                className="select-input-demandas"
                name="SETOR_CHAMADO"
                onChange={(e) => handleChange(e.target)}
                placeholder={config.itemEdit && config.itemEdit.MODULO_CHAMADO}
              />
            </div>
            <div>
              <label>Complexidade</label>
              <SelectInput
                array={typeInput().complexidade}
                className="select-input-demandas"
                name="COMPLEXIDADE"
                onChange={(e) => handleChange(e.target)}
                placeholder={config.itemEdit && config.itemEdit.COMPLEXIDADE}
              />
            </div>
            {config.type == "edit" ? (
              <>
                <div>
                  <label>Status</label>
                  <SelectInput
                    array={typeInput().status}
                    className="select-input-demandas"
                    name="STATUS"
                    onChange={(e) => handleChange(e.target)}
                    placeholder={config.itemEdit && config.itemEdit.STATUS_CHAMADO
                    }
                  />
                </div>
                <button>Confirmar Edição</button>
              </>
            ) : (
              <button>Adicionar Chamado</button>
            )}
          </form>
        </div>
      </div>
    )
  );
};

export default ModalDemandas;
