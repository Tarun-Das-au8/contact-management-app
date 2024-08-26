import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchWorldwideData = async () => {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/all");
  return data;
};

const WorldwideCovidData: React.FC = () => {
  const { data, isLoading, error } = useQuery(
    "worldwideData",
    fetchWorldwideData
  );

  if (isLoading) return <div>Loading data...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div className="p-8 bg-gray-100 h-80">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 shadow rounded-lg text-center">
          <h3 className="text-xl font-semibold">Total Cases</h3>
          <p className="text-2xl mt-2 text-blue-600 font-bold">
            {data.cases.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg text-center">
          <h3 className="text-xl font-semibold">Total Deaths</h3>
          <p className="text-2xl mt-2 text-red-600 font-bold">
            {data.deaths.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg text-center">
          <h3 className="text-xl font-semibold">Recovered</h3>
          <p className="text-2xl mt-2 text-green-600 font-bold">
            {data.recovered.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg text-center">
          <h3 className="text-xl font-semibold">Active Cases</h3>
          <p className="text-2xl mt-2 text-yellow-600 font-bold">
            {data.active.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg text-center">
          <h3 className="text-xl font-semibold">Today's Cases</h3>
          <p className="text-2xl mt-2 text-blue-600 font-bold">
            {data.todayCases.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg text-center">
          <h3 className="text-xl font-semibold">Today's Deaths</h3>
          <p className="text-2xl mt-2 text-red-600 font-bold">
            {data.todayDeaths.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg text-center">
          <h3 className="text-xl font-semibold">Critical Cases</h3>
          <p className="text-2xl mt-2 text-orange-600 font-bold">
            {data.critical.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg text-center">
          <h3 className="text-xl font-semibold">Affected Countries</h3>
          <p className="text-2xl mt-2 text-purple-600 font-bold">
            {data.affectedCountries.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorldwideCovidData;
