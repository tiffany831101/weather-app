import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function RegionSelect({
  regionData,
  handleChange,
  locationName,
}) {
  return (
    <Box sx={{ width: 200, display: "flex", justifyContent: "center" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={locationName}
          label="Region"
          onChange={handleChange}
        >
          {regionData.map((ele, idx) => (
            <MenuItem value={ele} key={idx}>
              {ele}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
