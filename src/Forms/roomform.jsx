import { use, useState } from "react";

export function CreateRoomForm({onClose}){
    const [roomid, setRoomId]=useState("");
    const [roomPassword, setRoomPassword]= useState("");
    const [confirmPassword, setConfirmPassword]= useState("");

    return(
        <form className="bg-amber-50 text-2xl border-gray-800 max-w-md font-mono mx-auto">
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
          id="roomid"
          value={roomid}
          onChange={(e) => setRoomId(e.target.value)}
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
                    onChange={(e)=>setRoomPassword(e.target.value)}
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
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                />
            </div>
            <div>
                <button className="w-full border mb-4 bg-green-500 rounded px-3 py-2 cursor-pointer hover:bg-green-600">
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
export function JoinRoomForm({onClose}){
    const [roomid, setRoomId]=useState("");
    const [roomPassword, setRoomPassword]= useState("");

    return(
        <form className="bg-amber-50 text-2xl border-gray-800 max-w-md font-mono mx-auto">
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
          id="roomid"
          value={roomid}
          onChange={(e) => setRoomId(e.target.value)}
          className="w-full border border-gray-800 rounded px-3 py-2 text-lg focus:outline-blue-400"
          placeholder="Enter room name"
          required
        />
      </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-800">
                    Create Password
                </label>
                <input
                    className="w-full border border-gray-800 rounded px-3 py-2 text-lg focus:outline-blue-400"
                    type="password"
                    id="roomPassword"
                    value={roomPassword}
                    onChange={(e)=>setRoomPassword(e.target.value)}
                    placeholder="Enter Password"
                    required    
                />
            </div>
            <div>
                <button 
                type="button"
                className="w-full mb-4 border bg-blue-500 rounded px-3 py-2 cursor-pointer hover:bg-blue-600"
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