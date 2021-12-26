const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 3000;

// Set static folder
app.use(express.static("public"));


// Run when client connects
io.on("connection", (socket) => {
  console.log("New client connected");
  
  socket.on('chat message', (msg) => {
   io.emit('chat message', msg);
  });
});

// Start server
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
