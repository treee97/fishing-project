import Pusher from "pusher-js";

const ClientPusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
  cluster: "eu",
});

export default ClientPusher;
