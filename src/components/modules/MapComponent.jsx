import React, { useState } from "react";

import ReactMapGL, {
  
  Marker,
  
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapComponent = () => {
  return (
    <div className="h-[210px] w-full  rounded-full">
      <ReactMapGL
        mapboxAccessToken="pk.eyJ1IjoiYW1pcnphbmdpIiwiYSI6ImNrdzFzeW9tYTFvenIyb2xja3BsbzZ2angifQ.sew7rhHcggMIiNQwurpN9Q"
        initialViewState={{
          latitude: 35.690827570339636,
          longitude: 51.39253965697321,
          zoom:16,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker
          latitude={35.690827570339636}
          longitude={51.39253965697321}
          draggable
          onDragEnd={(e) =>
            console.log(e)
          }
        />
      </ReactMapGL>
    </div>
  );
};

export default MapComponent;
