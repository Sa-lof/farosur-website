import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Import WhatsApp icon
import EmailIcon from "@mui/icons-material/Email"; // Import Email icon

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } },
};

const Contact: React.FC = () => {
  // State variables to hold form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // WhatsApp number (include country code, e.g., "521" for Mexico)
  const whatsappNumber = "525637070027"; // Replace with actual number

  // Function to handle WhatsApp message sending
  const sendWhatsAppMessage = () => {
    // Construct the message
    const whatsappMessage = `Hola, me llamo ${name}. Mi correo es ${email} y mi número es ${phone}. ${message}`;
    // Encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage);
    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    // Open WhatsApp URL
    window.open(whatsappURL, "_blank");
  };

  // Function to handle email sending
  const sendEmail = () => {
    const mailtoLink = `mailto:example@example.com?subject=Contacto%20Faro%20Sur&body=Hola, me llamo ${name}. Mi correo es ${email} y mi número es ${phone}. ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <Box sx={{ marginTop: { xs: 12, sm: 12, md: 16, lg: 20 } }} id="contacto">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
            variant="h2"
            sx={{
              fontWeight: "bold",
              textAlign: "left",
              mb: { xs: 2, md: 4 },
              fontSize: {
                xs: "32px",
                sm: "48px",
                md: "56px",
                lg: "72px",
              },
              color: "#3D4899",
            }}
          >
            Contacta a <span style={{ color: "#8FBFE0" }}>Faro Sur</span>
          </Typography>
          <Typography
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            variant="body1"
            sx={{
              textAlign: "left",
              mb: { xs: 2, md: 4 },
              color: "#3D4899",
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "18px",
                lg: "20px",
              },
            }}
          >
            ¿Tienes una idea genial? Nosotros la hacemos realidad. Te ayudamos a
            construir tu marca desde cero, ofreciéndote el apoyo y la experiencia que necesitas para alcanzar el éxito.
          </Typography>
          <Typography
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            variant="body1"
            sx={{
              textAlign: "left",
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "18px",
                lg: "20px",
              },
              color: "#8FBFE0",
            }}
          >
            Contáctanos y comencemos juntos el camino hacia el éxito.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                color: "#3D4899",
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#3D4899",
                  },
                  "&:hover fieldset": {
                    borderColor: "#3D4899",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#3D4899",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#3D4899",
                  "&.Mui-focused": {
                    color: "#3D4899",
                  },
                },
              }}
            />
            <TextField
              label="Correo"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#3D4899",
                  },
                  "&:hover fieldset": {
                    borderColor: "#3D4899",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#3D4899",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#3D4899",
                  "&.Mui-focused": {
                    color: "#3D4899",
                  },
                },
              }}
            />
            <TextField
              label="Número de teléfono"
              variant="outlined"
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#3D4899",
                  },
                  "&:hover fieldset": {
                    borderColor: "#3D4899",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#3D4899",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#3D4899",
                  "&.Mui-focused": {
                    color: "#3D4899",
                  },
                },
              }}
            />
            <TextField
              label="Mensaje"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#3D4899",
                  },
                  "&:hover fieldset": {
                    borderColor: "#3D4899",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#3D4899",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#3D4899",
                  "&.Mui-focused": {
                    color: "#3D4899",
                  },
                },
              }}
            />
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                onClick={sendEmail}
                sx={{
                  backgroundColor: "#3D4899",
                  color: "#fff",
                  borderRadius: "50px",
                  textTransform: "none",
                  px: 4,
                  py: 1.5,
                  ":hover": {
                    border: "1px solid #3D4899",
                    backgroundColor: "transparent",
                    color: "#3D4899",
                  },
                }}
              >
                <EmailIcon sx={{ mr: 1 }} /> Escríbenos
              </Button>
              <Button
                variant="contained"
                onClick={sendWhatsAppMessage}
                sx={{
                  backgroundColor: "#25D366", // WhatsApp green color
                  color: "#fff",
                  borderRadius: "50px",
                  textTransform: "none",
                  px: 4,
                  py: 1.5,
                  ":hover": {
                    backgroundColor: "#1BD741",
                  },
                }}
              >
                <WhatsAppIcon sx={{ mr: 1 }} /> Enviar por WhatsApp
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
