import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } },
};

const Contact: React.FC = () => {
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
            }}
          >
            Contacta a <span style={{ color: "#b0b0b0" }}>Faro Sur</span>
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
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "18px",
                lg: "20px",
              },
            }}
          >
            Praesent sed pretium magna. Suspendisse arcu odio, porttitor eu
            risus ac, interdum porttitor diam.
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
            }}
          >
            (frase corta)
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
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#333333",
                  },
                  "&:hover fieldset": {
                    borderColor: "#333333",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#333333",
                  },
                },
                "& .MuiInputLabel-root": {
                  "&.Mui-focused": {
                    color: "#333333",
                  },
                },
              }}
            />
            <TextField
              label="Correo"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#333333",
                  },
                  "&:hover fieldset": {
                    borderColor: "#333333",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#333333",
                  },
                },
                "& .MuiInputLabel-root": {
                  "&.Mui-focused": {
                    color: "#333333",
                  },
                },
              }}
            />
            <TextField
              label="Número de teléfono"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#333333",
                  },
                  "&:hover fieldset": {
                    borderColor: "#333333",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#333333",
                  },
                },
                "& .MuiInputLabel-root": {
                  "&.Mui-focused": {
                    color: "#333333",
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
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#333333",
                  },
                  "&:hover fieldset": {
                    borderColor: "#333333",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#333333",
                  },
                },
                "& .MuiInputLabel-root": {
                  "&.Mui-focused": {
                    color: "#333333",
                  },
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#333333",
                color: "#fff",
                borderRadius: "50px",
                textTransform: "none",
                px: 4,
                py: 1.5,
                ":hover": {
                  backgroundColor: "#555555",
                },
              }}
            >
              Escríbenos
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
