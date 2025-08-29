import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  LinearProgress,
  Divider,
  Tooltip,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";

// Import all skill icons from src/assets
import reactIcon from "../assets/react.png";
import reduxIcon from "../assets/redux.png";
import muiIcon from "../assets/mui.avif";
import tailwindIcon from "../assets/tailwind.png";
import nodeIcon from "../assets/node.png";
import expressIcon from "../assets/express.png";
import apiIcon from "../assets/api.avif";
import mongoIcon from "../assets/mongodb.jpg";
import dockerIcon from "../assets/docker.webp";
import cicdIcon from "../assets/cicd.png";
import gitIcon from "../assets/git.webp";
import codeIcon from "../assets/code.webp";
import leaderIcon from "../assets/leader.webp";
import docIcon from "../assets/doc.jpg";
import htmlIcon from '../assets/HTML.webp';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/js.jpg';

const expertiseAreas = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", icon: htmlIcon },
      { name: "CSS3", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "React.js", icon: reactIcon },
      { name: "Material UI", icon: muiIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: nodeIcon },
      { name: "Express.js", icon: expressIcon },
      { name: "REST API", icon: apiIcon },
    ],
  },
  {
    category: "Database & Data Management",
    skills: [
      { name: "MongoDB", icon: mongoIcon },
      { name: "Mongoose ODM", icon: dockerIcon }
    ],
  },
  {
    category: "Collaboration & Process",
    skills: [
      { name: "Git", icon: gitIcon },
      { name: "Code Reviews", icon: codeIcon },
      { name: "Technical Leadership", icon: leaderIcon }
    ],
  },
];

const Skills = ({ mode }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box id="skills" py={{ xs: 4, md: 10 }} px={{ xs: 1, md: 3 }} bgcolor={mode === 'dark' ? "background.paper" : "background.default"}>
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
          mb: { xs: 4, md: 6 },
        }}
      >
        Technical Expertise
      </Typography>

      {expertiseAreas.map((area, idx) => (
        <motion.div
          key={area.category}
          initial={{
            x: idx % 2 === 0 ? -120 : 120,
            opacity: 0,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: idx * 0.1, type: "spring" }}
        >
          <Box mb={{ xs: 6, md: 8 }}>
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                color: "text.primary",
                mb: { xs: 3, md: 4 },
                display: "flex",
                alignItems: "center",
                "&::after": {
                  content: '""',
                  flex: 1,
                  ml: 2,
                  height: "1px",
                  backgroundColor: "divider",
                },
              }}
            >
              {area.category}
            </Typography>
            <Grid
              container
              spacing={{ xs: 2, md: 4 }}
              justifyContent="center"
              alignItems="stretch"
            >
              {area.skills.map((skill) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={skill.name}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <motion.div
                    whileHover={{ y: isMobile ? 0 : -4 }}
                    transition={{ duration: 0.24 }}
                  >
                    <Paper
                      elevation={1}
                      sx={{
                        p: { xs: 2, md: 3 },
                        borderRadius: 3,
                        backgroundColor: mode === 'dark' ? "background.default" : "background.paper",
                        border: "1px solid",
                        borderColor: "divider",
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        height: "100%",
                        minWidth: { xs: '100%', sm: 235 },
                        maxWidth: 300,
                        minHeight: { xs: 140, md: 160 },
                        boxSizing: "border-box",
                      }}
                    >
                      <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                        <Tooltip title={skill.name}>
                          <Avatar
                            src={skill.icon}
                            alt={skill.name}
                            sx={{
                              width: 60,
                              height: 60,
                              border: "2px solid",
                              borderColor: "primary.main",
                              bgcolor: mode === 'dark' ? "background.paper" : "background.default",
                              mb: 2
                            }}
                          />
                        </Tooltip>
                        <Typography
                          variant="subtitle1"
                          fontWeight={600}
                          sx={{
                            color: "text.primary",
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            textAlign: 'center'
                          }}
                        >
                          {skill.name}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};

export default Skills;