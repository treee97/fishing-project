"use client";
import { useEffect, useState } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";
import Link from "next/link";

const CTA = () => {
	const { data: session } = useSession();
	const [providers, setProviders] = useState<null | unknown>(null);

	useEffect(() => {
		(async () => {
			const res = await getProviders();
			setProviders(res);
		})();

		//if the user logs off we return the session provider state to null
		if (!session) {
			setProviders(null);
		}
	}, [session]);
	return (
		<div className="h-[90vh] custom-padding custom-x-padding flex items-center justify-center">
			<div className="relative w-full h-[60vh] rounded-lg overflow-hidden">
				<video
					className="absolute inset-0 w-full h-full object-cover"
					autoPlay
					muted
					loop
				>
					<source src="/assets/iso_video.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10">
					<div className="text-center">
						<h2 className="text-white text-3xl font-bold mb-4">
							Come And Enjoy The World Of{" "}
							<span className="font-semibold bg-gradient-to-t from-light-accent to-light-primary text-transparent bg-clip-text">
								OANESS
							</span>{" "}
							Now
						</h2>

						{!session ? (
							<>
								{providers &&
									Object.values(providers).map((provider) => (
										<button
											type="button"
											key={provider.name}
											onClick={() => {
												signIn(provider.id);
											}}
											className="px-6 py-3 bg-light-primary text-white rounded-3xl"
										>
											Sign Up
										</button>
									))}
							</>
						) : (
							<>
								<Link
									href="#header"
									className="px-6 py-3 bg-light-primary text-white rounded-3xl"
								>
									Go!
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default CTA;
