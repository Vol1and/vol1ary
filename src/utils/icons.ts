import * as icons from "@fortawesome/free-solid-svg-icons";
import {IconName} from "@fortawesome/free-solid-svg-icons";

export const mapIcons = (name: IconName | string): icons.IconDefinition => {
    switch (name) {
        case "handoff":
            return icons.faHandshakeSlash;
        case "smoking":
            return icons.faBanSmoking;
        case "alcohol":
            return icons.faBeer;
        case "sugar":
            return icons.faCubesStacked;
        case "shower":
            return icons.faShower;
    }
    // @ts-ignore
    return icons[name]
}
