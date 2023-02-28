import {
    IconDefinition,
    faSignal,
    faCross,
    faPen,
    faList,
    faCalendarPlus,
    faCalendar,
    faFolderPlus
} from "@fortawesome/free-solid-svg-icons";
import {IconName} from "@fortawesome/free-solid-svg-icons";

export const mapIcons = (name: IconName): IconDefinition => {
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
    }
    return faCross
}
