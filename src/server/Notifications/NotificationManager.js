// NotificationManager.js
const socketIO = require('socket.io');

class NotificationManager {
    constructor(server) {
        this.io = socketIO(server, {
            cors: {
                origin: 'http://localhost:3000', // Adjust this to match the origins you want to allow
                methods: ["GET", "POST", "PUT", "DELETE"],
                credentials: true
            }
        });
        this.io.on('connection', (socket) => {
            console.log('A user connected');
            socket.on('disconnect', () => {
                console.log('A user disconnected');
            });
        });
    }

    sendNotificationToAll(message) {
        this.io.emit('notification', message);
    }

    sendNotificationToUser(socketId, message) {
        this.io.to(socketId).emit('notification', message);
    }
}

module.exports = NotificationManager;