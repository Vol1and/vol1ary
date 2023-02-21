import React, {PropsWithChildren} from "react";
import Link from "next/link";
import BIcon from "../../..//base/BIcon/BIcon";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface SidebarLinkProps extends PropsWithChildren {
    link: string
    icon?: IconProp
}

const SidebarLink: React.FC<SidebarLinkProps>  = ({...props}) => {
    return (
        <Link href={props.link} className="sidebar__item">
            <div className="sidebar__item-bar"></div>
            {!!props.icon && <BIcon className="sidebar__item-icon" icon={props.icon} />}
            {props.children}
        </Link>
    )
}

export default SidebarLink
