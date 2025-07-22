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
} from "@mui/material";
import { motion } from "framer-motion";

// Skill data
const expertiseAreas = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", icon: "/assets/react.png", level: 90 },
      { name: "Redux", icon: "/assets/redux.png", level: 50 },
      { name: "Material UI", icon: "/assets/mui.avif", level: 90 },
      { name: "Tailwind CSS", icon: "/assets/tailwind.png", level: 70 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: "/assets/mongodb.jpg", level: 80 },
      { name: "Express.js", icon: "/assets/express.png", level: 80 },
      { name: "REST API", icon: "/assets/api.avif", level: 75 },
    ],
  },
  {
    category: "Database & DevOps",
    skills: [
      { name: "MongoDB", icon: "/assets/mongodb.jpg", level: 85 },
      { name: "Docker", icon: "/assets/docker.webp", level: 60 },
      { name: "CI/CD", icon: "/assets/cicd.png", level: 70 },
    ],
  },
  {
    category: "Collaboration & Process",
    skills: [
      { name: "Git", icon: "/assets/git.webp", level: 60 },
      { name: "Code Reviews", icon: "/assets/code.webp", level: 60 },
      { name: "Technical Leadership", icon: "/assets/leader.webp", level: 80 },
      { name: "Documentation", icon: "/assets/doc.jpg", level: 85 },
    ],
  },
];

// Main Skills Component
const Skills = () => (
  <Box id="skills" py={{ xs: 6, md: 10 }} px={3} bgcolor="background.paper">
    <Typography
      variant="h3"
      fontWeight="bold"
      align="center"
      gutterBottom
      sx={{
        background: "linear-gradient(90deg,#3b82f6,#8b5cf6)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        mb: 6,
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
        <Box mb={8}>
          <Typography
            variant="h5"
            fontWeight={600}
            gutterBottom
            sx={{
              color: "text.primary",
              mb: 4,
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
            spacing={4}
            justifyContent="center"
            alignItems="stretch" // Ensures cards stretch to equal height
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
                  display: "flex", // let Paper fill height
                  justifyContent: "center"
                }}
              >
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.24 }}>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: "background.default",
                      border: "1px solid",
                      borderColor: "divider",
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                      height: "100%",
                      minWidth: 235,
                      maxWidth: 300,
                      minHeight: 230,
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
                            bgcolor: "background.paper",
                          }}
                        />
                      </Tooltip>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        sx={{ ml: 2, color: "text.primary" }}
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
                          backgroundColor: "action.selected",
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

export default Skills;
