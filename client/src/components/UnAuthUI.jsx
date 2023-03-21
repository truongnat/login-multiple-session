import React from "react";
import {AuthModal} from "./AuthModal";
import {socket} from "../utils/socket.js";

export function UnAuthUI() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [authType, setAuthType] = React.useState("");
    const id = localStorage.getItem('socketId');

    const openModal = (type) => {
        setIsOpen(true);
        setAuthType(type);
    };

    const handleSubmit = data => {
        socket.emit(authType, {
            ...data,
            socketId: id
        });
        setIsOpen(false);
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-medium text-center py-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Hi ! Start session now {"<3"}
            </h1>
            <div className="flex gap-4">
                <button
                    onClick={() => openModal("login")}
                    type="button"
                    className="bg-sky-500/100 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg w-36 hover:bg-sky-500/90"
                >
                    Login
                </button>
                <button
                    onClick={() => openModal("register")}
                    type="button"
                    className="bg-sky-500/100 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg w-36 hover:bg-sky-500/90"
                >
                    Register
                </button>
            </div>
            <AuthModal onSubmit={handleSubmit} isOpen={modalIsOpen} closeModal={() => setIsOpen(false)}
                       type={authType}/>
        </div>
    );
}
