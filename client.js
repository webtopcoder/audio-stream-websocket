const WebSocket = require('ws');
const fs = require('fs');
const ws = new WebSocket('wss://us.quantumaisys.com/ws/vonage?tag=VRwj0tYpoI&socket=abcdefg');
// const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
  console.log('WebSocket connection opened');
  
  const readStream = fs.createReadStream('path/to/audio.raw');

  readStream.on('data', (data) => {
    ws.send(data);
  });

  readStream.on('end', () => {
    console.log('Finished streaming audio');
    ws.close();
  });
});

ws.on('close', () => {
  console.log('WebSocket connection closed');
});