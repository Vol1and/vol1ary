import {ROUTE} from "@/pages/routes";
import SidebarLink from "@/components/layout/Sidebar/SidebarLink/SidebarLink";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface ISidebarTree {
    title: string
    links: {
        link: string
        icon: IconProp
        label: string
    }[]
}

const Sidebar = () => {
    const SIDEBAR_TREE: ISidebarTree[] = [
        {
            title: 'Главное',
            links: [
                {icon: 'list', label:'Записи', link: ROUTE.RECORDS.slug},
                {icon: 'pen', label:'Привычки', link: ROUTE.HABITS.slug},
                {icon: 'signal', label:'Спринты', link: ROUTE.SPRINTS.slug},
            ]
        },
        {
            title: 'Главное',
            links: [
                {icon: 'list', label:'Записи', link: ROUTE.RECORDS.slug},
                {icon: 'pen', label:'Привычки', link: ROUTE.HABITS.slug},
                {icon: 'signal', label:'Спринты', link: ROUTE.SPRINTS.slug},
            ]
        },
        {
            title: 'Главное',
            links: [
                {icon: 'list', label:'Записи', link: ROUTE.RECORDS.slug},
                {icon: 'pen', label:'Привычки', link: ROUTE.HABITS.slug},
                {icon: 'signal', label:'Спринты', link: ROUTE.SPRINTS.slug},
            ]
        },
    ]

    return (
        <div className="sidebar">
            {
                SIDEBAR_TREE.map((el) => (
                    <div>
                        <h3 className="sidebar__header">{el.title}</h3>
                        <div className="sidebar__item-container">
                            {
                            el.links.map((link) => (
                                <SidebarLink link={link.link} icon={link.icon}>{link.label}</SidebarLink>
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
