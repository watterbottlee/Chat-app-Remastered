import { connectToRoom, socketService } from './socket.js';

const handleMessage = (message) => {
    console.log('Received message:', message);
};

const test = () => {

    let isConnectd = false;
    let MessageQue = [];


    const test = connectToRoom("upgrade", handleMessage);

    //cheking connection:
    const checkInterval = setInterval(() => {
        let count =0;
        console.log("setInterval started")
        if (test.isConnected()) {
            while (MessageQue.length > 0) {
                const {content,sender} = MessageQue.shift();
                test.sendMessage(content,sender)
            }
            isConnectd = true;
        } else {
            console.log("retrying connection...",count)
            count++;
            tryingToConnect = true;
        }
    }, 1000);

    const SendMessage = (content, sender) => {
        if (test.isConnected()) {
            return test.sendMessage(content, sender);
        } else {
            MessageQue.push({content: content, sender: sender});
            console.log("Message queued:", content,sender);
        }
    }
    SendMessage("hi im kanishk", "kanishk")
}
test();