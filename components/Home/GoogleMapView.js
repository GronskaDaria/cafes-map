import { UserLocationContext } from "@/context/UserLocationContext";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React, { useContext, useEffect, useState } from "react";
import Markers from "./Markers";
import { SelectedBusinessContext } from "@/context/SelectedBusinessContext";

function GoogleMapView({ businessList }) {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  //const {selectedBusiness,setSelectedBusiness}=useContext(SelectedBusinessContext)
  const [map, setMap] = useState();

  const containerStyle = {
    width: "100%",
    height: "900px",
  };

  // useEffect(()=>{
  //   if(map&&selectedBusiness)
  //   {
  //    map.panTo(selectedBusiness.geometry.location);

  //   }
  // },[selectedBusiness])
  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        mapIds={["663608a986961a2bad72a008"]}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation}
          //    center={
          //   !selectedBusiness.name?userLocation:selectedBusiness.geometry.location
          // }
          options={{ mapId: "663608a986961a2bad72a008" }}
          zoom={14}
          onLoad={(map) => setMap(map)}
        >
          <MarkerF
            position={userLocation}
            icon={{
              url: "/user-locator.png",
              scaledSize: {
                width: 50,
                height: 50,
              },
            }}
          />
          {businessList.map(
            (item, index) =>
              index <= 7 && <Markers business={item} key={index} />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapView;
