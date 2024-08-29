import React, { useState } from "react";
import DemandasData from "../../assets/demandas.json";
import "./styles.scss";
import { IoIosRefresh } from "react-icons/io";
import ModalDemandas, { ButtonModal } from "./components/Modal";

const Demandas = () => {
  const [modal, setModal] = useState({ render: false, type: "none" });
  const [demandasData, setDemandasData] = useState(DemandasData)

  return (
    <>
      <ModalDemandas
        config={modal}
        closeFunction={setModal}
        atualizaDados={setDemandasData}
        dadosExistentes = {demandasData}
      />

      <div className="container-demandas">
        <div className="header-demandas">
          <h2>Demandas</h2>
          <div>
            <span>
              Esta página permite ao usuário analisar o status dos chamados em
              aberto
            </span>
            <button className="button-demandas">
              <IoIosRefresh />
              <span>Atualizar Dados</span>
            </button>
            <ButtonModal
              className="button-adicionar"
              onClick={() => setModal({ render: true, type: "create" })}
            />
          </div>
        </div>

        <table className="content-demandas">
          <thead>
            <tr>
              <th>Projeto</th>
              <th>Consultor</th>
              <th>Setor do Consultor</th>
              <th>Tipo de Chamado</th>
              <th>Setor do Chamado</th>
              <th>Complexidade</th>
              <th>Data de Abertura</th>
              <th>Status</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {
            demandasData.map(
              (item, key) =>
                item.STATUS_CHAMADO != "Closed" && (
                  <tr key={key}>
                    <td>{item.PROJETO}</td>
                    <td>{item.CONSULTOR}</td>
                    <td>{item.MODULO_CustosNSULTOR}</td>
                    <td>{item.TIPO_CHAMADO}</td>
                    <td>{item.MODULO_CHAMADO}</td>
                    <td>{item.COMPLEXIDADE}</td>
                    <td>{item.DT_ABERTURA_CHAMADO}</td>
                    <td>{item.STATUS_CHAMADO}</td>
                    <td 
                    onClick={() => setModal({ render: true, type: "edit",itemEdit: item })}>
                      <a>
                        Editar
                      </a>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Demandas;
