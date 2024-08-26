import React from "react";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const fetchGraphData = async () => {
  const { data } = await axios.get(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return data;
};

const LineGraph: React.FC = () => {
  const { data, isLoading, error } = useQuery("graphData", fetchGraphData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label: "Cases",
        data: Object.values(data.cases),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineGraph;
