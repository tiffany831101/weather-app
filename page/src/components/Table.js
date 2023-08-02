import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

import LightModeIcon from "@mui/icons-material/LightMode";

const settingName = ["CI", "MaxT", "MinT", "PoP", "Wx"];
const settingNameMap = {
  CI: "體感舒適度",
  MaxT: "最高溫度",
  MinT: "最低溫度",
  PoP: "降雨機率",
  Wx: "天氣狀況",
};

const getTime = (date) => {
  const [day, time] = date.split(" ");
  const [hour, min, sec] = time.split(":");

  if (hour === "00") return 0;
  if (hour === "06" || hour === "12") return 1;
  if (hour === "18") return 2;
};
export default function WeatherTable({ data, settings }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{ background: "#474747" }}>
          <TableRow>
            <TableCell />
            {data.map((ele) => (
              <TableCell align="center" style={{ color: "#fff" }}>
                <span style={{ marginRight: 5 }}>{ele.startTime}</span>
                {getTime(ele.startTime) === 0 ? (
                  <BedtimeIcon style={{ fontSize: 30, color: "#8c6ce3" }} />
                ) : getTime(ele.startTime) === 1 ? (
                  <LightModeIcon style={{ fontSize: 30, color: "#f7af06" }} />
                ) : (
                  <WbTwilightIcon style={{ fontSize: 30, color: "#e5641a" }} />
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {settingName.map((ele, idx) => {
            return (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {settings[`enable${ele}`] && (
                  <TableCell>{settingNameMap[ele]}</TableCell>
                )}
                {settings[`enable${ele}`] &&
                  data.map((e, i) => {
                    return (
                      <TableCell align="center" key={i}>
                        {ele === "PoP"
                          ? `${e[ele]}%`
                          : ele === "MinT" || ele === "MaxT"
                          ? `${e[ele]}°C`
                          : e[ele]}
                      </TableCell>
                    );
                  })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
