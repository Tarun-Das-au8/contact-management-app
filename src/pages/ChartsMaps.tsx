import React from "react";
import WorldwideCovidData from "../components/ChartsMaps/WorldWideCovidData";
import Map from "../components/ChartsMaps/Map";
import LineGraph from "../components/ChartsMaps/LineGraph";

const ChartsMaps: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="underline text-3xl font-semibold">Dashboard</h1>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">World Wide Covid Data</h2>
        <WorldwideCovidData />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Country-Specific Data</h2>
        <Map />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Global Case Fluctuations</h2>
        <LineGraph />
      </div>
    </div>
  );
};

export default ChartsMaps;
