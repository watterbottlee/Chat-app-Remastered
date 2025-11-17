import { connectToRoom } from './socket.js';

const handleMessage = (message) => {
  console.log('Received message:', message);
};

const test = connectToRoom("upgrade", handleMessage);

console.log(test.isConnected());
//kam toh kr rha h bhai.