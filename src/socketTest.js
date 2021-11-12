const w3Websocket = require("websocket");
const client = new W3CWebSocket("ws://127.0.0.1:8000");

client.onopen = () => {
  console.log("WebSocket Client Connected");
};
client.onmessage = (message) => {
  console.log(message);
};
