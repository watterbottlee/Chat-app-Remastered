import { use, useState } from "react";
import { createRoom, JoinRoom } from "../services/roomService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function CreateRoomForm({ onClose }) {
    const [roomId, setroomId] = useState("");
    const [roomPassword, setRoomPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const validateCreateRoomForm = (roomId, roomPassword, confirmPassword) => {
        if (roomId) {
            if (roomPassword.length > 3 && roomPassword == confirmPassword) {
                return true;
            } else {
                return false
            }
        } else {
            return false;
        }
    }

    const handleSubmit = async (roomId, roomPassword, confirmPassword,) => {
        if (validateCreateRoomForm(roomId, roomPassword, confirmPassword)) {
            const payload = {
                roomId: roomId,
                password: roomPassword
            }
            const res = await createRoom(payload)
            if (res.success) {
                toast.success("room created successfully")
                navigate("/chatpage", {
                    state: {
                        roomId,
                        roomPassword
                    }
                })
            } else {
                toast.error("some error occured")
            }
        }
    }

    return (
        <form className="bg-amber-100 text-2xl border-gray-800 max-w-md font-mono mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Create a Room
            </h2>
            <div className="mb-4">
                <label
                    className="block mb-1 text-gray-700"
                >
                    Room Name
                </label>
                <input
                    type="text"
                    id="roomId"
                    value={roomId}
                    onChange={(e) => setroomId(e.target.value)}
                    className="w-full border border-gray-800 rounded px-3 py-2 text-lg focus:outline-green-400"
                    placeholder="Enter room name"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-800">
                    Create Password
                </label>
                <input
                    className="w-full border border-gray-800 rounded px-3 py-2 text-lg focus:outline-green-400"
                    type="password"
                    id="roomPassword"
                    value={roomPassword}
                    onChange={(e) => setRoomPassword(e.target.value)}
                    placeholder="Enter Password"
                    required
                />
            </div>
            <div className="mb-4">
                <label>
                    Confirm Password
                </label>
                <input
                    className="w-full border border-gray-800 rounded px-3 py-2 text-lg focus:outline-green-400"
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                />
            </div>
            <div>
                <button
                    className="w-full border mb-4 bg-green-500 rounded px-3 py-2 cursor-pointer hover:bg-green-600"
                    type="button"
                    onClick={() => handleSubmit(roomId, roomPassword, confirmPassword)}
                >
                    Create Room
                </button>
                <button
                    type="button"
                    className="w-full border bg-red-500 rounded px-3 py-2 cursor-pointer hover:bg-red-600"
                    onClick={onClose}
                >
                    cancel
                </button>
            </div>
        </form>
    )
}
export function JoinRoomForm({ onClose }) {
    const [roomId, setroomId] = useState("");
    const [roomPassword, setRoomPassword] = useState("");

    const navigate = useNavigate();

    const validateJoinRoomForm = (roomId, roomPassword) => {
        if (roomId) {
            if (roomPassword.length > 3) {
                return true;
            } else {
                return false
            }
        } else {
            return false;
        }
    }

    const handleSubmit = async (roomId, roomPassword) => {
        if (validateJoinRoomForm(roomId, roomPassword)) {
            const payload = {
                roomId: roomId,
                password: roomPassword
            }
            console.log("handlesubmit fn payload :", payload)
            const res = await JoinRoom(payload);
            if (res.success) {
                toast.success("room joined successfully")
                navigate("/chatpage", {
                    state: {
                        roomId,
                        roomPassword
                    }
                })
            } else {
                toast.error("some error occured")
            }
        }
    }

    return (
        <form className="bg-amber-100 text-2xl border-gray-800 max-w-md font-mono mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Join a Room
            </h2>
            <div className="mb-4">
                <label
                    className="block mb-1 text-gray-700"
                >
                    Room Name
                </label>
                <input
                    type="text"
                    id="roomId"
                    value={roomId}
                    onChange={(e) => setroomId(e.target.value)}
                    className="w-full border border-gray-800 rounded px-3 py-2 text-lg focus:outline-blue-400"
                    placeholder="Enter room name"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-800">
                    Password
                </label>
                <input
                    className="w-full border border-gray-800 rounded px-3 py-2 text-lg focus:outline-blue-400"
                    type="password"
                    id="roomPassword"
                    value={roomPassword}
                    onChange={(e) => setRoomPassword(e.target.value)}
                    placeholder="Enter Password"
                    required
                />
            </div>
            <div>
                <button
                    type="button"
                    className="w-full mb-4 border bg-blue-500 rounded px-3 py-2 cursor-pointer hover:bg-blue-600"
                    onClick={() => handleSubmit(roomId, roomPassword)}
                >
                    Join Room
                </button>
                <button
                    type="button"
                    className="w-full border bg-red-500 rounded px-3 py-2 cursor-pointer hover:bg-red-600"
                    onClick={onClose}
                >
                    cancel
                </button>
            </div>
        </form>
    )
}