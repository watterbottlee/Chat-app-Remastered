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
      stompClient.send('/app/sendMessage/'+roomId,{},JSON.stringify(messageRequest));
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