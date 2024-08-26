import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Leaflet marker icon fix for React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const fetchCountryData = async () => {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/countries");
  return data;
};

const Map: React.FC = () => {
  const center: [number, number] = [51.505, -0.09];
  const zoom: number = 3;
  const { data, isLoading, error } = useQuery("countryData", fetchCountryData);

  if (isLoading) return <div>Loading map...</div>;
  if (error) return <div>Error fetching map data</div>;

  return (
    <MapContainer
      // @ts-ignore
      center={center as [number, number]}
      zoom={zoom as number}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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
  );
};

export default Map;
