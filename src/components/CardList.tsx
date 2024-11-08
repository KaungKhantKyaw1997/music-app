import React from "react";
import Image from "next/image";

const CardList: React.FC = () => {
  return (
    <div className="flex overflow-x-auto py-8 px-8 lg:px-16 space-x-4 md:space-x-10 lg:space-x-8 whitespace-nowrap">
      <div className="flex-shrink-0 w-3/4 h-64 lg:h-72 p-6 bg-gradient-to-b from-[#EE417C] to-[#9C1A4B] rounded-3xl flex flex-col justify-between items-start text-white font-semibold transition-transform duration-300 hover:scale-105 relative cursor-pointer">
        <div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white text-left w-full max-w-lg tracking-wider">
            GET LOST
          </h1>
          <h3 className="text-xl font-medium opacity-30 text-white text-left w-full max-w-lg mt-1">
            in your music.
          </h3>
        </div>
        <Image
          className="w-8 h-8 rounded-full mt-auto"
          src="/icons/play.svg"
          alt="Play"
          width={16}
          height={16}
        />
        <div
          className="absolute inset-0 rounded-3xl transition-opacity duration-300 opacity-0 hover:opacity-100"
          style={{
            boxShadow: "0px 0px 20px 10px rgba(238, 65, 124, 0.5)",
          }}
        ></div>
      </div>

      <div className="flex-shrink-0 w-3/4 h-64 lg:h-72 p-6 bg-gradient-to-b from-[#1CCAF4] to-[#1278A2] rounded-3xl flex flex-col justify-between items-start text-white font-semibold transition-transform duration-300 hover:scale-105 relative cursor-pointer">
        <div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white text-left w-full max-w-lg tracking-wider">
            MELLOW
          </h1>
          <h3 className="text-xl font-medium opacity-30 text-white text-left w-full max-w-lg mt-1">
            beats.
          </h3>
        </div>
        <Image
          className="w-8 h-8 rounded-full mt-auto"
          src="/icons/play.svg"
          alt="Play"
          width={16}
          height={16}
        />
        <div
          className="absolute inset-0 rounded-3xl transition-opacity duration-300 opacity-0 hover:opacity-100"
          style={{
            boxShadow: "0px 0px 20px 10px rgba(28, 202, 244, 0.5)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default CardList;
