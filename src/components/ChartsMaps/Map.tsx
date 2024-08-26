import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Leaflet marker icon fix for default icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
  iconUrl: require("leaflet/dist/images/marker-icon.png").default,
  shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
});

const fetchCountryData = async () => {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/countries");
  return data;
};

const Map: React.FC = () => {
  const center = L.latLng(20, 0);
  const { data, isLoading, error } = useQuery("countryData", fetchCountryData);

  if (isLoading) return <div>Loading map...</div>;
  if (error) return <div>Error fetching map data</div>;

  return (
    <MapContainer
      center={center}
      zoom={2}
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
              <h2>{country.country}</h2>
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
