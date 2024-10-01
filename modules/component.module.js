import CAPITALIZE from "../utils/captalize.js";

const COMPONENT_TEMPLATE = (NAME) => `
import React from "react";
import {ControllerType} from "./${NAME}.types";
import {Text, View} from "react-native";
import {Style} from "./${NAME}.styles";

function ${CAPITALIZE(NAME)}Component({controller}: ControllerType) {
    return (
        <View style={Style.base}>
            <Text>${CAPITALIZE(NAME)}</Text>
        </View>
    );
}

export default React.memo(${CAPITALIZE(NAME)}Component);
`;


export default COMPONENT_TEMPLATE;