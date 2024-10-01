import CAPITALIZE from "../utils/captalize.js";

const CONTROLLER_TEMPLATE = (NAME) => `
import {ControllerInjectType} from './${NAME}.types';

function Use${CAPITALIZE(NAME)}Controller({}: ControllerInjectType) {
    return {
        actions: {},
        states: {}
    };
}

export default Use${CAPITALIZE(NAME)}Controller;
 `;


export default CONTROLLER_TEMPLATE;