import { full_map } from "@/assets/images";
import Image from "next/image";
const Home = () => {
  return (
    <div className="text-light-text dark:text-dark-text">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta tenetur
      amet, suscipit provident doloribus placeat corrupti quidem voluptate totam
      possimus ad sunt voluptates ullam pariatur fuga impedit hic deleniti
      facilis.
      <ul>
        <li>helooooo</li>
        <li>helooooo</li>
        <li>helooooo</li>
      </ul>
      <Image src={full_map} alt="full map" />
    </div>
  );
};

export default Home;
