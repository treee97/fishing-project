const Home = () => {
  return (
    <div className="w-96 h-96 relative bg-slate-300">
      <div className="w-96 h-96 left-[-66px] top-[-3px] absolute" />
      <div className="w-96 left-[108px] top-[416px] absolute">
        <span className="text-cyan-950 text-6xl font-normal">
          JOIN THE VAST WORLD OF{" "}
        </span>
        <span className="text-cyan-950 text-6xl font-normal">DAGONIA</span>
      </div>
      <div className="left-[136px] top-[842px] absolute">
        <span className="text-cyan-950 text-5xl font-normal">EMBARK</span>
        <span className="text-cyan-950 text-5xl font-normal slate">
          {" "}
          ON THE ADVENTURE
        </span>
      </div>

      <img
        className="w-96 h-96 left-[602px] top-[262px] absolute"
        src="https://via.placeholder.com/804x501"
      />
    </div>
  );
};

export default Home;
