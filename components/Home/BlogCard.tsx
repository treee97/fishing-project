// import Image from "next/image";

type BlogType = {
	blog: string;
};
const BlogCard = ({ blog }: BlogType) => {
	return (
		<div className="w-96 min-h-full relative flex flex-col rounded-xl overflow-hidden cursor-pointer">
			<div className="absolute inset-0 bg-black opacity-50"></div>

			<div className="w-full relative">
				<div className="absolute inset-0 bg-black opacity-40"></div>

				{/* Video */}
				<video className="w-full h-full object-cover" autoPlay muted loop>
					<source src="/assets/cascade.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>

				{/* Dark opacity overlay */}

				{/* Devlog text */}
				<span className="absolute inset-0 flex justify-center items-center text-xl text-white">
					Devlog #{blog}
				</span>
			</div>

			<div className="flex flex-col p-4  relative z-10">
				<p className="text-lg font-semibold">Card title!!</p>
				<p className="text-white">
					this blog should also be dynamic but i dont have the strength to build
					this anymore. End me.
				</p>
			</div>
		</div>
	);
};

export default BlogCard;
