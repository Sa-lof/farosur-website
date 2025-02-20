import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { People, Inventory, Work, School } from "@mui/icons-material";

const servicesData = [
  { icon: <People fontSize="large" />, title: "Asesoría" },
  { icon: <Inventory fontSize="large" />, title: "Desarrollo de producto" },
  { icon: <Work fontSize="large" />, title: "Muestrarios" },
  { icon: <School fontSize="large" />, title: "Cursos y talleres" },
];

const Servicios = () => {
  return (
    <Box sx={{ textAlign: "center", py: 6 }}>
      <Typography
        variant="h3"
        sx={{ mb: 6, color: "#5A5147" }}
      >
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
