
import { FaPlus } from "react-icons/fa";
import "./style.scss"

export const ButtonModal = ({className}) => {

    return (
        <button className={`${className && className} openModal-button`}>
            <FaPlus/>
        </button>
    )

}

 const ModalDemandas = ({className}) => {
    
    return (
        <div className="modalDemandas">

        </div>
    )
}

export default ModalDemandas
