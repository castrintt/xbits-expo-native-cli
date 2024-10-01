#!/usr/bin/env node
import ASK_QUESTIONS from "../utils/questions.js";
import Component from "../create_files/component.js";


async function RUN() {
    const ANSWERS = await ASK_QUESTIONS();
    Component(ANSWERS);
}

RUN().then();