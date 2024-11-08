import React, { useState } from "react";
import Image from "next/image";

interface RecentlyPlayedCardProps {
  album: string;
  artist: string;
  imageUrl: string;
  trackDuration: number;
}

const formatDuration = (duration: number) => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
};

const RecentlyPlayedCard: React.FC<RecentlyPlayedCardProps> = ({
  album,
  artist,
  imageUrl,
  trackDuration,
}) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="group flex items-center space-x-2 bg-white p-2 rounded-md hover:bg-gray-200 relative cursor-pointer">
      <div className="flex-shrink-0 relative">
        <Image
          src={imageUrl}
          alt={album}
          width={24}
          height={24}
          className="w-10 h-10 object-cover rounded-md group-hover:opacity-50"
        />
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100">
          <Image
            className="w-8 h-8"
            src="/icons/play.svg"
            alt="Play Icon"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="flex-1">
        <h4 className="text-xs font-bold text-gray-800">{album}</h4>
      </div>
      <div className="flex-1">
        <p className="text-xs font-semibold text-gray-600">{artist}</p>
      </div>
      <div className="flex-shrink-0">
        <p className="text-xs font-semibold text-gray-500">
          {formatDuration(trackDuration)}
        </p>
      </div>
      <div className="flex-shrink-0 cursor-pointer" onClick={toggleLike}>
        {liked ? (
          <Image
            className="w-4 h-4"
            src="/icons/fill-heart.svg"
            alt="Heart"
            width={16}
            height={16}
          />
        ) : (
          <Image
            className="w-4 h-4"
            src="/icons/heart.svg"
            alt="Heart"
            width={16}
            height={16}
          />
        )}
      </div>
      <div className="flex-shrink-0">
        <Image
          className="w-4 h-4"
          src="/icons/more.svg"
          alt="More"
          width={16}
          height={16}
        />
      </div>
    </div>
  );
};

export default RecentlyPlayedCard;
