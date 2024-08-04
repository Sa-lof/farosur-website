import React from "react";
import { Box, Grid, Typography, Link, Button } from "@mui/material";
import { motion } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } },
};

const lineVariants = {
  hidden: { width: 0 },
  visible: { width: "100%", transition: { duration: 1 } },
};

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: { xs: 4, md: 8 },
        marginTop: { xs: 12, sm: 12, md: 16, lg: 20 },
      }}
    >
      <Typography
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariants}
        variant="h2"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: {
            xs: "32px",
            sm: "48px",
            md: "56px",
            lg: "72px",
          },
        }}
      >
        Lorem ipsum dolor sit amet
      </Typography>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={lineVariants}
      >
        <Box sx={{ borderBottom: "2px solid #fff", my: 2 }} />
      </motion.div>
      <Grid container spacing={4} pt={8}>
        <Grid item xs={12} md={6}>
          <Typography
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            variant="h4"
            sx={{ fontWeight: "bold", fontSize: { xs: "24px", lg: "48px" } }}
          >
            FARO <br />
            SUR
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            gutterBottom
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            variant="body1"
            sx={{ fontSize: { xs: "14px", lg: "18px" }, mb: 4 }}
          >
            ¿Tienes alguna pregunta? <br />
            Contáctanos
            <br />
          </Typography>
          <Grid container spacing={0} mb={8}>
            <Grid item xs={12} md={6}>
              <Link
                href="mailto:contacto@farosur.com"
                sx={{
                  color: "#fff",
                  fontSize: "24px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                contacto@farosur.com
              </Link>
            </Grid>
            <Grid item xs={12} md={6}>
              <Link
                href="tel:+525555555555"
                sx={{
                  color: "#fff",
                  fontSize: "24px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                +52 5555 5555 55 55
              </Link>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fff",
                  color: "#333",
                  width: 160,
                  height: 160,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  textAlign: "left",
                  padding: 2,
                  borderRadius: 0,
                  ":hover": {
                    backgroundColor: "#333333",
                    color: "#fff",
                  },
                }}
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener"
              >
                <InstagramIcon fontSize="large" />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    textTransform: "none",
                    mt: "auto",
                    fontWeight: "bold",
                  }}
                >
                  Instagram
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fff",
                  color: "#333",
                  width: 160,
                  height: 160,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  textAlign: "left",
                  padding: 2,
                  borderRadius: 0,
                  ":hover": {
                    backgroundColor: "#333333",
                    color: "#fff",
                  },
                }}
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener"
              >
                <FacebookIcon fontSize="large" />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    textTransform: "none",
                    mt: "auto",
                    fontWeight: "bold",
                  }}
                >
                  Facebook
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fff",
                  color: "#333",
                  width: 160,
                  height: 160,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  textAlign: "left",
                  padding: 2,
                  borderRadius: 0,
                  ":hover": {
                    backgroundColor: "#333333",
                    color: "#fff",
                  },
                }}
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon fontSize="large" />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    textTransform: "none",
                    mt: "auto",
                    fontWeight: "bold",
                  }}
                >
                  Whatsapp
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            sx={{ fontSize: "12px", textAlign: "left" }}
          >
            © Faro Sur 2024. Diseñado por{" "}
            <Link
              href="https://amoxtli.tech"
              sx={{ color: "#fff", textDecorationColor: "white" }}
            >
              Amoxtli Web Developers
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            sx={{ fontSize: "12px", textAlign: "right" }}
          >
            <Link href="#" sx={{ color: "#fff", textDecorationColor: "white" }}>
              Política de Privacidad
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
