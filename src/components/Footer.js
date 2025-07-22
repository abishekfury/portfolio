import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    py={5}
    bgcolor="background.default"
    borderTop={1}
    borderColor="divider"
    textAlign="center"
    mt={8}
  >
    <Typography color="text.secondary">
      © {new Date().getFullYear()} Your Name. All Rights Reserved.
    </Typography>
  </Box>
);

export default Footer;
