"use client";
import { useState, useEffect } from "react";

import axios from "axios";
//next-auth
import { useSession } from "next-auth/react";

//my components
import SellItemDetail from "./SellItemDetail";
import InventoryContainer from "../Inventory/InventoryContainer";
import Message from "../Message";

const SellTable = () => {
	const { data: session } = useSession();
	const [userInventory, setUserInventory] = useState([]);
	const [selectedItem, setSelectedItem] = useState(null);
	const [message, setMessage] = useState<string | null>(null);

	const handleSelectItem = (itemData: any) => {
		// console.log("itemData en el hadnleselect", itemData);
		setSelectedItem(itemData);
	};

	const updateMessage = (newMessage: string | null) => {
		setMessage(newMessage);
	};
	const hideMessage = () => {
		setMessage(null);
	};

	useEffect(() => {
		const fetchInventory = async () => {
			try {
				// Make the API request with the user's ID
				const response = await axios.get(
					`/api/getinventory/${session?.user?.id}`
				);
				setUserInventory(response.data.items);
			} catch (error) {
				console.error("Error fetching inventory data:", error);
			}
		};

		if (session?.user?.id) {
			fetchInventory();
		}
	}, [session]);
	return (
		<>
			<div className="relative flex justify-around items-center custom-padding">
				<InventoryContainer
					items={userInventory}
					onSelectItem={handleSelectItem} // Pass the handleSelectItem function
				/>
				<SellItemDetail
					selectedItem={selectedItem}
					onSellItem={updateMessage}
				/>
				{message && <Message text={message} onClose={hideMessage} />}
			</div>
		</>
	);
	// div con inventoryContainer/>  y  sellContainer flex
};

export default SellTable;
