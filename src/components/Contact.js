import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
  Container,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";

// Initial form state
const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  message: "",
};

const ContactFormFields = ({ form, handleChange, isMobile }) => (
  <>
    <TextField
      label="Name"
      name="name"
      required
      fullWidth
      margin="normal"
      size={isMobile ? "small" : "medium"}
      value={form.name}
      onChange={handleChange}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'divider',
          },
          '&:hover fieldset': {
            borderColor: 'primary.main',
          },
        }
      }}
    />
    <TextField
      label="Email"
      name="email"
      required
      type="email"
      fullWidth
      margin="normal"
      size={isMobile ? "small" : "medium"}
      value={form.email}
      onChange={handleChange}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'divider',
          },
          '&:hover fieldset': {
            borderColor: 'primary.main',
          },
        }
      }}
    />
    <TextField
      label="Message"
      name="message"
      required
      fullWidth
      multiline
      minRows={isMobile ? 3 : 4}
      margin="normal"
      size={isMobile ? "small" : "medium"}
      value={form.message}
      onChange={handleChange}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'divider',
          },
          '&:hover fieldset': {
            borderColor: 'primary.main',
          },
        }
      }}
    />
  </>
);

const SubmitButton = ({ isMobile }) => (
  <Button
    type="submit"
    variant="contained"
    color="primary"
    fullWidth
    sx={{ 
      mt: 2, 
      fontWeight: "bold",
      py: isMobile ? 1.2 : 1.5,
      fontSize: isMobile ? '0.875rem' : '1rem'
    }}
  >
    Send Message
  </Button>
);

const Contact = ({ mode }) => {
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef();
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_5szzc7k',
        'template_as00lcw',
        formRef.current,
        { publicKey: 'L0ff9mE9MqfW_aDLM' }
      )
      .then(
        (result) => {
          setIsSent(true);
          setForm(INITIAL_FORM_STATE);
          setTimeout(() => {
            setIsSent(false);
          }, 3000);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Box id="contact" py={{ xs: 6, md: 10 }} bgcolor={mode === 'dark' ? "background.paper" : "background.default"}>
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          fontWeight="bold"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            background: "linear-gradient(90deg,#8b5cf6,#3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: { xs: 3, md: 5 },
          }}
        >
          Get In Touch
        </Typography>
        <Paper 
          elevation={6} 
          sx={{ 
            p: { xs: 3, md: 6 }, 
            borderRadius: 4,
            bgcolor: mode === 'dark' ? 'background.default' : 'background.paper'
          }}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form ref={formRef} onSubmit={handleSubmit}>
            <ContactFormFields form={form} handleChange={handleChange} isMobile={isMobile} />
            <SubmitButton isMobile={isMobile} />
            {isSent && (
              <Alert severity="success" sx={{ mt: 3, textAlign: "center" }}>
                Message sent! I'll get back to you soon.
              </Alert>
            )}
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;