
import DemandasData from "../../../../../assets/demandas.json";

export function ModelChamado( novoChamado) {
    
    const {PROJETO, CONSULTOR, SETOR_CHAMADO, COMPLEXIDADE, TIPO_CHAMADO} = novoChamado
    if(!PROJETO || !CONSULTOR || !SETOR_CHAMADO || !COMPLEXIDADE || !TIPO_CHAMADO){
        return -1
    }
    
    const indexConsultor = DemandasData.findIndex(obj => obj.CONSULTOR == CONSULTOR)
    const MODULO_CONSULTOR = DemandasData[indexConsultor].MODULO_CustosNSULTOR

    const date = new Date().toLocaleString()

    const randomNumber = Math.floor(Math.random() * 1e9).toString().padStart(9, Math.floor(Math.random() * 10));

    const ID = `TASK${randomNumber}-1`

    const STATUS = novoChamado.STATUS? 
    novoChamado.STATUS : 
    "Estimated - Waiting for approval"

    const novoChamadoTemp = {
        "PROJETO" : PROJETO,
        "CONSULTOR" : CONSULTOR,
        "MODULO_CHAMADO" : SETOR_CHAMADO,
        "COMPLEXIDADE" : COMPLEXIDADE,
        "DT_ABERTURA_CHAMADO" : date,
        "STATUS_CHAMADO" : STATUS,
        "TIPO_CHAMADO" : TIPO_CHAMADO,
        "MODULO_CustosNSULTOR" : MODULO_CONSULTOR,
        "CHAMADO" : ID
    }

    return novoChamadoTemp

}