import React from "react";
import { Box, Typography, Paper, List, ListItem, Divider } from "@mui/material";
import { motion } from "framer-motion";

const sectionVariants = {
  left: {
    initial: { x: -120, opacity: 0 },
    animate: { x: 0, opacity: 1 }
  },
  right: {
    initial: { x: 120, opacity: 0 },
    animate: { x: 0, opacity: 1 }
  }
};

const sectionTransition = (idx) => ({
  duration: 0.7,
  delay: idx * 0.08 + 0.1,
  type: "spring"
});

const aboutSections = [
  {
    title: "Professional Profile",
    content: (
      <Typography variant="h6" color="text.secondary" lineHeight={1.7}>
        I am an aspiring <strong>Tech Analyst</strong> with 1 year of professional experience at <strong>SRM Institute of Science and Technology</strong>, contributing to projects in big data analytics and IT solutions. I have a solid foundation in software development and data management, coupled with a Bachelor’s degree in Computer Applications. I am passionate about leveraging technology to solve real-world problems and continuously expanding my technical skill set.
      </Typography>
    )
  },
  {
    title: "Core Competencies",
    content: (
      <List sx={{ pl: 2 }}>
        <ListItem>
          Experience in data analysis and processing within large-scale projects.
        </ListItem>
        <ListItem>
          Proficient in frontend development using React, JavaScript, HTML, and CSS.
        </ListItem>
        <ListItem>
          Working knowledge of backend technologies including Node.js and MongoDB.
        </ListItem>
        <ListItem>
          Strong understanding of software development lifecycle and agile methodologies.
        </ListItem>
      </List>
    )
  },
  {
    title: "Professional Values",
    content: (
      <List sx={{ pl: 2 }}>
        <ListItem>
          Committed to writing clean, maintainable, and efficient code.
        </ListItem>
        <ListItem>
          Enthusiastic about collaborative teamwork and knowledge sharing.
        </ListItem>
        <ListItem>
          Dedicated to continuous learning and adapting to emerging technologies.
        </ListItem>
      </List>
    )
  },
  {
    title: "Additional Contributions",
    content: (
      <Typography variant="h6" color="text.secondary" lineHeight={1.7}>
        I have contributed to developing an e-commerce website improving business efficiency, and actively seek opportunities to apply my skills in innovative projects. I am eager to grow as a professional and add value through impactful technology solutions.
      </Typography>
    )
  }
];

const About = () => (
  <Box id="about" py={10} bgcolor="background.default">
    <Box maxWidth={800} mx="auto" px={2}>
      <Typography
        variant="h3"
        fontWeight="bold"
        align="center"
        gutterBottom
        sx={{
          background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        About Me
      </Typography>

      <Paper elevation={6} sx={{ p: 5, borderRadius: 3, mt: 4 }}>
        {aboutSections.map((section, idx) => (
          <React.Fragment key={section.title}>
            <motion.div
              initial={sectionVariants[idx % 2 === 0 ? "left" : "right"].initial}
              whileInView={sectionVariants[idx % 2 === 0 ? "left" : "right"].animate}
              viewport={{ once: true, amount: 0.4 }}
              transition={sectionTransition(idx)}
            >
              <Typography
                variant="h6"
                fontWeight="medium"
                gutterBottom
                sx={{ mt: idx === 0 ? 0 : 1 }}
              >
                {section.title}
              </Typography>
              {section.content}
            </motion.div>
            {idx !== aboutSections.length - 1 && <Divider sx={{ my: 4 }} />}
          </React.Fragment>
        ))}
      </Paper>
    </Box>
  </Box>
);

export default About;
