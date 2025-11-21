
import { useEffect, useRef, useState } from 'react';
import { Navbar } from './homepage';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchOldMessages } from '../services/roomService';
import { toast } from 'react-toastify';
import { TakeNameForm } from '../Forms/nameform';
import { socketService } from '../services/socket';
import { ChatArea } from '../components/chatarea';

export function ChatPage() {

    const [roomId, setRoomId] = useState("");
    const [messages, setMessages] = useState([]);
    const [userName, setUserName] = useState("");
    const [inputMessage, setInputMessage] = useState("");
    const socketServiceRef = useRef(null);


    const [dialog, setDialog] = useState("nameForm");

    const closeDialog = (userNamehere) => {
        setUserName(userNamehere);
        console.log("user name is set to", userNamehere)
        setDialog("chatArea");
    }


    const location = useLocation();
    const navigate = useNavigate();

    const handleMessageReceived = (message) => {
        console.log('Received message:', message);
        setMessages(prevMessages => [...prevMessages, message]);
    };

    const getMessages = async (roomId) => {
        const res = await fetchOldMessages(roomId);
        if (res && res.data) {
            setMessages(res.data);
        } else {
            console.log("Failed to get messages or empty response");
        }
    }

    const handleExit = () => {
        navigate("/");
        toast.success("Exited From Room")
    }

    useEffect(() => {
        if (!location.state || !location.state.roomId || !location.state.roomPassword) {
            navigate('/', { replace: true });
            return;
        }
        setRoomId(location.state.roomId);
        getMessages(location.state.roomId);
    }, []);
    useEffect(() => {
        if (!roomId) return;
        console.log('Creating socket connection for room:', roomId);
        socketServiceRef.current = socketService(roomId, handleMessageReceived);
        return () => {
            console.log('Component unmounting - cleanup if needed');
        };
    }, [roomId]);

    return (
        <div className="min-h-screen font-mono bg-[#fae2aa] flex flex-col">
            <Navbar />
            <div className="flex-1 flex px-10 py-10 gap-8 ">

                {/*chat box container */}
                <div className="flex-3 flex flex-col px-6 py-6 bg-[#c7a452] p-6 border-2 border-gray-800 rounded-lg">
                    <div className="flex mb-4 px-4 justify-between gap-6 h-15 text-2xl border-2 border-gray-800 rounded-lg bg-yellow-100 ">
                        <div className="flex items-center">
                            <ul className="text-amber-900">roomId:</ul>
                            <ul className="text-green-600">{roomId}</ul>
                        </div>
                        <div className="flex items-center gap-5">
                            <ul className="text-blue-500">info</ul>
                            <button
                                className="text-red-500 hover:text-red-800 cursor-pointer"
                                type="button"
                                onClick={() => handleExit()}
                            >
                                exit
                            </button>
                        </div>
                    </div>
                    <div className="flex-1">
                        {dialog === "nameForm" ? (
                            <TakeNameForm onClose={closeDialog} />
                        ) : dialog === "chatArea" ? (
                            <>
                                {/*main chat area scrollable*/}
                                <ChatArea messages={messages} />

                                {/* text input and send button area */}
                                <div className="flex justify-between gap-6 h-15 text-2xl border-2 border-gray-800 rounded-lg bg-yellow-100 ">
                                    <input className="flex-1 max-w-full p-2 rounded-lg outline-none"
                                        type="text"
                                        id="inputMessage"
                                        value={inputMessage}
                                        onChange={(e) => setInputMessage(e.target.value)}
                                        placeholder="Enter message"
                                        required
                                    />
                                    <div className="flex items-center mr-2">
                                        <button className="border-2 border-gray-800 bg-green-500 text-2xl py-1.5 px-1.5 hover:bg-green-600 cursor-pointer rounded-lg"
                                            onClick={() => {
                                                socketServiceRef.current?.sendMessage(inputMessage, userName)
                                                setInputMessage('');
                                            }
                                            }
                                        >
                                            send
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : null
                        }
                    </div>
                </div>

                <div className="flex-2 bg-amber-50 p-6 border-2 border-gray-800 rounded-lg">
                    <h2 className="text-black text-xl ">Box 2</h2>
                    <p className="text-black">Content for the second box</p>
                </div>
            </div>
        </div >
    );
}