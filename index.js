const webSocket = require("ws");

const PORT = 5000;

const webSocketServer = new webSocket.Server(
  {
    port: PORT,
  },
  () => console.log(`Server started on ${PORT}`)
);

webSocketServer.on("connection", function connection(socket) {
  socket.on("message", function (message) {
    message = JSON.parse(message);
    switch (message.event) {
      case "message":
        broadcastMessage(message);
        break;
      case "connection":
        broadcastMessage(message);
        break;
    }
  });
});

function broadcastMessage(message) {
  webSocketServer.clients.forEach((client) => {
    client.send(JSON.stringify(message));
  });
}
