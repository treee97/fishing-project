import React from "react";
import Image from "next/image";

const Something = () => {
  return (
    <div className="section relative flex flex-col items-center custom-x-padding justify-around">
      <h1 className="text-6xl md:text-7xl ">Want To Get In Contact?</h1>
      <p>If you want to see new features or ideas, you can send us an email!</p>
      {/* <div className="absolute top-0 left-0 right-0">
        <Image
          src={"/assets/summervalley_fullmap.png"}
          width={0}
          height={0}
          alt="summervalley_fullmap"
          className="w-full border h-full object-contain"
        />
      </div> */}
    </div>
  );
};

export default Something;
