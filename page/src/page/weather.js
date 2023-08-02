import { useState, useEffect } from "react";
import RegionSelect from "../components/RegionSelect";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Fab from "@mui/material/Fab";
import WeatherQueries from "../api/queries/weatherQueries";
import SearchIcon from "@mui/icons-material/Search";
import WeatherTable from "../components/Table";

export default function WeatherPage() {
  const regionData = [
    "宜蘭縣",
    "花蓮縣",
    "臺東縣",
    "澎湖縣",
    "金門縣",
    "連江縣",
    "臺北市",
    "新北市",
    "桃園市",
    "臺中市",
    "臺南市",
    "高雄市",
    "基隆市",
    "新竹縣",
    "新竹市",
    "苗栗縣",
    "彰化縣",
    "南投縣",
    "雲林縣",
    "嘉義縣",
    "嘉義市",
    "屏東縣",
  ];

  const [settings, setSettings] = useState({
    enableWx: true,
    enablePoP: true,
    enableCI: true,
    enableMinT: true,
    enableMaxT: true,
  });

  const [showWeather, setShowWeather] = useState(false);

  const [weatherData, setWeatherData] = useState([]);
  const [locationName, setLocationName] = useState("");
  const handleClick = () => {
    setShowWeather(true);
  };

  useEffect(() => {
    setShowWeather(false);
  }, [weatherData]);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  const handleChange = (event) => {
    setLocationName(event.target.value);
  };

  const handleSwitch = (event) => {
    console.log(event.target.checked);
    const name = event.target.name;
    const set = {
      ...settings,
      [name]: event.target.checked,
    };

    setSettings(set);
  };

  return (
    <Box sx={{ flexGrow: 1, py: 5 }}>
      <Grid
        container
        spacing={4}
        justifyContent={"space-between"}
        direction={"row"}
        alignItems={"center"}
      >
        <Grid item xs={4} justifyContent={"center"}>
          <Card sx={{ p: 1 }}>
            <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              gutterBottom
            >
              Select Your Location
            </Typography>
            <CardContent>
              <Grid container justifyContent={"center"}>
                <RegionSelect
                  regionData={regionData}
                  handleChange={handleChange}
                  locationName={locationName}
                />
                <Grid item xs={12} justifyContent={"center"} mt={3}>
                  {/* <FormGroup> */}
                  {/*  Wx, PoP, CI, MinT, MaxT  */}
                  <FormControlLabel
                    control={
                      <Switch
                        label="PoP"
                        name="enablePoP"
                        checked={settings["enablePoP"]}
                        // defaultChecked
                        onChange={handleSwitch}
                        color="primary"
                      />
                    }
                    label="降雨機率"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        label="MaxT"
                        name="enableMaxT"
                        checked={settings["enableMaxT"]}
                        // defaultChecked
                        onChange={handleSwitch}
                        color="error"
                      />
                    }
                    label="最高溫度"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        label="MinT"
                        name="enableMinT"
                        // defaultChecked
                        checked={settings["enableMinT"]}
                        onChange={handleSwitch}
                        color="success"
                      />
                    }
                    label="最低溫度"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        label="CI"
                        name="enableCI"
                        checked={settings["enableCI"]}
                        // defaultChecked
                        onChange={handleSwitch}
                        color="secondary"
                      />
                    }
                    label="舒適度"
                  />
                </Grid>
              </Grid>
              <Grid sx={{ mt: 3 }}>
                <Fab
                  variant="extended"
                  size="small"
                  aria-label="add"
                  onClick={handleClick}
                >
                  <SearchIcon /> Search
                </Fab>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          {weatherData.length !== 0 && (
            <WeatherTable data={weatherData} settings={settings} />
          )}
          {showWeather && (
            <WeatherQueries
              onWeatherDataReceived={handleWeatherData}
              params={{
                settings,
                locationName,
              }}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
