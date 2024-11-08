"use client";
import React, { useState, useEffect } from "react";
import axios from "../utils/axiosInstance";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import RecentlyPlayedCard from "./RecentlyPlayedCard";
import RecommendationCard from "./RecommendationCard";
import Notification from "./Notification";
import Image from "next/image";
import LeftMenu from "../components/LeftMenu";

interface Album {
  idAlbum: string;
  strAlbum: string;
  strArtist: string;
  strAlbumThumb: string;
}

const RightBody: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotiOpen, setIsNotiOpen] = useState(false);
  const [recommendations, setRecommendations] = useState<Album[]>([
    {
      idAlbum: "1",
      strAlbum: "Best of Rock",
      strArtist: "Rock Band 1",
      strAlbumThumb: "/images/default-image.jpg",
    },
    {
      idAlbum: "2",
      strAlbum: "Smooth Jazz",
      strArtist: "Jazz Masters",
      strAlbumThumb: "/images/default-image.jpg",
    },
    {
      idAlbum: "3",
      strAlbum: "Chill Vibes",
      strArtist: "Chill Artists",
      strAlbumThumb: "/images/default-image.jpg",
    },
  ]);
  const [recentlyPlayed, setRecentlyPlayed] = useState<any[]>([
    {
      idAlbum: "1",
      strAlbum: "Album 1",
      strArtist: "Artist 1",
      strAlbumThumb: "/images/default-image.jpg",
      intDuration: 210,
    },
    {
      idAlbum: "2",
      strAlbum: "Album 2",
      strArtist: "Artist 2",
      strAlbumThumb: "/images/default-image.jpg",
      intDuration: 240,
    },
    {
      idAlbum: "3",
      strAlbum: "Album 3",
      strArtist: "Artist 3",
      strAlbumThumb: "/images/default-image.jpg",
      intDuration: 180,
    },
    {
      idAlbum: "4",
      strAlbum: "Album 4",
      strArtist: "Artist 4",
      strAlbumThumb: "/images/default-image.jpg",
      intDuration: 200,
    },
  ]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const notifications = [
    {
      id: "1",
      image: "/images/user-1.jpg",
      title: "Maria likes your playlist",
      description: "XD 4 Life.",
      time: "2m",
    },
    {
      id: "2",
      image: "/images/user-2.jpg",
      title: "Jasmine is currently listening to",
      description: "Best of Blues.",
      time: "1hr",
    },
    {
      id: "3",
      image: "/images/user-3.jpg",
      title: "Marc liked your playlist",
      description: "Booping at Adobe.",
      time: "5hr",
    },
  ];

  const toggleNoti = () => setIsNotiOpen(!isNotiOpen);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await axios.get("album.php?i=112024");
        const data = response.data;

        if (data.album) {
          setRecommendations(data.album.slice(0, 3));
          const recentlyPlayedData = data.album.slice(5, 9);

          const recentlyPlayedWithDetails = await Promise.all(
            recentlyPlayedData.map(async (track: any) => {
              const trackResponse = await axios.get(
                `track.php?m=${track.idAlbum}`
              );
              const trackData = trackResponse.data;

              if (trackData.track && trackData.track[0]) {
                const { intDuration, idArtist } = trackData.track[0];
                return { ...track, intDuration, idArtist };
              }

              return null;
            })
          );

          setRecentlyPlayed(recentlyPlayedWithDetails.filter(Boolean));
        }
      } catch (error) {
        console.error("Error fetching recommendations or tracks:", error);
      }
    };

    fetchAlbum();
  }, []);

  return (
    <div className="flex flex-1">
      <div
        className={`lg:hidden fixed left-0 top-0 w-64 bg-gray-600 text-white h-full p-2 
      ${isMenuOpen ? "z-20 bg-opacity-90" : "hidden"} 
      transition-transform duration-300 ease-in-out`}
        style={{
          transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <LeftMenu />
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      <div className="hidden lg:inline">
        <LeftMenu />
      </div>

      <div className="flex-1 bg-white rounded-br-[3rem] rounded-bl-[3rem] lg:rounded-bl-[0rem]">
        <div className="flex px-8 lg:px-16 justify-between items-center mb-6">
          <div className="flex items-center space-x-4 lg:space-x-0">
            <button onClick={toggleMenu} className="block lg:hidden mt-10">
              <Image src="/icons/menu.svg" alt="Menu" width={24} height={24} />
            </button>
            <SearchBar />
          </div>
          <Notification
            isOpen={isNotiOpen}
            toggleNoti={toggleNoti}
            notifications={notifications}
          />
        </div>

        <div className="px-8 lg:px-16 mb-6 w-full">
          <CardList />
        </div>

        <div className="flex flex-col lg:flex-row px-8 lg:px-16 justify-between mb-6 lg:space-x-24 space-y-8 lg:space-y-0">
          <div className="w-full lg:w-2/5">
            <h3 className="text-xl font-semibold text-gray-800 text-left mb-4">
              Recently Played
            </h3>
            <div className="space-y-4">
              {recentlyPlayed.map((track: any) => (
                <RecentlyPlayedCard
                  key={track.idAlbum}
                  album={track.strAlbum}
                  artist={track.strArtist}
                  imageUrl={track.strAlbumThumb}
                  trackDuration={track.intDuration}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <h3 className="text-xl font-semibold text-gray-800 text-left mb-4">
              Recommended For You
            </h3>
            <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4">
              {recommendations.map((track) => (
                <RecommendationCard
                  key={track.idAlbum}
                  album={track.strAlbum}
                  artist={track.strArtist}
                  imageUrl={track.strAlbumThumb}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBody;
