import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
	return (
		<div className="section relative flex flex-col items-center custom-x-padding justify-around">
			<h2 className="text-4xl md:text-7xl p-4">Check our latest posts!</h2>
			<div className="flex flex-wrap items-center justify-around gap-6 w-full mb-8">
				<BlogCard blog="1" />
				<BlogCard blog="2" />
				<BlogCard blog="3" />
				<BlogCard blog="4" />
			</div>
		</div>
	);
};

export default Blog;
