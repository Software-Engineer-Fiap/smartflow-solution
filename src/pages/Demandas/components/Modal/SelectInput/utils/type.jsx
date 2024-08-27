import DemandasData from "../../../../../../assets/demandas.json"


export function typeInput(){

    const filteredTypes = {
        "consultor" : [],
        "setor_chamado" : [],
        "complexidade" : [],
        "status" : [],
        "tipo_chamado" : []
    }

    DemandasData.forEach(element => {
        filteredTypes.consultor.includes(element.CONSULTOR)? null : filteredTypes.consultor.push(element.CONSULTOR);
        
        filteredTypes.setor_chamado.includes(element.MODULO_CHAMADO)? null : filteredTypes.setor_chamado.push(element.MODULO_CHAMADO);
        
        filteredTypes.complexidade.includes(element.COMPLEXIDADE)? null : filteredTypes.complexidade.push(element.COMPLEXIDADE);
        
        filteredTypes.status.includes(element.STATUS_CHAMADO)? null : filteredTypes.status.push(element.STATUS_CHAMADO);
        
        filteredTypes.tipo_chamado.includes(element.TIPO_CHAMADO)? null : filteredTypes.tipo_chamado.push(element.TIPO_CHAMADO);
    });
    return filteredTypes
}