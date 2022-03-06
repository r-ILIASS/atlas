import Map from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function MapContainer({ searchResults }) {
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
    ></Map>
  );
}

export default MapContainer;
