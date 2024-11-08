import React from "react";
import Image from "next/image";

const CardList: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-7">
      <div className="w-80 lg:w-1/2 h-64 lg:h-72 p-6 bg-gradient-to-b from-[#EE417C] to-[#9C1A4B] rounded-3xl flex flex-col justify-between items-start text-white font-semibold transition-transform duration-300 hover:scale-105 relative cursor-pointer mx-auto">
        <div>
          <h1 className="text-4xl font-extrabold text-white text-left w-full max-w-lg">
            GET LOST
          </h1>
          <h3 className="text-xl opacity-30 text-white text-left w-full max-w-lg mt-1">
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

      <div className="w-80 lg:w-1/2 h-64 lg:h-72 p-6 bg-gradient-to-b from-[#1CCAF4] to-[#1278A2] rounded-3xl flex flex-col justify-between items-start text-white font-semibold transition-transform duration-300 hover:scale-105 relative cursor-pointer mx-auto">
        <div>
          <h1 className="text-4xl font-extrabold text-white text-left w-full max-w-lg">
            MELLOW
          </h1>
          <h3 className="text-xl opacity-30 text-white text-left w-full max-w-lg mt-1">
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
