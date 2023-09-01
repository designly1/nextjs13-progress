"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextJs13Progress = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const navigation_1 = require("next/navigation");
const react_1 = require("react");
const events_1 = require("./events");
function Innards() {
    const pathname = (0, navigation_1.usePathname)();
    const searchParams = (0, navigation_1.useSearchParams)();
    (0, react_1.useEffect)(() => (0, events_1.onComplete)(), [pathname, searchParams]);
    return null;
}
function NextJs13Progress() {
    return ((0, jsx_runtime_1.jsx)(react_1.Suspense, Object.assign({ fallback: null }, { children: (0, jsx_runtime_1.jsx)(Innards, {}) })));
}
exports.NextJs13Progress = NextJs13Progress;
