import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#474747" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <WbSunnyIcon
            style={{ color: "#f7af06", fontSize: "30px", textAlign: "center" }}
          />
          <p style={{ fontSize: "20px", marginLeft: "10px" }}>
            Weather Forecast
          </p>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
