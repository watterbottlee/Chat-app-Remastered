import { useState } from "react"

export function TakeNameForm({onClose}) {

    const [userName, setUserName] = useState("");

    return (
        <form className="bg-amber-100 text-2xl border-gray-800 max-w-full rounded-lg px-10 py-2 font-mono mx-auto">
            <div className="mb-4 ">
                <div className="mt-2 flex-col mb-4 ">
                    <h2 className="flex-1 font-bold text-3xl text-center mb-5">Take an anonymous name </h2>
                    <p className="flex-3 text-blue-500 text-justify">this will be a temporary name, you can take multiple differnet names when ever you join the room. As we dont take signups ,namings are subject to volatility</p>
                </div>
                <label className="block text-2xl text-black ">
                    Username
                </label>
                <input
                    type="text"
                    id="userName"
                    value={userName}
                    placeholder="Temorary Anonymus Name"
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full border border-gray-800 rounded px-3 py-2 text-lg focus:outline-green-400"
                    required
                />
            </div>
            <div>
                <button
                    className="w-full border mb-4 bg-green-500 rounded px-3 py-2 cursor-pointer hover:bg-green-600"
                    onClick={()=>onClose(userName)}
                >
                    Confirm
                </button>
            </div>
        </form>
    )
}