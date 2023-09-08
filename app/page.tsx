import Features from "@/components/Home/Features";
import Navbar from "@/components/Nav3";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Home/Header";
import CTA from "@/components/Home/CTA";
import Something from "@/components/Home/Something";

const Home = () => {
  return (
    <div className="text-light-text dark:text-dark-text relative">
      {/* <Navbar /> */}
      <Header />
      <Features />
      <CTA />
      <Something />
      <Footer />
    </div>
  );
};

export default Home;
