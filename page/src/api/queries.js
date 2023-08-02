import { gql } from "@apollo/client";

const GET_WEATHER = gql`
  query WeatherQuery($settings: WeatherSettings, $locationName: String!) {
    weather(settings: $settings, locationName: $locationName) {
      Wx
      PoP
      CI
      MinT
      MaxT
      startTime
      endTime
    }
  }
`;
export { GET_WEATHER };
