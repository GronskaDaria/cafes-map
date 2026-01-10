import Image from "next/image";
import React, { useContext } from "react";
import { SelectedBusinessContext } from "@/context/SelectedBusinessContext";

function BusinessItem({ business, showClose = false }) {
  const { setSelectedBusiness } = useContext(SelectedBusinessContext);
  const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const photo_ref = business?.photos
    ? business?.photos[0]?.photo_reference
    : "";

  return (
    <div
      className="w-[215px] h-[260px] flex-shrink-0 p-2
                 rounded-lg shadow-md mb-1
                 bg-white hover:scale-110 transition-all mt-[20px] relative cursor-pointer"
    >
      {showClose && (
        <button
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 
             text-white bg-gray-500 rounded-full w-5 h-5 
             flex items-center justify-center text-xs z-10"
          onClick={(e) => {
            e.stopPropagation(); // nie zamyka markera
            setSelectedBusiness(null);
          }}
        >
          ×
        </button>
      )}

      <Image
        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_ref}&key=${GOOGLE_API_KEY}`}
        alt={business.name}
        width={200}
        height={200}
        className="rounded-lg object-cover h-[140px]"
      />
      <h2 className="text-[15px] font-bold mt-1 line-clamp-1">
        {business.name}
      </h2>
      <h2 className="text-[12px] text-gray-400 line-clamp-2">
        {business.formatted_address}
      </h2>
      <div className="flex gap-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-yellow-500"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-[12px] font-bold">{business.rating}</h2>
      </div>
    </div>
  );
}

export default BusinessItem;
