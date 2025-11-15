import chatImage from '../assets/chat-room.png';
import fileShareImage from '../assets/file-share.png';
import { CreateRoomForm, JoinRoomForm } from '../Forms/roomform';
import React, { useState } from 'react';
import { ChatPage } from './chatpage';


export function Navbar() {
    return (
        <nav className="w-full bg-amber-100 border-b border-gray-200">
            <div className="flex items-center justify-between h-16 px-6">
                {/* Left-aligned brand */}
                <div className="text-2xl font-bold font-mono tracking-wide">
                    Chit Chat
                </div>
                {/* Right-aligned menu */}
                <div className="flex space-x-10 text-xl font-mono text-black    ">
                    <span className="hover:text-amber-700 transition cursor-pointer">
                        Use Cases
                    </span>
                    <span className="hover:text-amber-700 transition cursor-pointer">
                        about
                    </span>
                    <span className="hover:text-amber-700 transition cursor-pointer">
                        Moto
                    </span>
                    <span className="hover:text-amber-700 transition cursor-pointer">
                        Developers
                    </span>
                </div>
            </div>
        </nav>
    )
}
export function HomePage() {
    const [dialog, setDialog] = useState(null); // 'create', 'join', or null

    // Close dialog helper
    const closeDialog = () => setDialog(null);
    return (
        <div className="min-h-screen bg-[#fae2aa]">
            <Navbar />

            <div className="max-w-6xl mx-auto  bg-[#fae2aa] px-6 py-16">
                {/* Main Grid - Two Columns */}
                <div className="grid grid-cols-2 gap-8">

                    {/* Left Column - Chat with People */}
                    <div id="left-area" className="bg-amber-100 border-2 border-gray-800 rounded-lg p-8">
                        {dialog === null ? (
                            <>
                                <h2 className="text-2xl font-bold font-mono mb-6 text-center">
                                    Chat with People in a Room
                                </h2>

                                <div className="space-y-4">
                                    <button
                                        className="w-full bg-[#fae2aa] border-2 border-gray-800 rounded py-3 px-6 font-mono text-lg hover:bg-green-400 transition cursor-pointer"
                                        onClick={() => setDialog('create')}
                                    >
                                        Create Room
                                    </button>

                                    <button
                                        className="w-full bg-[#fae2aa] border-2 border-gray-800 rounded py-3 px-6 font-mono text-lg hover:bg-blue-400 transition cursor-pointer"
                                        onClick={() => setDialog('join')}
                                    >
                                        Join Room
                                    </button>
                                </div>
                                <br />
                                <div>
                                    <img
                                        src={chatImage}
                                        alt="Chat room vector"
                                        className="w-full max-w-full mb-6 rounded"
                                        style={{ aspectRatio: "16 / 9", objectFit: "contain" }}
                                    />
                                </div>
                            </>
                        ) : dialog === 'create' ? (
                            <CreateRoomForm onClose={closeDialog} />
                        ) : (
                            <JoinRoomForm onClose={closeDialog} />
                        )}
                    </div>
                    {/* Right Column - Transfer Files */}
                    <div className="bg-amber-100 border-2 border-gray-800 rounded-lg p-8">
                        <h2 className="text-2xl font-bold font-mono mb-6 text-center">
                            Transfer Files P2P
                        </h2>

                        <div className="space-y-4">
                            <button className="w-full bg-[#fae2aa] border-2 border-gray-800 rounded py-3 px-6 font-mono text-lg hover:bg-green-400 transition cursor-pointer">
                                Create room
                            </button>

                            <button className="w-full bg-[#fae2aa] border-2 border-gray-800 rounded py-3 px-6 font-mono text-lg hover:bg-blue-400 transition cursor-pointer">
                                Join Room
                            </button>
                        </div>
                        <br />
                        <div>
                            <img
                                src={fileShareImage}
                                alt="Chat room vector"
                                className="w-full max-w-full mb-6 rounded"
                                style={{ aspectRatio: "16 / 9", objectFit: "contain" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}