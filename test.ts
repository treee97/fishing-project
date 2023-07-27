// const io = require("socket.io-client");
import { io } from "socket.io-client";

const socket = io("http://localhost:3001"); // Replace with the URL of your Socket.IO server

socket.on("connect", () => {
  console.log("Connected to Socket.IO server");

  // Send a test game event
  socket.emit("gameEvent", { type: "fishCaught", fishType: "salmon" });

  // Send a test website event
  socket.emit("websiteEvent", { type: "userLoggedIn", username: "testuser" });
});

socket.on("gameEvent", (data) => {
  console.log("Received game event:", data);
});

socket.on("websiteEvent", (data) => {
  console.log("Received website event:", data);
});

socket.on("disconnect", () => {
  console.log("Disconnected from Socket.IO server");
});
