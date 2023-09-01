"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = __importDefault(require("next/link"));
const react_1 = require("react");
const events_1 = require("../events");
const should_trigger_start_event_1 = require("./should-trigger-start-event");
exports.Link = (0, react_1.forwardRef)(function Link(_a, ref) {
    var { href, onClick } = _a, rest = __rest(_a, ["href", "onClick"]);
    const useLink = href && href.startsWith("/");
    if (!useLink)
        return (0, jsx_runtime_1.jsx)("a", Object.assign({ href: href, onClick: onClick }, rest));
    return ((0, jsx_runtime_1.jsx)(link_1.default, Object.assign({ href: href, onClick: (event) => {
            if ((0, should_trigger_start_event_1.shouldTriggerStartEvent)(href, event))
                (0, events_1.onStart)();
            if (onClick)
                onClick(event);
        } }, rest, { ref: ref })));
});
