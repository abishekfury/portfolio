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
} from "@mui/material";

// Initial form state
const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  message: "",
};

const ContactFormFields = ({ form, handleChange }) => (
  <>
    <TextField
      label="Name"
      name="name"
      required
      fullWidth
      margin="normal"
      value={form.name}
      onChange={handleChange}
    />
    <TextField
      label="Email"
      name="email"
      required
      type="email"
      fullWidth
      margin="normal"
      value={form.email}
      onChange={handleChange}
    />
    <TextField
      label="Message"
      name="message"
      required
      fullWidth
      multiline
      minRows={4}
      margin="normal"
      value={form.message}
      onChange={handleChange}
    />
  </>
);

const SubmitButton = () => (
  <Button
    type="submit"
    variant="contained"
    color="primary"
    fullWidth
    sx={{ mt: 2, fontWeight: "bold" }}
  >
    Send Message
  </Button>
);

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef();

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
    <Box id="contact" py={10} bgcolor="background.paper">
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          fontWeight="bold"
          align="center"
          gutterBottom
          sx={{
            background: "linear-gradient(90deg,#8b5cf6,#3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 5,
          }}
        >
          Get In Touch
        </Typography>
        <Paper elevation={6} sx={{ p: 6, borderRadius: 4 }}>
          <form ref={formRef} onSubmit={handleSubmit}>
            <ContactFormFields form={form} handleChange={handleChange} />
            <SubmitButton />
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
