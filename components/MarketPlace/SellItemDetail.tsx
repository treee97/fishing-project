"use client";
// pusher
import Pusher from "pusher-js";
//react hooks
import { useState, useEffect } from "react";
//react-icons
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { useSession } from "next-auth/react";
//my-components

const SellItemDetail = ({ selectedItem, onSellItem }: any) => {
	// console.log("this is selectedItem inside itemdetail =>", selectedItem);
	const { data: session } = useSession();
	const [quantity, setQuantity] = useState<number>(1);
	const [price, setPrice] = useState<number>(selectedItem?.price ?? 1);

	useEffect(() => {
		// Update state when a new item is selected
		setQuantity(selectedItem?.quantity || 1);
		setPrice(selectedItem?.price || 1);
	}, [selectedItem]);

	const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newQuantity = Number(e.target.value);
		const maxQuantity = selectedItem?.quantity || 1;

		// Ensure newQuantity is within the valid range (1 to maxQuantity)
		if (newQuantity >= 1) {
			setQuantity(newQuantity <= maxQuantity ? newQuantity : maxQuantity);
			// si la nueva cantidad sigue siendo mas pequeña que el total entonces np. pero si se sobrepasa entonces automaticamente cambia a la cantidad total en nuestro inventario.
		}
	};

	const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newPrice = Number(e.target.value);
		if (newPrice >= 1) {
			setPrice(newPrice);
		}
	};

	const handleSell = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const sellData = {
				...selectedItem,
				quantity,
				price,
				userId: session?.user?.id,
			};
			// console.log("the sellData in itemDetail.tsx", sellData);

			// Make a POST request to your marketplace API
			const response = await fetch("/api/sellitem", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(sellData),
			});

			// Handle the response as needed (e.g., show a success message, update inventory, etc.)
			if (response.status === 201) {
				onSellItem("The Item has been listed to the marketplace");
			} else if (response.status !== 200) {
				onSellItem("Error at listing the message");
			}
			// Update the user's inventory locally by reducing the quantity
		} catch (error) {
			console.error("Error selling item:", error);
		}
	};

	return (
		<form
			className="relative border-2 p-8 min-w-[350px] flex flex-col text-dark-text dark:text-light-text bg-dark-background dark:bg-light-background rounded-lg"
			onSubmit={handleSell}
		>
			<div className="flex justify-center items-center p-4 text-3xl">
				<p>{selectedItem?.itemName || "Select an item"}</p>
			</div>
			<div className="flex justify-center items-center p-2">
				<p className="text-2xl">Quantity</p>
				<button type="button">
					<BiUpArrow
						className=" text-xl"
						onClick={() => {
							if (quantity < selectedItem.quantity) setQuantity(quantity + 1);
						}}
					/>
				</button>
				<input
					type="text"
					className="w-16 text-center text-light-text dark:text-dark-text p-1 mx-1 rounded-md"
					maxLength={4}
					min="1"
					value={quantity}
					onChange={onQuantityChange}
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
			<div className="flex justify-center items-center p-2 gap-2">
				<p className="text-2xl">Price</p>
				<input
					type="text"
					className="w-20 text-center text-light-text dark:text-dark-text p-1 rounded-md"
					min="1"
					maxLength={6}
					value={price}
					onChange={onPriceChange}
				/>
			</div>
			<div className="flex items-center justify-center p-2 ">
				<button
					type="submit"
					className="border-2 text-light-text dark:text-dark-text bg-light-background dark:bg-dark-background py-2 px-6 rounded-md"
				>
					Sell
				</button>
			</div>
		</form>
	);
};

export default SellItemDetail;
