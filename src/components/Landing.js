import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Stack,
  IconButton,
  Button,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import profilePic from "../assets/profile.jpeg";

const social = [
  {
    href: "https://github.com/abishekfury",
    icon: <GitHubIcon fontSize="large" />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/contacttoabishek",
    icon: <LinkedInIcon fontSize="large" />,
    label: "LinkedIn",
  },
  {
    href: "#",
    icon: <TwitterIcon fontSize="large" />,
    label: "Twitter",
  },
];

const Landing = ({ mode }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      id="home"
      minHeight={isMobile ? "85vh" : "90vh"}
      display="flex"
      flexDirection={{ xs: "column-reverse", md: "row" }}
      alignItems="center"
      justifyContent="center"
      gap={isMobile ? 3 : 6}
      px={isMobile ? 2 : 4}
      py={isMobile ? 4 : 10}
      sx={{
        background:
          mode === "dark"
            ? "linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0369a1 100%)"
            : "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%)",
      }}
    >
      {/* Text and Buttons */}
      <motion.div
        initial={{ x: isMobile ? 0 : 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          textAlign={{ xs: "center", md: "left" }}
          maxWidth={600}
          px={isMobile ? 1 : 0}
        >
          <Typography
            variant={isMobile ? "h3" : "h2"}
            fontWeight="bold"
            gutterBottom
            sx={{
              background: "linear-gradient(90deg,#3b82f6,#8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mt: isMobile ? 2 : 0,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Hi, I'm Abishek
          </Typography>

          <Typography
            variant={isMobile ? "h6" : "h5"}
            color={mode === "dark" ? "text.secondary" : "text.primary"}
            mb={3}
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            MERN Stack Developer | JavaScript Specialist
          </Typography>

          <Typography
            variant={isMobile ? "body1" : "h6"}
            color={mode === "dark" ? "text.secondary" : "text.primary"}
            mb={4}
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem" },
              lineHeight: 1.6,
            }}
          >
            Crafting scalable, performant web solutions with React, Node.js,
            and MongoDB. Passionate about creating intuitive user experiences
            with clean, efficient code.
          </Typography>

          <Stack
            direction="row"
            gap={2}
            justifyContent={{ xs: "center", md: "flex-start" }}
            mb={3}
            flexWrap="wrap"
          >
            {social.map((s) => (
              <IconButton
                key={s.label}
                component="a"
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={s.label}
                sx={{
                  bgcolor:
                    mode === "dark" ? "background.paper" : "background.default",
                  borderRadius: "50%",
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": {
                    bgcolor: "primary.light",
                    color: "primary.contrastText",
                  },
                }}
              >
                {s.icon}
              </IconButton>
            ))}
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent={{ xs: "center", md: "flex-start" }}
            alignItems="center"
          >
            <Button
              variant="contained"
              color="primary"
              href="/assets/Abishek Resume.pdf"
              target="_blank"
              sx={{
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontWeight: "bold",
                boxShadow: 3,
                width: isMobile ? "100%" : "auto",
                "&:hover": {
                  backgroundColor: "#4f46e5",
                },
              }}
            >
              Download Resume
            </Button>

            <Button
              variant={mode === "dark" ? "outlined" : "contained"}
              color="primary"
              href="#contact"
              sx={{
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontWeight: "bold",
                boxShadow: 3,
                width: isMobile ? "100%" : "auto",
                backgroundColor: mode === "dark" ? "transparent" : "",
                "&:hover": {
                  borderColor: "#4f46e5",
                  backgroundColor:
                    mode === "dark"
                      ? "rgba(79, 70, 229, 0.1)"
                      : "#4f46e5",
                },
              }}
            >
              Hire Me
            </Button>
          </Stack>
        </Box>
      </motion.div>

      {/* Floating Profile Image */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: -40, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        >
          <Box
            sx={{
              width: isMobile ? 180 : 220,
              height: isMobile ? 220 : 280,
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
              src={profilePic}
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
    </Box>
  );
};

export default Landing;
