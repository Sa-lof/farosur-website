import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const Origenes: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F8F6F3",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4, // Padding para evitar que el contenido toque los bordes
        py: 4,
      }}
      id="home"
    >
      <Grid
        container
        spacing={6}
        sx={{
          alignItems: "center",
        }}
      >
        {/* Título */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ textAlign: { xs: "center", md: "center" } }}
        >
          <Typography variant="h3" sx={{ color: "#5A5147" }}>
            Orígenes
          </Typography>
        </Grid>

        {/* Texto descriptivo */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: "300",
              color: "#6B625A",
              maxWidth: "1200px",
              lineHeight: "1.6",
              textAlign: "left",
            }}
          >
            Nuestra historia es sobre personas haciendo comunidad. 
            <br />
            En el año 2010 en el corazón de Yucatán, nació un pequeño taller de 10
            personas que comenzó a diseñar, confeccionar y comercializar trajes
            de baño para mujeres. Todo comenzó como un sueño, un sueño que se
            conectó con otros sueños y así surgió Faro Sur, un espacio creativo
            que consolidó el anhelo de un grupo de personas que creyeron que es
            posible vivir de diseñar y confeccionar trajes de baño. En 15 años y
            más de 450 mil prendas confeccionadas; el equipo que formamos
            FaroSur, -en donde el 85% son mujeres-, hemos desarrollado y
            perfeccionado conocimientos sobre diseño, confección, moldería,
            graduación, telas, habilitaciones, fit, maquinaria, estampación,
            importación, fibras, tipos de cuerpos y un sin fin de sutilezas que
            se adquieren a lo largo de los años y de la continuidad de trabajo
            en un tipo de producto. 
            <br />
            <br />
            Nuestra historia es también sobre mujeres
            creando, creyendo en sí mismas, impulsando a sus familias, ayudando
            a crecer la economía local y poniendo en alto el talento mexicano.
            Así, FaroSur se consolidó como un equipo de mujeres y hombres
            disfrutando de crecer junt@s.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Origenes;
