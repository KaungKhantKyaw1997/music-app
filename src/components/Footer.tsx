"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "../utils/axiosInstance";

const Footer: React.FC = () => {
  const [recentlyPlayed, setRecentlyPlayed] = useState<any[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(70);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await axios.get("album.php?i=112024");
        const data = response.data;

        if (data.album) {
          const recentlyPlayedData = data.album.slice(0, 3);

          const recentlyPlayedWithDetails = await Promise.all(
            recentlyPlayedData.map(async (track: any) => {
              const trackResponse = await axios.get(
                `track.php?m=${track.idAlbum}`
              );
              const trackData = trackResponse.data;

              if (trackData.track && trackData.track[0]) {
                const { intDuration, idArtist } = trackData.track[0];

                return {
                  ...track,
                  intDuration,
                  idArtist,
                };
              }

              return null;
            })
          );

          setRecentlyPlayed(recentlyPlayedWithDetails.filter(Boolean));
        }
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    fetchAlbum();
  }, []);

  const defaultTrack = {
    strAlbum: "Album Name",
    strArtist: "Artist Name",
    strAlbumThumb: "/images/default-image.jpg",
    intDuration: 0,
  };

  const track = recentlyPlayed[currentTrackIndex] || defaultTrack;

  const handlePrev = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? recentlyPlayed.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === recentlyPlayed.length - 1 ? 0 : prevIndex + 1
    );
  };

  const formatDuration = (duration: number) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  return (
    <div className="text-white p-6 flex flex-col lg:flex-row justify-between items-center lg:space-x-8 space-y-6 lg:space-y-0">
      <div className="flex items-center space-x-4 w-full lg:w-72">
        <Image
          src={track.strAlbumThumb}
          alt="Album Art"
          width={80}
          height={80}
          className="rounded-full border-[#E85599] border-4"
        />
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold break-words">
            {track.strAlbum}
          </h4>
          <p className="text-sm opacity-70 break-words">{track.strArtist}</p>
        </div>
      </div>

      <div className="flex items-center justify-center lg:justify-end w-full lg:w-auto space-x-0 lg:space-x-4">
        <Image
          src="/icons/shuffle.svg"
          alt="Shuffle"
          width={30}
          height={30}
          className="cursor-pointer"
        />
        <Image
          src="/icons/prev.svg"
          alt="Prev"
          width={30}
          height={30}
          className="cursor-pointer"
          onClick={handlePrev}
        />
        <Image
          src="/icons/play-2.svg"
          alt="Play"
          width={60}
          height={60}
          className="cursor-pointer"
        />
        <Image
          src="/icons/next.svg"
          alt="Next"
          width={30}
          height={30}
          className="cursor-pointer"
          onClick={handleNext}
        />
        <Image
          src="/icons/repeat.svg"
          alt="Repeat"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-8 space-y-4 lg:space-y-0 w-full lg:w-auto justify-center lg:justify-end">
        <div className="flex items-center space-x-2 w-full lg:w-80">
          <p className="text-sm">00:00</p>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-2 bg-transparent appearance-none rounded-full"
            style={{
              background:
                "linear-gradient(to right, #fff 0%, #fff 70%, #ccc 70%, #ccc 100%)",
            }}
          />
          <p className="text-sm">{formatDuration(track.intDuration)}</p>
        </div>

        <div className="flex items-center space-x-4">
          <Image
            src="/icons/playlist-3.svg"
            alt="Playlist"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src="/icons/computer.svg"
            alt="Computer"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src="/icons/volum.svg"
            alt="Volume"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <input
            type="range"
            min="0"
            max="100"
            value="70"
            onChange={handleVolumeChange}
            className="w-24 h-1 bg-transparent appearance-none rounded-full"
            style={{
              background:
                "linear-gradient(to right, #fff 0%, #fff 70%, #ccc 70%, #ccc 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
