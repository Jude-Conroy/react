const socket = require('socket.io-client')('http://localhost:5000');
socket.on('message', function(data) {
    self.clients.matchAll().then(clients => {
        clients.forEach(client => {
            client.postMessage(data);
        });
    });
});

self.onconnect = function(e) {
    const port = e.ports[0];
    port.onmessage = function(event) {
        socket.emit('message', event.data);
    };
    port.start();
};