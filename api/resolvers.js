const axios = require("axios");
const { TOKEN } = require("./config");

const resolvers = {
  Query: {
    weather: async (parent, args) => {
      const { locationName, settings } = args;
      const data = await axios.get(
        decodeURIComponent(
          `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${TOKEN}&format=JSON&locationName=${locationName}`
        )
      );

      const weatherData = data.data.records.location[0].weatherElement;

      const filteredData = [{}, {}, {}];
      weatherData.forEach((ele) => {
        let { elementName } = ele;
        ele.time.forEach((t, idx) => {
          filteredData[idx][elementName] = t.parameter.parameterName;
          if (filteredData[idx]["startTime"] === undefined) {
            filteredData[idx]["startTime"] = t.startTime;
            filteredData[idx]["endTime"] = t.endTime;
          }
        });
      });

      return filteredData;
    },
  },
};

module.exports = resolvers;
