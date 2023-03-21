import {toast} from 'sonner'
import {format} from "date-fns";

export const sendAuth = (socket) => {
    const currentId = localStorage.getItem('ix');
    if (currentId) {
        socket.emit('getMe', currentId)
    } else {
        toast.message('Welcome', {
            description: format(new Date(), "EEEE, MMMM do 'at' h:mma"),
        })
    }
}

// data = { reason: string, id: string, status: success | error, authType: login | register | checkme }
export const handleResponseAuth = (data, callback) => {
    console.log('handleResponseAuth', data)
    if (data?.status === 'error') {
        toast.message('Error', {
            description: data?.reason,
        });
        localStorage.removeItem('ix');
    } else if (data?.status === 'success') {
        if (data?.authType === 'login' || data?.authType === 'checkme') {
            toast.message('Welcome comback', {
                description: data?.reason,
            })
            localStorage.setItem('ix', data?.id);
        } else if (data?.authType === 'register') {
            toast.message('Register success', {
                description: data?.reason,
            })
            localStorage.setItem('ix', data?.id);
        }
        callback();
    }
}