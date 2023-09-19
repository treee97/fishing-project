import { useState } from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { useSession } from "next-auth/react";

type BuyModalProps = {
  item: {
    itemIdentifier: string;
    itemName: string;
    quantity: number;
    price: number;
    habitat: string[];
    rarity: string;
  };
  onClose: () => void; // Callback to close the modal
  onConfirm: (quantity: number) => void; // Callback to confirm the purchase
  disabled: boolean;
};

const BuyModal = ({ item, onClose, onConfirm }: BuyModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const { data: session } = useSession();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newQuantity = Number(e.target.value);

    // Ensure the new quantity is within the valid range
    newQuantity = Math.max(1, Math.min(newQuantity, item.quantity));

    setQuantity(newQuantity);
  };

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(quantity);
    //ONCONFIRM DEBERIA PASAR EN LA LINEA 42 DENTRO DEL TRY EN EL ELSE
    try {
      if (!session) {
        alert("You must be logged in to make a purchase");
        onClose();
      } else {
        // AQUI VA EL handleCONFIRM. SI CONFIRMAMOS ENTONCES SE HACE EL HANDLEBUY.
        await handleBuy();
        // if()
        onClose();
      }
    } catch (error) {
      console.error("Error purchasing item:", error);
    }
  };

  const handleBuy = async () => {
    try {
      // Send a request to the server to buy the item
      if (!session) {
        return new Response("You must be logged in to make a purchase", {
          status: 401,
        });
      } else {
        // Access the user object from the session
        const user = session?.user;

        // Check if the user object contains the user's ID
        const userId = user?.id;

        if (!userId) {
          console.error("User ID is not available in session.");
          return new Response("User ID is not available.", { status: 401 });
        }
        try {
          const response = await fetch("/api/buyitem", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              itemIdentifier: item.itemIdentifier,
              quantity,
              userId: userId,
            }),
          });
          console.log("response", response);
          // if we wanted to parse the item or check if the data is being sent correctly.
          const data = await response.json();
          console.log("Buy response:", data);
        } catch (error) {
          console.error("Error buying item:", error);
        }
      }
    } catch (error) {
      console.error("Error buying item:", error);
    }
  };

  const total = item.price * quantity;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black">
      <form
        onSubmit={handleConfirm}
        className="border bg-dark-background text-dark-text dark:bg-light-background dark:text-light-text flex flex-col items-center p-8 rounded-md"
      >
        <h2>{item.itemName}</h2>
        <p>
          Price: <span className="stroke-text">{item.price}</span>
        </p>
        <div className="flex items-center justify-center">
          <button type="button">
            <BiUpArrow
              className="text-xl"
              onClick={() => {
                if (quantity < item.quantity) setQuantity(quantity + 1);
              }}
            />
          </button>
          <input
            autoFocus
            type="text"
            className="w-16 text-center text-light-text bg-light-background dark:text-dark-text dark:bg-dark-background "
            maxLength={4}
            min="1"
            max={item.quantity}
            value={quantity}
            onChange={handleQuantityChange}
          />
          <button type="button">
            <BiDownArrow
              className="text-xl"
              onClick={() => {
                if (quantity > 1) setQuantity(quantity - 1);
              }}
            />
          </button>
        </div>
        <p>
          Total: <span className="stroke-text">{total}</span>
        </p>
        <div className="flex items-center justify-around gap-2">
          <button
            type="submit"
            className="rounded-md bg-dark-primary text-light-secondary px-2 hover:bg-dark-secondary hover:text-white"
          >
            Confirm
          </button>
          <button
            className="rounded-md bg-dark-primary text-light-secondary px-2 hover:bg-dark-secondary hover:text-white"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuyModal;
