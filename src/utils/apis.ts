import axios from "axios";

// to fetch world wide data
export const fetchWorldwideData = async () => {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/all");
  return data;
};

// to fetch all countries specific data
export const fetchCountryData = async () => {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/countries");
  return data;
};

// to fetch graph data for global cases
export const fetchGraphData = async () => {
  const { data } = await axios.get(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return data;
};
