import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface UserMapProps {
  lat: number;
  lng: number;
}

export const UserMap = ({ lat, lng }: UserMapProps) => {
  const position: LatLngExpression = [lat, lng];

  return (
    <MapContainer
      attributionControl={false}
      center={position}
      zoom={5}
      style={{ height: '160px', width: '100%' }}
      scrollWheelZoom={true}
      dragging={true}
      doubleClickZoom={true}
      zoomControl={false}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, etc."
      />
      <Marker position={position} />
    </MapContainer>
  );
};
