import React from "react";
import {UserInfo} from "./UserInfo";
import { socket } from "../utils/socket.js";

export function AuthUI() {
    const id = localStorage.getItem('ix');

    const test = () => {
        socket.emit('can-push',id);
    }


    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <h1 className="text-3xl font-medium text-center py-5">
                [@{id}] login session started.
            </h1>
            <div className="relative bg-white px-6 pb-8 shadow-xl mx-auto sm:rounded-lg">
                <div className="mx-auto min-w-[500px]">
                    <div className="divide-y divide-gray-300/50">
                        <UserInfo classes={"border-b py-4"} active onClick={test} />
                        <div className="py-4 text-base leading-7 text-gray-600">
                            <ul className="space-y-4">
                                {[1, 2, 3, 4].map((_, idx) => (
                                    <UserInfo
                                        classes={"border-b pb-4 last:pb-0 last:border-none"}
                                        key={idx}
                                    />
                                ))}
                            </ul>
                        </div>
                        <div className="pt-8 text-base leading-7">
                            <p className="text-gray-900 font-semibold">
                                Autonatically terminate old sessions?
                            </p>
                            <p>
                                If Inactive For <code>6 months</code>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
