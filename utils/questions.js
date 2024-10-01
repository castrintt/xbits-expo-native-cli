import inquirer from "inquirer";

function ASK_QUESTIONS() {
    return inquirer.prompt([{name: "FILENAME", message: "Module name: \n"}]);
}

export default ASK_QUESTIONS;

