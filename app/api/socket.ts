import {Server} from "socket.io";

const io = new Server({ /* options */ });


io.on("connection", (socket) => {
  console.log("New connection", socket);
});

io.on("disconnect", (socket) => {
  console.log("Connection closed", socket);
});

io.listen(3001);
console.log("Server listening on port 3001");
