import React, {PropsWithChildren} from "react";
import Link from "next/link";
import BIcon from "../../..//base/BIcon/BIcon";
import {useRouter} from "next/router";
import classNames from "classnames";
import {IconName} from "@fortawesome/free-regular-svg-icons";

export interface SidebarLinkProps extends PropsWithChildren {
    link: string
    icon?: IconName
}

const SidebarLink: React.FC<SidebarLinkProps>  = ({...props}) => {

    const {route} = useRouter();

    const classes = classNames('sidebar__item', { 'active': props.link === route});

    return (
        <Link href={props.link} className={classes}>
            <div className="sidebar__item-bar"></div>
            {!!props.icon && <BIcon className="sidebar__item-icon" name={props.icon} />}
            {props.children}
        </Link>
    )
}

export default SidebarLink
