import io from 'socket.io-client';

class SocketSingleton {
    static instance = null;
    socket = null;

    constructor() {
        if (!SocketSingleton.instance) {
            SocketSingleton.instance = this;
            this.socket = io('ws://localhost:5001');

            // handle socket events
            this.socket.on('connect', () => {
                localStorage.setItem('socketId', this.socket.id)
            });

            this.socket.on('disconnect', () => {
                console.log('Disconnected from socket');
            });

            this.socket.on('error', (error) => {
                console.error('Socket error:', error);
            });

        }

        return SocketSingleton.instance;
    }

    emit(eventName, data) {
        if (this.socket) {
            this.socket.emit(eventName, data);
        } else {
            console.error('Socket is not connected');
        }
    }

    on(eventName, callback) {
        if (this.socket) {
            this.socket.on(eventName, callback);
        } else {
            console.error('Socket is not connected');
        }
    }


    off() {
        this.socket.disconnect('disconnect')
    }
}


export const socket = new SocketSingleton();