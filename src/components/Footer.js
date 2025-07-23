import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    py={3}
    bgcolor="background.default"
    borderTop={1}
    borderColor="divider"
    textAlign="center"
    mt={8}
  >
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} Abishek. All Rights Reserved.
    </Typography>
  </Box>
);

export default Footer;
