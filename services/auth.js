const db = require('../db');
const {v4} = require('uuid');


function isAuth(id) {
    return !!db.get('users').find({id}).value();
}

function getMe(id) {
    return db.get('users').find({id}).value();
}

function login(payload) {
    return db.get('users').find({email: payload.email, password: payload.password}).value();
}

function register(payload) {
    const checkAuth = db.get('users').find({email: payload.email}).value();

    if (checkAuth) {
        return false;
    }

    const res = db.get('users').push({
        id: v4(),
        ...payload
    }).write()

    return res.find(e => e.email === payload.email)?.id


}

const getMeService = (socket, id) => {
    const me = getMe(id);

    if (me) {
        socket.emit('auth', {
            reason: "Get me success",
            id: me.id,
            status: 'success',
            authType: 'checkme'
        })
    } else {
        socket.emit('auth', {
            reason: "Get me fail",
            status: 'error',
            authType: 'checkme'
        })
    }
}

const loginService = (socket, data) => {
        const user = login(data);
        if (user) {
            socket.emit('auth', {
                reason: "Login success",
                id: user.id,
                status: 'success',
                authType: 'login'
            })
        } else {
            socket.emit('auth', {
                reason: "Login fail",
                status: 'error',
                authType: 'login'
            })
        }
}

const registerService = (socket, data) => {
    const id = register(data);
    if (id) {
        socket.emit('auth', {
            reason: "Register success",
            id: id,
            status: 'success',
            authType: 'register'
        })
    } else {
        socket.emit('auth', {
            reason: "Register fail",
            status: 'error',
            authType: 'register'
        })
    }
}

module.exports = {
    isAuth,
    getMe,
    login,
    register,
    getMeService,
    loginService,
    registerService
}