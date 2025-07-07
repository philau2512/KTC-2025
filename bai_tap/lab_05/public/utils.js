"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInput = getInput;
var readline_1 = require("readline");
function getInput(question) {
    var rl = (0, readline_1.createInterface)({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(function (resolve) {
        rl.question(question, function (answer) {
            rl.close();
            resolve(answer);
        });
    });
}
