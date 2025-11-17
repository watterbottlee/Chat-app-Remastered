import { Stomp } from "@stomp/stompjs";

export const connectToRoom = (roomId, onMessageReceived) => {
  let stompClient = null;
  let isConnected = false;
  const API_BASE_URL = 'ws://localhost:8080/chat';

  const socket = new WebSocket(API_BASE_URL);
  stompClient = Stomp.over(socket);

  stompClient.connect({}, function (frame) {
    console.log('Connected: ' + frame);
    isConnected = true;

    // Subscribe to the room topic
    stompClient.subscribe('/topic/room/' + roomId, function (message) {
      const msg = JSON.parse(message.body);
      if (onMessageReceived) {
        onMessageReceived(msg);
      }
    });
  }, function (error) {
    console.error('Connection error:', error);
    isConnected = false;
    alert("Failed to connect to the backend");
  });

  return {
    sendMessage: (content, sender) => {
      if (!stompClient || !isConnected) {
        console.error('Cannot send: not connected');
        return false;
      }
      const messageRequest = {
        content: content.trim(),
        sender: sender.trim(),
        roomId: roomId
      };
      stompClient.send('/app/sendMessage/' + roomId, {}, JSON.stringify(messageRequest));
      return true;
    },

    disconnect: () => {
      if (stompClient && isConnected) {
        stompClient.disconnect(() => {
          console.log('Disconnected from room:', roomId);
          isConnected = false;
        });
      }
    },

    isConnected: () => isConnected
  };
};

//utility for the connectToRoom api
export const socketService = (roomId, onMessageReceived) => {

  let isConnectd = false;
  let MessageQue = [];

  const ctr = connectToRoom(roomId, onMessageReceived);

  //cheking connection:
  const checkInterval = setInterval(() => {
    let count = 0;
    // console.log("setInterval started")
    if (ctr.isConnected()) {
      while (MessageQue.length > 0) {
        const { content, sender } = MessageQue.shift();
        ctr.sendMessage(content, sender)
      }
      isConnectd = true;
    } else {
      // console.log("retrying connection...", count)
      count++;
      tryingToConnect = true;
    }
  }, 1000);

  const sendMessage = (content, sender) => {
    if (ctr.isConnected()) {
      return ctr.sendMessage(content, sender);
    } else {
      MessageQue.push({ content: content, sender: sender });
      console.log("Message queued:", content, sender);
    }
  }
  return{
    sendMessage
  }
}