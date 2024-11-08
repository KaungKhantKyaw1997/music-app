import React from "react";
import Image from "next/image";

interface RecommendationCardProps {
  album: string;
  artist: string;
  imageUrl: string;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  album,
  artist,
  imageUrl,
}) => {
  return (
    <div className="relative group w-48 h-48 mb-20 lg:mb-0">
      <div className="w-full h-full rounded-xl relative overflow-hidden cursor-pointer">
        <Image
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={album}
          width={192}
          height={192}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Image
            className="w-12 h-12"
            src="/icons/play.svg"
            alt="Play"
            width={24}
            height={24}
          />
        </div>
        <div
          className="absolute inset-0 rounded-lg bg-opacity-0 hover:bg-opacity-100 transition-all duration-300"
          style={{
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
          }}
        ></div>
      </div>
      <div className="mt-2">
        <h4 className="text-lg font-semibold text-gray-800">{album}</h4>
        <p className="text-sm text-gray-600">{artist}</p>
      </div>
    </div>
  );
};

export default RecommendationCard;
