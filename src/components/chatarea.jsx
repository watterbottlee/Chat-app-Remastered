import { useEffect, useRef } from 'react';

export function ChatArea({ messages }) {

    const chatDivRef = useRef(null);
    
    useEffect(() => {
        if (chatDivRef.current) {
            chatDivRef.current.scrollTop = chatDivRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div
            ref={chatDivRef}
            id="chat-div"
            className="flex-1 min-h-133 max-h-133 py-2 max-w-231 overflow-y-auto px-4 mb-4 gap-6 text-2xl border-2 border-gray-800 rounded-lg bg-yellow-100"
        >
            {messages.length === 0 ? (
                <div className="py-3 text-justify text-green-800 font-mono">
                    No Messages yet, say something to the people associated here..
                </div>
            ) : (
                messages.map((message, index) => (
                    <div
                        key={index}
                        className="border-2 border-gray-800 rounded-lg p-2 mb-2 bg-green-400"
                    >
                        <div className="flex justify-between items-start">
                            <div className="font-mono text-blue-600">{message.sender}</div>
                            <div className="text-sm text-gray-500 mt-1">
                                {new Date(message.timestamp).toLocaleString()}
                            </div>
                        </div>
                        <div className="text-gray-800 wrap-break-word">{message.content}</div>
                    </div>
                ))
            )}
        </div>
    );
}