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

const expertiseAreas = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", icon: reactIcon, level: 90 },
      { name: "Redux", icon: reduxIcon, level: 50 },
      { name: "Material UI", icon: muiIcon, level: 90 },
      { name: "Tailwind CSS", icon: tailwindIcon, level: 70 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: nodeIcon, level: 80 },
      { name: "Express.js", icon: expressIcon, level: 80 },
      { name: "REST API", icon: apiIcon, level: 75 },
    ],
  },
  {
    category: "Database & DevOps",
    skills: [
      { name: "MongoDB", icon: mongoIcon, level: 85 },
      { name: "Docker", icon: dockerIcon, level: 60 },
      { name: "CI/CD", icon: cicdIcon, level: 70 },
    ],
  },
  {
    category: "Collaboration & Process",
    skills: [
      { name: "Git", icon: gitIcon, level: 60 },
      { name: "Code Reviews", icon: codeIcon, level: 60 },
      { name: "Technical Leadership", icon: leaderIcon, level: 80 },
      { name: "Documentation", icon: docIcon, level: 85 },
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
                        minHeight: { xs: 180, md: 230 },
                        boxSizing: "border-box",
                      }}
                    >
                      <Box display="flex" alignItems="center" mb={2}>
                        <Tooltip title={skill.name}>
                          <Avatar
                            src={skill.icon}
                            alt={skill.name}
                            sx={{
                              width: 50,
                              height: 50,
                              border: "2px solid",
                              borderColor: "primary.main",
                              bgcolor: mode === 'dark' ? "background.paper" : "background.default",
                            }}
                          />
                        </Tooltip>
                        <Typography
                          variant="subtitle1"
                          fontWeight={600}
                          sx={{ 
                            ml: 2, 
                            color: "text.primary",
                            fontSize: { xs: '0.9rem', md: '1rem' }
                          }}
                        >
                          {skill.name}
                        </Typography>
                      </Box>
                      <Divider sx={{ my: 1 }} />
                      <Box width="100%" mt="auto">
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: mode === 'dark' ? "rgba(255, 255, 255, 0.1)" : "action.selected",
                            "& .MuiLinearProgress-bar": {
                              background:
                                "linear-gradient(to right, #3b82f6, #a78bfa)",
                              borderRadius: 4,
                            },
                          }}
                        />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          align="right"
                          mt={1}
                          fontWeight={500}
                          sx={{
                            fontSize: { xs: '0.75rem', md: '0.875rem' }
                          }}
                        >
                          {skill.level}% proficiency
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