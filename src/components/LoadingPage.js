import React from "react";
import { Box, Typography } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";

const message = "Installing dependencies...";
const [dot1, dot2, dot3] = ["", ".", "..", "..."];

const useAnimatedDots = () => {
  const [dots, setDots] = React.useState("");
  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDots(".".repeat((i++ % 4)));
    }, 400);
    return () => clearInterval(interval);
  }, []);
  return dots;
};

const LoadingPage = () => {
  const dots = useAnimatedDots();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Box
        sx={{
          bgcolor: "#212121",
          color: "#39ff14",
          px: 4,
          py: 3,
          borderRadius: 3,
          boxShadow: 6,
          fontFamily: "'Fira Mono', monospace",
          minWidth: "340px",
          maxWidth: "90vw",
          letterSpacing: 1,
          fontSize: "1.32rem",
          position: "relative",
          border: "1.5px solid #39ff14",
        }}
      >
        <Box sx={{ position: "absolute", top: 13, left: 18 }}>
          <TerminalIcon sx={{ fontSize: 26, color: "#ffeb3b" }} />
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "'Fira Mono', monospace",
            color: "#9effff",
            pl: 5,
            mb: 1,
          }}
        >
          $ npx your-portfolio
        </Typography>
        <Typography
          component="span"
          sx={{
            fontFamily: "'Fira Mono', monospace",
            color: "#fff",
            pl: 5,
          }}
        >
          {message}
          <span style={{ color: "#b39ddb", letterSpacing: 4 }}>{dots}</span>
        </Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: "grey.400",
          fontFamily: "'Fira Mono', monospace",
          mt: 1.8,
          fontStyle: "italic",
          letterSpacing: 1,
        }}
      >
        (Launching developer environment)
      </Typography>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;700&display=swap');
        `}
      </style>
    </Box>
  );
};

export default LoadingPage;
