import Pusher from "pusher-js";

const ClientPusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
  cluster: "eu",
});

ClientPusher.connection.bind("connected", () => {
  console.log("Pusher connected");
});

ClientPusher.connection.bind("error", (error: any) => {
  console.error("Pusher error:", error);
});

export default ClientPusher;
