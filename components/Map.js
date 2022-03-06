import { useState } from "react";
import Map, { Marker } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import "mapbox-gl/dist/mapbox-gl.css";

function MapContainer({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  // calculating the center of the map
  const coordinates = searchResults.map((item) => ({
    latitude: item.lat,
    longitude: item.long,
  }));
  const center = getCenter(coordinates);
  // initialViewState options
  const initialViewOptions = { ...center, zoom: 11 };

  return (
    <Map
      initialViewState={initialViewOptions}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/r-iliass/cl0fc0njo003o14mwxsu25gyo"
      mapboxAccessToken={process.env.mapBox_public_accessToken}
    >
      {searchResults.map((item) => (
        <div key={item.long}>
          <Marker
            className="relative"
            longitude={item.long}
            latitude={item.lat}
          >
            <p
              aria-label="push-pin"
              role="img"
              onClick={() => setSelectedLocation(item)}
              className="text-2xl cursor-pointer animate-bounce"
            >
              📍
            </p>
            {selectedLocation.long === item.long && (
              <div
                onClick={() => setSelectedLocation({})}
                className="absolute cursor-pointer text-base -top-14 -left-16 bg-white py-2 px-6 rounded-xl whitespace-nowrap "
              >
                {item.title}
              </div>
            )}
          </Marker>
        </div>
      ))}
    </Map>
  );
}

export default MapContainer;
