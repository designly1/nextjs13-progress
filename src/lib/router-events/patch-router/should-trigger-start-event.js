"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldTriggerStartEvent = void 0;
const add_base_path_1 = require("next/dist/client/add-base-path");
function getURL(href) {
    return new URL((0, add_base_path_1.addBasePath)(href), location.href);
}
// https://github.com/vercel/next.js/blob/400ccf7b1c802c94127d8d8e0d5e9bdf9aab270c/packages/next/src/client/link.tsx#L169
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return ((target && target !== "_self") ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey || // triggers resource download
        (event.nativeEvent && event.nativeEvent.button === 1));
}
function shouldTriggerStartEvent(href, clickEvent) {
    const current = window.location;
    const target = getURL(href);
    if (clickEvent && isModifiedEvent(clickEvent))
        return false; // modified events: fallback to browser behaviour
    if (current.origin !== target.origin)
        return false; // external URL
    if (current.pathname === target.pathname && current.search === target.search)
        return false; // same URL
    return true;
}
exports.shouldTriggerStartEvent = shouldTriggerStartEvent;
