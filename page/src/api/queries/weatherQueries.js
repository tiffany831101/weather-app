import React from "react";
import { useQuery } from "@apollo/client";
import { GET_WEATHER } from "../queries";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CircularIndeterminate = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CircularProgress />
    </Box>
  );
};

const WeatherQueries = ({ params, onWeatherDataReceived }) => {
  const { settings, locationName } = params;
  const { loading, error, data } = useQuery(GET_WEATHER, {
    variables: {
      settings: settings,
      locationName: locationName,
    },
  });

  if (loading) {
    return <CircularIndeterminate />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const weatherData = data.weather;

  onWeatherDataReceived(weatherData);
};

export default WeatherQueries;
