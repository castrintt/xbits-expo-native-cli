import fs from "fs";

function WRITE_TO_FILE(fileName, data) {
    fs.writeFileSync(fileName, data, "utf8");
}

export default WRITE_TO_FILE;