import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { People, School } from "@mui/icons-material";
import SwimsuitIcon from "../../assets/services/Swimsuit Icon.png";
import Cinta from "../../assets/services/Cinta Metrica Icon.png";

const servicesData = [
  { icon: <People sx={{ fontSize: 80, color: "#6F6860" }} />, title: "Asesoría" },
  { 
    icon: <img src={Cinta} alt="Cinta Metrica Icon" style={{ width: 80, height: "auto" }} />, 
    title: "Desarrollo de producto" 
  },
  { 
    icon: <img src={SwimsuitIcon} alt="Swimsuit Icon" style={{ width: 80, height: "auto" }} />, 
    title: "Muestrarios" 
  },
  { icon: <School sx={{ fontSize: 70, color: "#6F6860" }} />, title: "Cursos y talleres" },
];

const Servicios = () => {
  return (
    <Box sx={{ textAlign: "center", py: 6 }} id="servicios">
      <Typography variant="h3" sx={{ mb: 6, color: "#5A5147" }}>
        Servicios
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {servicesData.map((service, index) => (
          <Grid item xs={12} sm={6} mb={3} lg={3} key={index}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {service.icon}
              <Typography variant="body1" sx={{ mt: 1, color: "#5A5147" }}>
                {service.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Servicios;
