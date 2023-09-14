import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
interface IMessageProps {
	text: string;
	onClose: () => void;
}

const Message = ({ text, onClose }: IMessageProps) => {
	const [showMessage, setShowMessage] = useState(true);

	useEffect(() => {
		// Automatically close the message after a certain time (e.g., 5 seconds)
		const timer = setTimeout(() => {
			setShowMessage(false);
			onClose();
		}, 5000); // Adjust the time as needed (milliseconds)

		return () => {
			clearTimeout(timer);
		};
	}, [onClose]);

	const handleClose = () => {
		setShowMessage(false);
		onClose();
	};

	return showMessage ? (
		<div className="relative flex items-center justify-center bg-green-400 border-2 border-white mb-4 rounded-lg">
			<div className="text-white p-4 rounded-lg text-center relative">
				<button
					onClick={handleClose}
					className="absolute top-2 right-2 bg-none border-none text-white cursor-pointer"
				>
					<AiOutlineClose />
				</button>
				<p className="mt-2">{text}</p>
			</div>
		</div>
	) : null;
};

export default Message;
