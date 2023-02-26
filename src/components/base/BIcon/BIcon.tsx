import React from "react";
import {IconName} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIconProps} from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {mapIcons} from "@/utils/icons";


interface Props  extends Omit<FontAwesomeIconProps, 'icon'> {
    name: IconName
}

const BIcon: React.FC<Props> = ({name, ...props}) => {
    return <FontAwesomeIcon icon={mapIcons(name)} {...props}  />
}

export default BIcon;
