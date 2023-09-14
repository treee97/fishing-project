import { useState } from "react";
import BuyModal from "./BuyModal";
import Pusher from "pusher-js";
import PusherServer from "pusher";
import PusherClient from "pusher-js";

type MarketItemRowProps = {
	item: {
		itemIdentifier: string;
		itemName: string;
		rarity: string;
		quantity: number;
		habitat: string[];
		price: number;
		// Add other properties as needed
	};
	onBuyItem: any
};

const MarketItemRow = ({ item, onBuyItem }: MarketItemRowProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleBuyClick = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleConfirmPurchase = (quantity: number) => {
		// Implement logic to confirm purchase with the specified quantity
		// Show item sprite and quantity. Or maybe just: Are u sure? Y/N
		console.log(`Confirm purchase of ${quantity} items`);
	};

	const getRarityColor = (rarity: string) => {
		switch (rarity.toLowerCase()) {
			case "common":
				return "#fdfdfd";
			case "uncommon":
				return "#38ff6a";
			case "rare":
				return "#2E81FF";
			case "legendary":
				return "#e202a7";
			case "exotic":
				return "#FFC530";
			default:
				return "#default-color"; // You can set a default color here
		}
	};
	const rarityColor = getRarityColor(item.rarity);
	return (
		<tr className="odd:bg-zinc-100 even:bg-zinc-300 dark:odd:bg-gray-300 dark:even:bg-gray-500 text-center">
			<td className="p-1 overflow-auto">{item.itemName}</td>
			<td style={{ color: rarityColor }} className="stroke-text">
				{item.rarity}
			</td>
			<td>{item.quantity}</td>

			<td className="stroke-text">{item.price}</td>
			<td className="p-2 ">
				<button
					className="rounded-md bg-dark-primary text-light-secondary px-2 hover:bg-dark-secondary hover:text-white"
					onClick={handleBuyClick}
				>
					Buy
				</button>
				{isModalOpen && (
					<BuyModal
						item={item}
						onClose={handleCloseModal}
						onConfirm={handleConfirmPurchase}
						disabled={isModalOpen}
					/>
				)}
			</td>
		</tr>
	);
};

export default MarketItemRow;
