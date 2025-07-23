import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";

import gymImg from "../assets/gym.png";
import amazonImg from "../assets/amazon.webp";

const PROJECTS = [
  {
    title: "Gym Project",
    description:
      "A full MERN stack app with live chat and notification features for fitness enthusiasts.",
    image: gymImg,
    link: "https://github.com/yourusername/social-app",
  },
  {
    title: "Clone Amazon Project",
    description:
      "Feature-rich admin panel for managing products, orders, and detailed analytics.",
    image: amazonImg,
    link: "https://github.com/yourusername/ecommerce-dashboard",
  },
];

const ProjectCard = ({ title, description, image, link, isMobile }) => (
  <Card
    component={motion.div}
    whileHover={{ y: isMobile ? 0 : -8 }}
    transition={{ duration: 0.3 }}
    raised
    sx={{
      borderRadius: 4,
      transition: "0.3s",
      boxShadow: 4,
      minHeight: isMobile ? 350 : 400,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
    }}
  >
    <CardMedia
      component="img"
      height={isMobile ? 160 : 190}
      image={image}
      alt={title}
      sx={{ objectFit: "cover" }}
    />
    <CardContent>
      <Typography 
        variant="h5" 
        component="div" 
        gutterBottom
        sx={{
          fontSize: { xs: '1.25rem', md: '1.5rem' }
        }}
      >
        {title}
      </Typography>
      <Typography 
        variant="body2" 
        color="text.secondary"
        sx={{
          fontSize: { xs: '0.875rem', md: '1rem' }
        }}
      >
        {description}
      </Typography>
    </CardContent>
    <CardActions sx={{ p: 2 }}>
      <Button
        variant="contained"
        color="primary"
        href={link}
        target="_blank"
        rel="noopener"
        fullWidth
        sx={{ 
          borderRadius: "30px",
          py: 1,
          fontSize: { xs: '0.875rem', md: '1rem' }
        }}
      >
        View Code & Demo
      </Button>
    </CardActions>
  </Card>
);

const Projects = ({ mode }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  
  return (
    <Box id="projects" py={{ xs: 6, md: 10 }} bgcolor={mode === 'dark' ? "background.default" : "background.paper"}>
      <Typography
        variant="h3"
        fontWeight="bold"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          background: "linear-gradient(90deg,#3b82f6,#8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: { xs: 4, md: 5 },
        }}
      >
        Projects
      </Typography>
      <Grid 
        container 
        spacing={{ xs: 4, md: 6 }} 
        justifyContent="center"
        px={isMobile ? 2 : 0}
      >
        {PROJECTS.map((project) => (
          <Grid
            item
            xs={12}
            sm={10}
            md={5}
            key={project.title}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ProjectCard {...project} isMobile={isMobile} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;