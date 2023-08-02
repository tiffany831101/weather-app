const { gql } = require("apollo-server");

const typeDefs = gql`
  type WeatherDay {
    Wx: String
    PoP: Int
    CI: String
    MinT: Int
    MaxT: Int
    startTime: String
    endTime: String
  }

  input WeatherSettings {
    enableWx: Boolean
    enablePoP: Boolean
    enableCI: Boolean
    enableMinT: Boolean
    enableMaxT: Boolean
  }

  type Query {
    weather(settings: WeatherSettings, locationName: String!): [WeatherDay]
  }
`;

module.exports = typeDefs;
