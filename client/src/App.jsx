import {AuthUI} from "./components/AuthUI.jsx";
import {UnAuthUI} from "./components/UnAuthUI.jsx";
import {useEffect, useState} from "react";
import { toast, Toaster } from "sonner";
import {handleResponseAuth, sendAuth} from "./services/auth.js";
import {socket} from "./utils/socket.js";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        const start = () => {
            sendAuth(socket);
            socket.on('auth', (data) => handleResponseAuth(data, () => setIsAuth(true)))
            socket.on('should-toast', () => {
                toast.message('OK', {
                    description: 'work well',
                });
            })
        }

        start();

    }, [])
    return (
        <div className={""}>
            {isAuth ? <AuthUI/> : <UnAuthUI/>}
            <Toaster position="top-right"/>
        </div>
    );
}

export default App;
