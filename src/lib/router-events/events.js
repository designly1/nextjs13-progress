"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onComplete = exports.onStart = void 0;
const nprogress_1 = __importDefault(require("nprogress"));
function onStart() {
    console.log("onStart");
    nprogress_1.default.start();
}
exports.onStart = onStart;
function onComplete() {
    console.log("onComplete");
    nprogress_1.default.done();
}
exports.onComplete = onComplete;
