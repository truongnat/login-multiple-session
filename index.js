const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const { getMeService, loginService, registerService, getMe } = require("./services/auth");
const app = express();
const router = express.Router();


const server = http.createServer(app);
const io = socketIO(server, {
    cors: "*"
});

const PORT = 5001;

router.get('/', (req, res) => {
    res.send('Hello world!')
})


app.use(cors({
    allowedHeaders: '*',
}))


app.use(router);


server.listen(PORT);

io.on("connection", (socket) => {

    socket.on('getMe', id => getMeService(socket,id));

    socket.on('login', (data) => loginService(socket, data));

    socket.on('register', (data) => registerService(socket, data));

    socket.on('can-push', id => {
        const me = getMe(id);
        console.log('me',me)
        socket.emit('should-toast')
    })
});
