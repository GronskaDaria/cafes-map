"use client";

import Image from "next/image";
import React, { useState, useContext } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";

function HeaderNavBar() {
  const { setUserLocation } = useContext(UserLocationContext);
  const [city, setCity] = useState("");

  const fetchByCity = async (city) => {
    if (!city) return;

    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
    );
    const data = await res.json();
    if (data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      setUserLocation({ lat, lng });
    }
  };

  return (
    <div className="flex items-center justify-between p-2 shadow-md">
      <div className="flex gap-7 items-center">
        <Image
          src="/logo.png"
          alt="Cafes Map Logo"
          width={150}
          height={100}
          priority
        />
        <h1 className="font-bold text-xl">Restaurants Compas</h1>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-gray-300 rounded-md p-1"
        />
        <button
          onClick={() => fetchByCity(city)}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default HeaderNavBar;
