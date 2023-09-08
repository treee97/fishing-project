// import Object3d from "../Object3d";
import Image from "next/image";
const Header = () => {
  return (
    <div
      // delete custom padding and add bg-header. testing in Something.tsx move the footer back
      // custom-padding,  mb-20
      //borrar el padding de app y crear una clase especifica como "padding-x o simplemente hacerlo manual para cada seccion."
      className="relative w-full z-10 section flex flex-col md:flex-row items-center justify-center bg-curves"
      id="#header"
    >
      <div className="mt-12 pl-24 ">
        <h1 className="text-6xl md:text-9xl  font-medium tracking-tight">
          Explore The <br /> World Of <br />
          <span className="font-semibold bg-gradient-to-t from-light-accent to-light-primary text-transparent bg-clip-text">
            OANESS
          </span>
        </h1>
        <p className="text-lg">The fishing game no one was expecting...</p>
      </div>
      <div className="flex items-center justify-center ">
        {/* <Object3d /> */}
        <Image
          src="/assets/big-fishing.gif"
          alt="full map"
          width="0"
          height="0"
          // sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Header;
