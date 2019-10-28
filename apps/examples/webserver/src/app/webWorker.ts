// This webworker is loaded using https://github.com/GoogleChromeLabs/worker-plugin

declare function postMessage(data: any);
declare function postMessage(json: any, arrayBuffer: ArrayBuffer);

addEventListener('message', event => {
  console.log(`webWorker.ts received a message: ${event.data}`);
  postMessage(`Echo back: ${event.data}`);
});

export const noop = 0;
