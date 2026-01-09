"use client";
import "./globals.css";
import { Raleway } from "next/font/google";
import HeaderNavBar from "@/components/HeaderNavBar";
import { useEffect, useState } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";
import { SelectedBusinessContext } from "@/context/SelectedBusinessContext";

const metadata = {
  title: "Cafes Map",
  description:
    "A map of cafes around the world built with Next.js and Leaflet.js",
};

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [userLocation, setUserLocation] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState([]);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  return (
    <html lang="en">
      <body className={[raleway.className]}>
        <SelectedBusinessContext.Provider
          value={{ selectedBusiness, setSelectedBusiness }}
        >
          <UserLocationContext.Provider
            value={{ userLocation, setUserLocation }}
          >
            <HeaderNavBar />
            {children}
          </UserLocationContext.Provider>
        </SelectedBusinessContext.Provider>
      </body>
    </html>
  );
}
