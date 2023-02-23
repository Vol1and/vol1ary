import SidebarLink from "@/components/layout/Sidebar/SidebarLink/SidebarLink";
import {SIDEBAR_TREE} from "@/config/layout.config";
import {ISidebarTree} from "@/types";
import React from "react";

interface Props {
   trees?: ISidebarTree[]
}

const Sidebar: React.FC<Props> = ({trees= SIDEBAR_TREE}) => {
    return (
        <div className="sidebar">
            {
                trees.map((el, idx) => (
                    <div key={idx}>
                        <h3 className="sidebar__header">{el.title}</h3>
                        <div className="sidebar__item-container">
                            {
                            el.links.map((link, idx) => (
                                <SidebarLink key={idx} link={link.link} icon={link.icon}>{link.label}</SidebarLink>
                            ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Sidebar
