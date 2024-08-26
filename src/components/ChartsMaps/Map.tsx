import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { fetchCountryData } from "../../utils/apis";

// Leaflet marker icon fix for React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map: React.FC = () => {
  const center: [number, number] = [51.505, -0.09]; // Default center of the map
  const zoom: number = 3; // Default zoom level

  // Fetch data with react-query
  const { data, isLoading, error } = useQuery("countryData", fetchCountryData);

  if (isLoading) return <div>Loading map...</div>;
  if (error) return <div>Error fetching map data</div>;

  return (
    <div className="relative w-full h-96 md:h-[500px]">
      <MapContainer
        // @ts-ignore
        center={center as [number, number]}
        zoom={zoom as number}
        style={{ height: "100%", width: "100%" }}
        className="rounded-lg shadow-lg"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Map through country data and place markers */}
        {data.map((country: any) => (
          <Marker
            key={country.countryInfo.iso2}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h2 className="text-xl text-blue-800 font-medium">
                  {country.country}
                </h2>
                <p>
                  <strong>Active:</strong> {country.active}
                </p>
                <p>
                  <strong>Recovered:</strong> {country.recovered}
                </p>
                <p>
                  <strong>Deaths:</strong> {country.deaths}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
