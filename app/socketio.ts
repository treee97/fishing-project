import { createServer } from "http";
import { Server, Socket } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  // Cors settings, adjust as needed
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: Socket) => {
  console.log("A user connected");

  // Handle events from the game
  socket.on("gameEvent", (data: any) => {
    console.log("Received game event:", data);
    // Process the game event and update the database, if needed
    // You can also broadcast the event to all connected clients if required
    socket.broadcast.emit("gameEvent", data);
  });

  // Handle events from the website
  socket.on("websiteEvent", (data: any) => {
    console.log("Received website event:", data);
    // Process the website event and update the database, if needed
    // You can also broadcast the event to all connected clients if required
    socket.broadcast.emit("websiteEvent", data);
  });

  // Handle disconnect event
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

httpServer.listen(3000, () => {
  console.log("Socket.IO server listening on port 3000");
});
