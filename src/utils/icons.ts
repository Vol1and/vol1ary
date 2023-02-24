import {IconDefinition, faSignal, faCross, faPen, faList} from "@fortawesome/free-solid-svg-icons";
import {IconName} from "@fortawesome/free-regular-svg-icons";

export const mapIcons = (name: IconName): IconDefinition => {
    switch (name) {
        case "signal":
            return faSignal;
        case "list":
            return faList
        case "pen":
            return faPen
    }
    return faCross
}
