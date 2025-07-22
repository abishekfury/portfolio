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
} from "@mui/material";

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


// Dedicated ProjectCard component for reuse and clarity
const ProjectCard = ({ title, description, image, link }) => (
  <Card
    raised
    sx={{
      borderRadius: 4,
      transition: "0.3s",
      "&:hover": { transform: "translateY(-8px)", boxShadow: 8 },
      minHeight: 400,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <CardMedia
      component="img"
      height="190"
      image={image}
      alt={title}
      sx={{ objectFit: "cover" }}
    />
    <CardContent>
      <Typography variant="h5" component="div" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        variant="contained"
        color="primary"
        href={link}
        target="_blank"
        rel="noopener"
      >
        View Code & Demo
      </Button>
    </CardActions>
  </Card>
);

const Projects = () => (
  <Box id="projects" py={10} bgcolor="background.default">
    <Typography
      variant="h3"
      fontWeight="bold"
      align="center"
      gutterBottom
      sx={{
        background: "linear-gradient(90deg,#3b82f6,#8b5cf6)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        mb: 5,
      }}
    >
      Projects
    </Typography>
    <Grid container spacing={6} justifyContent="center">
      {PROJECTS.map((project) => (
        <Grid item xs={12} sm={6} md={5} key={project.title}>
          <ProjectCard {...project} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects;
