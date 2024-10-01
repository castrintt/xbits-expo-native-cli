import CAPITALIZE from "../utils/captalize.js";

const BASE_TEMPLATE = (NAME) => `
import {lazy, Suspense} from "react";
import {Text, View} from "react-native";
import Use${CAPITALIZE(NAME)}Controller from "./${NAME}.controller";

const ${CAPITALIZE(NAME)}Component = lazy(() => import("./${NAME}.component"));

function ${CAPITALIZE(NAME)}() {

    const controller = Use${CAPITALIZE(NAME)}Controller({ 
    });
    return (
        <Suspense fallback={<View> <Text>Loading</Text></View>}>
            <${CAPITALIZE(NAME)}Component controller={controller}/>
        </Suspense>
    );
}

export default ${CAPITALIZE(NAME)};

`;

export default BASE_TEMPLATE;