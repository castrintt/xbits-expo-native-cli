import fs from "fs";
import TYPE_TEMPLATE from "../modules/type.module.js";
import BASE_TEMPLATE from "../modules/base.module.js";
import COMPONENT_TEMPLATE from "../modules/component.module.js";
import CONTROLLER_TEMPLATE from "../modules/controller.module.js";
import STYLES_TEMPLATE from "../modules/styles.module.js";
import WRITE_TO_FILE from "../utils/write_to_file.js";

function Component(answers) {
    const {FILENAME} = answers;
    const CWD = process.cwd();

    const FILE_NAME_LOWERED = FILENAME.toLowerCase();

    if (!fs.existsSync(`${CWD}/${FILE_NAME_LOWERED}`)) fs.mkdirSync(`${CWD}/${FILE_NAME_LOWERED}`);

    WRITE_TO_FILE(`${CWD}/${FILE_NAME_LOWERED}/${FILE_NAME_LOWERED}.types.ts`, TYPE_TEMPLATE());

    WRITE_TO_FILE(`${CWD}/${FILE_NAME_LOWERED}/${FILE_NAME_LOWERED}.tsx`, BASE_TEMPLATE(FILE_NAME_LOWERED));

    WRITE_TO_FILE(`${CWD}/${FILE_NAME_LOWERED}/${FILE_NAME_LOWERED}.component.tsx`, COMPONENT_TEMPLATE(FILE_NAME_LOWERED));

    WRITE_TO_FILE(`${CWD}/${FILE_NAME_LOWERED}/${FILE_NAME_LOWERED}.controller.tsx`, CONTROLLER_TEMPLATE(FILE_NAME_LOWERED));

    WRITE_TO_FILE(`${CWD}/${FILE_NAME_LOWERED}/${FILE_NAME_LOWERED}.styles.ts`, STYLES_TEMPLATE());

    console.log(`👍 Modulo ${FILE_NAME_LOWERED} criado com sucesso`);
}

export default Component;