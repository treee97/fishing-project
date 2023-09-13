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
		<div className="fixed left-0 right-0 bottom-0 flex items-center justify-center bg-slate-200">
			<div className="text-white p-4 rounded-lg text-center relative">
				<button
					onClick={handleClose}
					className="absolute top-2 right-2 bg-none border-none text-white cursor-pointer"
				>
					<AiOutlineClose />
				</button>
				<p>{text}</p>
			</div>
		</div>
	) : null;
};

export default Message;
