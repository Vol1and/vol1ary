import SidebarLink from "@/components/layout/Sidebar/SidebarLink/SidebarLink";
import {SIDEBAR_TREE} from "@/config/layout.config";
import {ISidebarTree} from "@/types";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

interface Props {
    trees?: ISidebarTree[]
}

const Sidebar: React.FC<Props> = ({trees = SIDEBAR_TREE}) => {

    const isCollapsed = useSelector((state: RootState) => state.layout.isCollapsed);

    return (
        <div className={`sidebar ${isCollapsed && 'collapsed'}`}>
            <div className="sidebar__head">
                <svg className="sidebar__head-logo" version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                     preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                       fill="#000000" stroke="none">
                        <path fill="white" d="M2465 5113 c-641 -23 -1254 -291 -1711 -747 -209 -209 -347 -403 -484 -681 -132 -267 -206 -509 -246 -805 -25 -185 -23 -492 5 -680 69 -457 237 -854 519 -1220 97 -126 340 -363 472 -461 503 -374 1103 -554 1702 -511 519 37 973 205 1387 515 124 92 396 364 488 488 417 559 593 1240 494 1915 -116 784 -576 1458 -1263 1853 -408 234 -885 351 -1363 334z m418 -313 c980 -144 1743 -888 1912 -1865 49 -285 36 -638 -36 -920 -57 -227 -162 -472 -285 -665 l-58 -92 -12 48 c-6 27 -23 74 -38 104 -32 68 -32 81 0 150 14 30 28 78 31 106 5 48 3 54 -28 87 -24 25 -88 60 -224 122 -327 150 -400 191 -479 270 -68 67 -267 332 -449 597 -48 70 -110 147 -138 172 -85 77 -92 78 -536 74 l-388 -3 -60 -33 c-33 -18 -74 -45 -91 -60 -18 -15 -141 -187 -275 -382 -134 -195 -265 -376 -292 -402 -66 -65 -94 -80 -385 -207 -140 -60 -265 -117 -278 -126 -36 -23 -64 -74 -64 -116 0 -20 15 -64 35 -105 19 -38 35 -81 35 -96 0 -15 -16 -57 -35 -94 -19 -36 -35 -75 -35 -87 0 -46 -147 201 -222 373 -144 330 -195 598 -185 976 8 354 76 632 229 939 337 676 983 1138 1733 1239 159 22 454 20 618 -4z m-975 -3127 l-3 -298 -26 -12 c-22 -11 -68 -3 -349 62 -178 41 -328 79 -334 85 -19 19 17 38 199 104 220 80 284 121 386 244 79 95 96 112 116 112 11 0 13 -56 11 -297z m1429 165 c65 -81 114 -132 146 -152 26 -16 129 -55 229 -86 164 -51 215 -76 197 -95 -3 -3 -155 -40 -338 -82 -251 -58 -337 -74 -349 -66 -15 9 -17 41 -20 294 -1 156 0 289 3 296 11 30 40 6 132 -109z"/>
                        <path fill="white" d="M2457 4059 c-138 -32 -264 -148 -313 -286 -75 -213 25 -447 234 -546 58 -28 80 -32 166 -35 82 -3 108 0 160 18 120 44 197 113 254 229 36 73 37 77 37 190 0 109 -2 120 -31 182 -35 74 -115 161 -184 202 -86 50 -223 70 -323 46z"/>
                    </g>
                </svg>

                <h3 className="t-h3 sidebar__head-title">{!isCollapsed && 'Vollary'}</h3>
            </div>
            <div className="sidebar__body">
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
        </div>
    )
}

export default Sidebar
