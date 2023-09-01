"use strict";
'use client';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const NProgress = __importStar(require("nprogress"));
const PropTypes = __importStar(require("prop-types"));
const react_1 = __importStar(require("react"));
const events_1 = require("./lib/router-events/events");
const navigation_1 = require("next/navigation");
function Innards() {
    const pathname = (0, navigation_1.usePathname)();
    const searchParams = (0, navigation_1.useSearchParams)();
    (0, react_1.useEffect)(() => (0, events_1.onComplete)(), [pathname, searchParams]);
    return null;
}
const Next13NProgress = ({ color = '#29D', startPosition = 0.3, stopDelayMs = 200, height = 3, showOnShallow = true, options, nonce, transformCSS = css => (
// @ts-ignore
(0, jsx_runtime_1.jsx)("style", Object.assign({ nonce: nonce, jsx: true, global: true }, { children: css }))), }) => {
    let timer = null;
    (0, react_1.useEffect)(() => {
        if (options) {
            NProgress.configure(options);
        }
    }, []);
    const routeChangeStart = (_, { shallow, }) => {
        if (!shallow || showOnShallow) {
            NProgress.set(startPosition);
            NProgress.start();
        }
    };
    const routeChangeEnd = (_, { shallow, }) => {
        if (!shallow || showOnShallow) {
            if (timer)
                clearTimeout(timer);
            timer = setTimeout(() => {
                NProgress.done(true);
            }, stopDelayMs);
        }
    };
    const routeChangeError = (_err, _url, { shallow, }) => {
        if (!shallow || showOnShallow) {
            if (timer)
                clearTimeout(timer);
            timer = setTimeout(() => {
                NProgress.done(true);
            }, stopDelayMs);
        }
    };
    const css = `
    #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: ${color};
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: ${height}px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
        opacity: 1;
        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
      }
      #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
      }
      #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        border: solid 2px transparent;
        border-top-color: ${color};
        border-left-color: ${color};
        border-radius: 50%;
        -webkit-animation: nprogresss-spinner 400ms linear infinite;
        animation: nprogress-spinner 400ms linear infinite;
      }
      .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
      }
      .nprogress-custom-parent #nprogress .spinner,
      .nprogress-custom-parent #nprogress .bar {
        position: absolute;
      }
      @-webkit-keyframes nprogress-spinner {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes nprogress-spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }`;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [transformCSS(css), (0, jsx_runtime_1.jsx)(react_1.Suspense, Object.assign({ fallback: null }, { children: (0, jsx_runtime_1.jsx)(Innards, {}) }))] }));
};
Next13NProgress.propTypes = {
    color: PropTypes.string,
    startPosition: PropTypes.number,
    stopDelayMs: PropTypes.number,
    height: PropTypes.number,
    showOnShallow: PropTypes.bool,
    options: PropTypes.object,
    nonce: PropTypes.string,
    transformCSS: PropTypes.func,
};
exports.default = react_1.default.memo(Next13NProgress);
