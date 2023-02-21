import React from "react";
import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";

const BIcon: React.FC<FontAwesomeIconProps> = (props) => {
    return (
        <FontAwesomeIcon  type={'layerGroup'} {...props}  />
    )
}

export default BIcon;
