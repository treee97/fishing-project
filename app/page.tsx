import Features from "@/components/Home/Features";
import Navbar from "@/components/Nav3";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Home/Header";
import CTA from "@/components/Home/CTA";
import Blog from "@/components/Home/Blog";

const Home = () => {
	return (
		<div className="text-light-text dark:text-dark-text relative">
			{/* <Navbar /> */}
			<Header />
			<Features />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
};

export default Home;
