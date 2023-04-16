import {
    IconDefinition,
    faSignal,
    faCross,
    faPen,
    faList,
    faCalendarPlus,
    faCalendar,
    faFolderPlus,
    faTrashCan,
    faPenToSquare, faBanSmoking, faBeer, faHandshakeSlash, faCubesStacked, faShower
} from "@fortawesome/free-solid-svg-icons";
import {IconName} from "@fortawesome/free-solid-svg-icons";

export const mapIcons = (name: IconName | string): IconDefinition => {
    switch (name) {
        case "signal":
            return faSignal;
        case "list":
            return faList;
        case "pen":
            return faPen;
        case "calendar-plus":
            return faCalendarPlus;
        case "calendar":
            return faCalendar;
        case "folder-plus":
            return faFolderPlus;
        case "trash-can":
            return faTrashCan;
        case "pen-to-square":
            return faPenToSquare;
        case "handoff":
            return faHandshakeSlash;
        case "smoking":
            return faBanSmoking;
        case "alcohol":
            return faBeer;
        case "sugar":
            return faCubesStacked;
        case "shower":
            return faShower;
    }
    return faCross
}
