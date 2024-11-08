"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const SearchBar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = () => setExpanded((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center">
      {!expanded && (
        <button
          onClick={toggleSearch}
          className="flex items-center justify-center mt-10"
        >
          <Image src="/icons/search.svg" alt="Search" width={24} height={24} />
        </button>
      )}
      {expanded && (
        <input
          ref={inputRef}
          type="text"
          className={`absolute top-0 left-0 p-2 pl-8 rounded-md bg-white text-gray-800 border-2 border-[#AAACAD] 
            transition-all duration-500 ease-in-out
            ${expanded ? "w-64 sm:w-96 opacity-100" : "w-0 opacity-0"}
            focus:outline-none focus:ring-0 h-10`}
          placeholder="Search for songs, artists, albums"
        />
      )}
      <style jsx>{`
        @keyframes expand {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 16rem;
          }
        }
        @media (min-width: 640px) {
          @keyframes expand {
            to {
              width: 24rem;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
