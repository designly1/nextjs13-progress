import NProgress from "nprogress";

export function onStart() {
  console.log("onStart");
  NProgress.start();
}

export function onComplete() {
  console.log("onComplete");
  NProgress.done();
}
