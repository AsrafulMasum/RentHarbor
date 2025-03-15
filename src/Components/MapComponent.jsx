import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const position = [37.7749, -122.4194]; // Latitude and Longitude (San Francisco)

  return (
    <MapContainer center={position} zoom={30} style={{ height: '600px', width: '100%' }}>
      {/* TileLayer for OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker for a property */}
      <Marker position={position}>
        <Popup>
          A sample property location in San Francisco.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

