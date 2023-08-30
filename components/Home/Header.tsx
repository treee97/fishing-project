import Object3d from "../Object3d";

const Header = () => {
  return (
    <div className="relative z-10 section custom-padding flex flex-col md:flex-row items-center justify-around mb-20">
      <div className="mt-12">
        <h1 className="text-6xl md:text-9xl font-medium">
          Welcome to <br />
          <span className="font-semibold bg-gradient-to-t from-light-accent to-light-primary text-transparent bg-clip-text">
            OANESS
          </span>
        </h1>
        <p>The fishing game no one was expecting...</p>
      </div>
      <div className="w-full h-screen bg-blob flex items-center justify-center ">
        {/* <Object3d /> */}
      </div>
    </div>
  );
};

export default Header;
