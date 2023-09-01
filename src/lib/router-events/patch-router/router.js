"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouter = void 0;
const navigation_1 = require("next/navigation");
const events_1 = require("../events");
const should_trigger_start_event_1 = require("./should-trigger-start-event");
function useRouter() {
    const router = (0, navigation_1.useRouter)();
    return Object.assign(Object.assign({}, router), { push: (href, options) => {
            if ((0, should_trigger_start_event_1.shouldTriggerStartEvent)(href))
                (0, events_1.onStart)();
            router.push(href, options);
        }, replace: (href, options) => {
            if ((0, should_trigger_start_event_1.shouldTriggerStartEvent)(href))
                (0, events_1.onStart)();
            router.replace(href, options);
        } });
}
exports.useRouter = useRouter;
