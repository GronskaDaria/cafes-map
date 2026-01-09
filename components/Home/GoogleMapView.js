"use client";

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useContext } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";

function GoogleMapView() {
  const { userLocation } = useContext(UserLocationContext);

  const fallbackCenter = { lat: 54.352, lng: 18.6466 };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  if (!isLoaded) return null; // albo loader

  return (
    <GoogleMap
      mapContainerStyle={{ height: "70vh", width: "100%" }}
      center={userLocation || fallbackCenter}
      zoom={13}
      options={{ mapId: "663608a986961a2bad72a008" }}
    >
      {userLocation && (
        <MarkerF
          position={userLocation}
          icon={{
            url: "/user-locator.png",
            scaledSize: new google.maps.Size(50, 50),
          }}
        />
      )}
    </GoogleMap>
  );
}

export default GoogleMapView;
