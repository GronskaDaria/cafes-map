import Image from "next/image";
import React from "react";

function HeaderNavBar() {
  return (
    <div
      className="flex items-center
    justify-between p-2 shadow-md"
    >
      <div className="flex gap-7 items-center">
        <Image
          src="/logo.png"
          alt="Cafes Map Logo"
          width={150}
          height={100}
          priority
        />
        {/* <h2> Home</h2>
        <h2> Favorites</h2> */}
        <h1 className="font-bold text-xl"> Restaurants Compas </h1>
      </div>

      <div className="flex gap-4 items-center hidden md:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search cafes..."
          className="border border-gray-300 rounded-md p-1"
        />
      </div>
    </div>
  );
}

export default HeaderNavBar;
