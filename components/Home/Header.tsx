// import Object3d from "../Object3d";
import Image from "next/image";
const Header = () => {
  return (
    <div
      className="relative z-10 section custom-padding flex flex-col md:flex-row items-center justify-around mb-20"
      id="#header"
    >
      <div className="mt-12">
        <h1 className="text-6xl md:text-9xl font-medium">
          Explore The World Of <br />
          <span className="font-semibold bg-gradient-to-t from-light-accent to-light-primary text-transparent bg-clip-text">
            OANESS
          </span>
        </h1>
        <p className="text-lg">The fishing game no one was expecting...</p>
      </div>
      <div className="bg-blob flex items-center justify-center ">
        {/* <Object3d /> */}
        <Image
          src="/assets/summervalley_fullmap.png"
          alt="full map"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Header;
