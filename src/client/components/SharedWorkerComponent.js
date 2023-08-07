import React, { useEffect } from 'react';

const SharedWorkerComponent = () => {
    useEffect(() => {
        if (typeof SharedWorker !== 'undefined') {
            const worker = new SharedWorker('shared-worker.js');
            worker.port.onmessage = function (event) {
                console.log('Received message from worker:', event.data);
            };
            worker.port.start();
            worker.port.postMessage('Hello, worker!');
        } else {
            console.warn('SharedWorker is not supported in this browser.');
        }
    }, []);

    return <div>" "</div>;
};

export default SharedWorkerComponent;
