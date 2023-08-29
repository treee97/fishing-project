import { full_map } from "@/assets/images";
import Image from "next/image";
import Features from "@/components/Home/Features";
import Header from "@/components/Home/Header";
// import Object3d from "@/components/Object3d";
const Home = () => {
  return (
    <div className="text-light-text dark:text-dark-text ">
      <Header />
      <Features />
      {/* <h1>section 2</h1>
        <Image src={full_map} alt="full map" />
        <div>
          <video controls>
            <source src="assets/cascade.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
    </div>
  );
};

export default Home;
