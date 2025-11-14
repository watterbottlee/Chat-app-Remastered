
import { Navbar } from './homepage';

export function ChatPage() {
    return (
        <div className="min-h-screen font-mono bg-amber-50 flex flex-col">
            <Navbar />
            <div className="flex-1 flex px-10 py-10 gap-8 ">
                <div className="flex-3 flex flex-col px-6 py-6  bg-amber-50 p-6 border-2 border-gray-800 rounded-lg">
                    <div className="flex mb-4 px-4 justify-between gap-6 h-15 text-2xl border-2 border-gray-800 rounded-lg bg-yellow-100 ">
                        <div className="flex items-center">
                           <ul className="text-amber-900">roomId:</ul>
                           <ul className="text-green-600">kanishk897</ul>
                        </div>
                        <div className="flex items-center gap-5">
                            <ul className="text-blue-500">info</ul>
                            <ul className="text-red-500">exit</ul>
                        </div>  
                    </div>
                    <div className="flex-1 flex px-4 mb-4 justify-between gap-6 h-15 text-2xl border-2 border-gray-800 rounded-lg bg-yellow-100">
                        chat box
                    </div>
                    <div className="flex px-4 justify-between gap-6 h-15 text-2xl border-2 border-gray-800 rounded-lg bg-yellow-100 ">
                        <input
                        placeholder="Enter message"
                        />
                        <div className="flex items-center gap-5">
                            <button>
                                send
                            </button>
                        </div>  
                    </div>
                </div>

                <div className="flex-2 bg-amber-50 p-6 border-2 border-gray-800 rounded-lg">
                    <h2 className="text-black text-xl ">Box 2</h2>
                    <p className="text-black">Content for the second box</p>
                </div>
            </div>

        </div>
    );
}