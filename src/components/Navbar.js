import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const navLinks = ["home", "about", "skills", "projects", "contact"];

const Navbar = ({ mode, setMode }) => (
  <AppBar position="sticky" color="default" elevation={3}>
    <Toolbar sx={{ justifyContent: "space-between" }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          background: "linear-gradient(90deg,#3b82f6,#8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        MERN Portfolio
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        {navLinks.map((link) => (
          <Button
            key={link}
            href={`#${link}`}
            color="primary"
            sx={{ textTransform: "capitalize", fontWeight: 500 }}
          >
            {link}
          </Button>
        ))}
      </Box>
      <Switch
        checked={mode === "dark"}
        onChange={() => setMode(mode === "dark" ? "light" : "dark")}
        color="secondary"
        inputProps={{ "aria-label": "toggle dark mode" }}
      />
    </Toolbar>
  </AppBar>
);

export default Navbar;
