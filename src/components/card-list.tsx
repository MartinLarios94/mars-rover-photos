import React from "react";
import { Photo } from "../interfaces/mars-rover-interface";

interface CardProps {
  data: Photo;
}

export const CardList: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-2 hover:transform hover:scale-95">
      <img className="w-full h-60 object-cover" src={data.img_src} alt={`${data.id}`} />
      <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{data.camera.full_name}</div>
        <p className="text-gray-700 text-base">
          Landing Date: {data.rover.landing_date} Launch Date:{" "}
          {data.rover.launch_date} Earth Date: {data.earth_date}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #nasa
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{data.rover.name}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{data.rover.status}
        </span>
      </div>
    </div>
  );
};
