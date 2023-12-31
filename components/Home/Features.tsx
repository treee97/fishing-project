"use client";
import Image from "next/image";
import CardFeatures from "./CardFeatures";
const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center section custom-padding mb-20 gap-4 custom-x-padding">
      <div className="flex flex-col">
        <h2 className="text-4xl md:text-7xl ">Features</h2>
        <p>Most of them in progress...</p>
      </div>
      <div className="flex flex-col gap-0 items-center ">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <CardFeatures
            title="QUESTS"
            description="Hundred of quests where you farm, fight and explore an expansive world in constant development"
          />
          <CardFeatures
            title="ACHIEVEMENTS"
            description="To keep track of your progress and have milestones to aim for."
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around gap-4">
          <CardFeatures
            title="ONLINE MULTIPLAYER"
            description="Play with friends or thousands of other player in a unique adventure about fishing!"
          />
          <div>
            <Image
              width={500}
              height={500}
              src="/assets/little_pond.png"
              alt="little pond"
              className="rounded-full "
            />
          </div>

          <CardFeatures
            title="NON-LINEAR ADVENTURE"
            description="Travel to anywhere you want. There's no limitations at where you can go."
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around">
          <CardFeatures
            title="OPEN WORLD"
            description="Explore the vast world of Oannes"
          />
          <CardFeatures
            title="PLAYER ECONOMY BASED"
            description="Players have full control over the economy."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
