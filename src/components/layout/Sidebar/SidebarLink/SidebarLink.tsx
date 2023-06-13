import React, {PropsWithChildren} from "react";
import Link from "next/link";
import BIcon from "../../..//base/BIcon/BIcon";
import {useRouter} from "next/router";
import classNames from "classnames";

export interface Props extends PropsWithChildren {
    link: string
    icon?: string
}

const SidebarLink: React.FC<Props>  = ({...props}) => {

    const {route} = useRouter();

    const classes = classNames('sidebar__item', { 'active': props.link === route});

    return (
        <Link href={props.link} className={classes}>
            <div className="sidebar__item-bar"></div>
            {!!props.icon && <BIcon className="sidebar__item-icon" name={props.icon} />}
            <div className="sidebar__item-title">{props.children}</div>
        </Link>
    )
}

export default SidebarLink
