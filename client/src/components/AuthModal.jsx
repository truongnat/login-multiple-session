import React, {useState} from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none'
    },
};

export function AuthModal({isOpen, closeModal, type, onSubmit}) {
    const [form, setForm] = useState({email: '', password: ''});
    const changeForm = ({target}) => {
        setForm(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Auth Modal"
        >
            <div
                className="bg-white shadow-md min-w-[500px] bg-neutral-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="text-center text-3xl font-medium tracking-tight text-gray-900">
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6">
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="px-4 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Email address"
                                    value={form.email}
                                    onChange={changeForm}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="px-4 relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Password"
                                    value={form.password}
                                    onChange={changeForm}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="button"
                                onClick={() => onSubmit(form)}
                                className="group relative flex w-full justify-center rounded-md bg-sky-600 py-2 px-3 text-sm font-semibold text-white hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {type}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
}
