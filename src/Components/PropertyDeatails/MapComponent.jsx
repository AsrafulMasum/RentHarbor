import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";


const UpdateMapCenter = ({ latitude, longitude }) => {
  const map = useMap();
  useEffect(() => {
    if (latitude && longitude) {
      map.setView([latitude, longitude], 30, { animate: true });
    }
  }, [latitude, longitude, map]);

  return null;
};

UpdateMapCenter.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

const MapComponent = ({ latitude, longitude }) => {
  const defaultPosition = [40.7128, -74.006];
  const position =
    typeof latitude === "number" && typeof longitude === "number"
      ? [latitude, longitude]
      : defaultPosition;

  return (
    <MapContainer
      center={position}
      zoom={30}
      style={{ height: "90%", width: "100%", borderRadius: "8px" }}
    >
      <UpdateMapCenter latitude={latitude} longitude={longitude} />

      {/* OpenStreetMap Tiles */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker */}
      <Marker position={position}>
        <Popup>
          {latitude && longitude
            ? `Property Location: ${latitude}, ${longitude}`
            : "Default Location (NYC) - Coordinates not provided"}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

MapComponent.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};
