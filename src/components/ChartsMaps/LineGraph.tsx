import React from "react";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
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
import { fetchGraphData } from "../../utils/apis";

// Register the required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph: React.FC = () => {
  // Fetch data with react-query
  const { data, isLoading, error } = useQuery("graphData", fetchGraphData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  // Prepare chart data
  const chartData = {
    labels: Object.keys(data.cases), // x-axis labels (dates or categories)
    datasets: [
      {
        label: "Cases", // dataset label
        data: Object.values(data.cases), // y-axis data
        borderColor: "rgba(75, 192, 192, 1)", // line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // fill color under the line
      },
    ],
  };

  return (
    <div className="w-full h-96 md:h-[500px]">
      <Line data={chartData} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default LineGraph;
