import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";
import Logo from "../../assets/logo/Layer_1.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f2ED",
        color: "#5A5147",
        padding: { xs: 4, md: 8 },
        mt: 8,
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontStyle="italic" sx={{fontFamily: 'Libre Baskerville, serif', fontSize:"23px"}}>
            No existen límites para lo que las mujeres podemos lograr juntas
          </Typography>
          <img
              src={Logo}
              alt="Faro Sur Logo"
              style={{
                height: "30px", // Adjust the height as needed
                width: "auto",
                paddingTop:"5%"
              }}
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" mb={1}>
            Puedes contactarnos al correo
            <Link
              href="mailto:atencionalcliente@grupoeurosol.com"
              sx={{ fontWeight: "bold", ml: 1 }}
            >
              atencionalcliente@grupoeurosol.com{" "}
            </Link>
             o enviar un whatsapp al número
            <Typography component="span" fontWeight="bold">
              {" "}+52 999 304 8582.
            </Typography>
          </Typography>
          <Typography variant="body1">
            Horario de{" "}
            <Typography component="span" fontWeight="bold">
              8:00 am a 17:00 horas.
            </Typography>
          </Typography>

          <Box mt={2} display="flex" gap={2}>
            <Link href="#" color="inherit">
              <Facebook fontSize="large" />
            </Link>
            <Link href="#" color="inherit">
              <Instagram fontSize="large" />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
