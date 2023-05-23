import BIcon from "../BIcon/BIcon"
import React, {PropsWithChildren} from "react";


interface Props extends PropsWithChildren {
    isOpen: boolean
    onClose: () => void
}

const BModal: React.FC<Props> = ({isOpen, onClose, children}) => {

    return (
        <div>
            {isOpen &&
                <div className="modal">
                    <div className="modal-content">
                        <div className="close" onClick={onClose}>
                            <BIcon name="faXmark"/>
                        </div>
                        {children}
                    </div>
                    <div className="modal-overflow" onClick={onClose}/>
                </div>}
        </div>
    )
}

export default BModal
