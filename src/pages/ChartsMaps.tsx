import React from "react";
import LineGraph from "../components/ChartsMaps/LineGraph";
import Map from "../components/ChartsMaps/Map";

const ChartsMaps: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Global Case Fluctuations</h2>
        <LineGraph />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Country-Specific Data</h2>
        {/* <Map /> */}
      </div>
    </div>
  );
};

export default ChartsMaps;
