import { Stomp } from "@stomp/stompjs";

export const connectToRoom = (roomId) => {
  let stompClient = null;
  let isConnected = false;
  const API_BASE_URL = 'ws://localhost:8080/chat';

  const socket = new WebSocket(API_BASE_URL)

  stompClient = Stomp.over(socket);

  try{
    stompClient.connect({}, function (frame) {
    console.log('Connected: ' + frame);
    isConnected = true;

    // Subscribe to the room topic
    stompClient.subscribe('/topic/room/' + roomId, function (message) {
      isConnected = true;
      const msg = JSON.parse(message.body);
      console.log(msg)
    });
  }, function (error) {
    console.error('Connection error:', error);
    alert('Failed to connect. Make sure your backend is running on localhost:8080');
  });
  }catch(error){
    console.log("inside the catch block", error)
  }
}