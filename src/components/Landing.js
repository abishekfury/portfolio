import React from "react";
import { Box, Typography, Avatar, Stack, IconButton, Button } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const social = [
  { href: "https://github.com/yourusername", icon: <GitHubIcon fontSize="large" />, label: "GitHub" },
  { href: "https://linkedin.com/in/yourusername", icon: <LinkedInIcon fontSize="large" />, label: "LinkedIn" },
  { href: "#", icon: <TwitterIcon fontSize="large" />, label: "Twitter" },
];

const Landing = () => (
  <Box
    id="home"
    minHeight="90vh"
    display="flex"
    flexDirection={{ xs: "column", md: "row" }}
    alignItems="center"
    justifyContent="center"
    gap={6}
    px={4}
    py={10}
  >
    {/* Left side: Floating Image Box */}
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: -40, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <Box
          sx={{
            width: 220,
            height: 280,
            borderRadius: "20px",
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            padding: "6px",
            boxShadow: 6,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Avatar
            src="/assets/profile.jpeg"
            alt="Profile"
            variant="square"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "16px",
              border: "3px solid white",
            }}
          />
        </Box>
      </motion.div>
    </motion.div>

    {/* Right side: Text and Buttons */}
    <motion.div
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box textAlign={{ xs: "center", md: "left" }} maxWidth={600}>
        <Typography
          variant="h2"
          fontWeight="bold"
          gutterBottom
          sx={{
            background: "linear-gradient(90deg,#3b82f6,#8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hi, I'm Abishek
        </Typography>

        <Typography variant="h5" color="text.secondary" mb={3}>
          MERN Stack Developer | JavaScript Specialist
        </Typography>

        <Typography variant="h6" color="text.secondary" mb={4}>
          Crafting scalable, performant web solutions with React, Node.js, and MongoDB.
          Passionate about creating intuitive user experiences with clean, efficient code.
        </Typography>

        <Stack direction="row" gap={2} justifyContent={{ xs: "center", md: "flex-start" }} mb={3}>
          {social.map((s) => (
            <IconButton
              key={s.label}
              component="a"
              href={s.href}
              target="_blank"
              rel="noopener"
              sx={{
                bgcolor: "background.paper",
                borderRadius: "50%",
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": {
                  bgcolor: "primary.light",
                  color: "primary.contrastText",
                },
              }}
              aria-label={s.label}
            >
              {s.icon}
            </IconButton>
          ))}
        </Stack>

        <Stack direction="row" spacing={2} justifyContent={{ xs: "center", md: "flex-start" }}>
          <Button
            variant="contained"
            color="primary"
            href="/assets/Abishek Resume.pdf"
            target="_blank"
            sx={{
              borderRadius: "30px",
              px: 4,
              textTransform: "none",
              fontWeight: "bold",
              boxShadow: 3,
              "&:hover": {
                backgroundColor: "#4f46e5",
              },
            }}
          >
            Download Resume
          </Button>

          <Button
            variant="outlined"
            color="primary"
            href="#contact"
            sx={{
              borderRadius: "30px",
              px: 4,
              textTransform: "none",
              fontWeight: "bold",
              boxShadow: 3,
              "&:hover": {
                borderColor: "#4f46e5",
                backgroundColor: "#eef2ff",
              },
            }}
          >
            Hire Me
          </Button>
        </Stack>
      </Box>
    </motion.div>
  </Box>
);

export default Landing;
