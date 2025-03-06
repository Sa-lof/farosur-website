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
      }}
      id="home"
    >
      <Grid
        container
        spacing={6}
        sx={{
          maxWidth: "1200px", // Define un ancho máximo para evitar que el contenido se expanda demasiado
          alignItems: "center",
        }}
      >
        {/* Título */}
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "center" } }}>
          <Typography
            variant="h3"
            sx={{ color: "#5A5147" }}
          >
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
              maxWidth: "600px",
              lineHeight: "1.6",
              textAlign: "left", 
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante. Aenean ultricies placerat erat, non tincidunt augue lacinia sagittis. Mauris mattis sapien eu elit pulvinar imperdiet. Nullam facilisis massa id congue bibendum. Maecenas faucibus, sem id molestie blandit, tellus velit rutrum lectus, vitae varius metus augue vitae dui. Fusce ipsum nibh, sagittis vel lacinia sed, tempor ut risus. Aenean fringilla, felis sed ultricies pellentesque, risus magna sodales justo, quis imperdiet massa mi sed ex.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Origenes;
