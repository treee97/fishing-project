import { Server, Socket } from "socket.io";
import { createServer } from "http";

const ioHandler = (req: any, res: any) => {
	if (!res.socket.server.io) {
		// Create a new Socket.IO server if it doesn't exist
		const httpServer = createServer((req, res) => {
			// Your regular Next.js request handling here
			res.end();
		});

		const io: Server = new Server(httpServer, {
			// Cors settings, adjust as needed
			cors: {
				origin: "*",
				methods: ["GET", "POST"],
			},
		});

		// Register the Socket.IO server on the response object
		res.socket.server.io = io;

		// Define event listeners for socket connections
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

		// Call the Next.js request handler
		res.socket.server.next(req, res);
	} else {
		// If the Socket.IO server already exists, just call the Next.js request handler
		res.socket.server.next(req, res);
	}
};

export const config = {
	// API route response should not be parsed as JSON
	api: {
		bodyParser: false,
	},
};

export default ioHandler;
