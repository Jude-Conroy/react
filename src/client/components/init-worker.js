const worker = new SharedWorker('shared-worker.js');
worker.port.onmessage = function (event) {
    console.log('Received message from worker:', event.data);
};
worker.port.start();
worker.port.postMessage('Hello, worker!');