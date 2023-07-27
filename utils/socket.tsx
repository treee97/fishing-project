// utils/socket.ts
import { io, Socket } from "socket.io-client";

// REEMPLAZAR ESTO CUANDO EL PROGRAMA SE PUBLIQUE

const socket: Socket = io("http://localhost:3001"); // Replace with your Socket.IO server URL

export default socket;