const CTA = () => {
  return (
    <div className="h-[80vh] custom-padding flex items-center justify-center">
      <div className="relative w-full h-[60vh] rounded-lg overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          autoPlay
          muted
          loop
        >
          <source src="/assets/iso_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="text-center">
            <h2 className="text-white text-3xl font-bold mb-4">
              Come And Enjoy The World Of Oaness Now
            </h2>
            <button className="px-6 py-3 bg-red-600 text-white rounded-full">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
