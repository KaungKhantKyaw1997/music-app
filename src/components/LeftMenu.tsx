"use client";
import React, { useState } from "react";
import Image from "next/image";

const LeftMenu: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [isExplicitFilter, setIsExplicitFilter] = useState(false);
  const [isFriendActivity, setIsFriendActivity] = useState(false);

  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  const browserItems = [
    { icon: "/icons/home.svg", label: "Home" },
    { icon: "/icons/songs.svg", label: "Songs" },
    { icon: "/icons/playlist.svg", label: "Playlists" },
    { icon: "/icons/person.svg", label: "Just for You" },
    { icon: "/icons/chart.svg", label: "Top Charts" },
  ];

  const playlistItems = [
    { icon: "/icons/playlist-2.svg", label: "Workout Mix" },
    { icon: "/icons/playlist-2.svg", label: "Chillin' at Home" },
    { icon: "/icons/playlist-2.svg", label: "Booping at Adobe" },
    { icon: "/icons/playlist-2.svg", label: "XD 4 Life" },
  ];

  const toggleSwitch = (
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setter((prevState) => !prevState);
  };

  return (
    <div
      className="w-72 bg-[#F5F5F5] text-white px-4 py-12 space-y-6 rounded-bl-[0rem] lg:rounded-bl-[3rem] h-full"
      style={{
        minWidth: "15rem",
      }}
    >
      <div className="flex items-center space-x-4 px-2">
        <Image
          className="w-12 h-12 rounded-full"
          src="/images/profile.jpg"
          alt="Profile"
          width={48}
          height={48}
        />
        <div>
          <button
            onClick={toggleProfile}
            className="flex items-center space-x-2 text-sm"
          >
            <p className="text-lg text-black font-medium">Joshua</p>
            <Image
              src="/icons/down-arrow.svg"
              alt="Down Arrow"
              width={16}
              height={16}
            />
          </button>
          {isProfileOpen && (
            <div
              className="bg-white p-2 absolute z-10 rounded-xl shadow-md space-y-4  border border-gray-200"
              style={{
                animation: isProfileOpen ? "slideDown 0.3s ease-out" : "none",
              }}
            >
              <div className="flex justify-between items-center pb-1">
                <p className="text-xs text-[#C9466F] border border-[#C9466F] px-1 rounded-sm">
                  PREMIUM
                </p>
                <p className="text-xs text-gray-400 font-normal">
                  Through 11/2
                </p>
              </div>
              <div className="flex items-center justify-between space-x-8">
                <label className="text-xs text-gray-600 font-normal">
                  Private
                </label>
                <div
                  onClick={() => toggleSwitch(setIsPrivate)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer 
                             ${isPrivate ? "bg-green-500" : "bg-gray-300"}`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform
                               ${
                                 isPrivate ? "translate-x-6" : "translate-x-0"
                               }`}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between space-x-8">
                <label className="text-xs text-gray-600 font-normal">
                  Explicit Filter
                </label>
                <div
                  onClick={() => toggleSwitch(setIsExplicitFilter)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer 
                             ${
                               isExplicitFilter ? "bg-green-500" : "bg-gray-300"
                             }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform 
                               ${
                                 isExplicitFilter
                                   ? "translate-x-6"
                                   : "translate-x-0"
                               }`}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between space-x-8">
                <label className="text-xs text-gray-600 font-normal">
                  Friend Activity
                </label>
                <div
                  onClick={() => toggleSwitch(setIsFriendActivity)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer 
                             ${
                               isFriendActivity ? "bg-green-500" : "bg-gray-300"
                             }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform 
                               ${
                                 isFriendActivity
                                   ? "translate-x-6"
                                   : "translate-x-0"
                               }`}
                  />
                </div>
              </div>
              <p className="text-xs text-gray-600 font-normal">
                Account Settings
              </p>
              <div className="flex justify-end items-center pb-2">
                <p className="text-xs text-gray-400 pe-2 font-normal">
                  Log out
                </p>
                <Image
                  src="/icons/logout.svg"
                  alt="Logout"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          )}
          <p className="text-xs text-gray-400 border border-gray-400 px-1 rounded-sm text-center">
            PREMIUM
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-4 mt-8 px-2">
          <h3 className="text-md font-medium text-gray-400">BROWSE</h3>
        </div>
        <ul className="space-y-2">
          {browserItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-4 p-2">
              <Image src={item.icon} alt={item.label} width={24} height={24} />
              <span className="text-md text-gray-600 font-medium">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="flex justify-between items-center mb-4 mt-8 px-2">
          <h3 className="text-md font-medium text-gray-400">YOUR PLAYLISTS</h3>
          <Image src="/icons/add.svg" alt="Add" width={24} height={24} />
        </div>
        <ul className="space-y-2">
          {playlistItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-4 p-2">
              <Image src={item.icon} alt={item.label} width={24} height={24} />
              <span className="text-md text-gray-600 font-medium">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftMenu;
