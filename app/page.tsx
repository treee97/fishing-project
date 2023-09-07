import Features from "@/components/Home/Features";
import Header from "@/components/Home/Header";
import CTA from "@/components/Home/CTA";
// import Footer from "@/components/Footer/Footer";
import Something from "@/components/Home/Something";
// import Object3d from "@/components/Object3d";
const Home = () => {
  return (
    <div className="text-light-text dark:text-dark-text relative">
      <Header />
      <Features />
      <CTA />
      <Something />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
