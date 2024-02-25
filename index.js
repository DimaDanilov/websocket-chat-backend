const webSocket = require("ws");

const PORT = 5000;

const webSocketServer = new webSocket.Server(
  {
    port: PORT,
  },
  () => console.log(`Server started on ${PORT}`)
);
