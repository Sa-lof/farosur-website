import React from "react";
import { Box, Typography, Grid, Card, CardContent, useMediaQuery, useTheme } from "@mui/material";
import Slider from "react-slick";

const clientsData = [
  {
    title: "Cliente 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
  },
  {
    title: "Cliente 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
  },
  {
    title: "Cliente 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
  },
  {
    title: "Cliente 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
  },
  {
    title: "Cliente 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
  },
  {
    title: "Cliente 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
  }
];

const Clients: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Configuración del carrusel
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true, // Centra los elementos
    centerPadding: "0px" // Ajusta para evitar desplazamiento lateral
  };

  return (
    <Box sx={{ textAlign: "center", py: 6, px: 4 }}>
      <Typography variant="h3" sx={{ mb: 6, color: "#5A5147", textAlign: "left" }}>
        Clientes
      </Typography>

      {isMobile ? (
        // 🎠 Modo Carrusel en pantallas pequeñas
        <Box sx={{ maxWidth: 350, mx: "auto" }}>
          <Slider {...sliderSettings}>
            {clientsData.map((client, index) => (
              <Box key={index} sx={{ display: "flex", justifyContent: "center", px: 2 }}>
                <Card sx={{ boxShadow: "none", maxWidth: 320, backgroundColor: "#F8F7F5", mx: "auto" }}>
                  <Box
                    sx={{
                      width: 300,
                      height: 300,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      mx: "auto",
                      borderRadius: 2,
                    }}
                  >
                    <img
                      src={client.image}
                      alt={client.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </Box>
                  <CardContent sx={{ textAlign: "left", paddingX: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {client.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      {client.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      ) : (
        <Grid container spacing={6} justifyContent="center">
          {clientsData.map((client, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <Card sx={{ boxShadow: "none", maxWidth: 320, backgroundColor: "#F8F7F5" }}>
                <Box
                  sx={{
                    width: 300,
                    height: 300,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    mx: "auto",
                    borderRadius: 2,
                  }}
                >
                  <img
                    src={client.image}
                    alt={client.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </Box>
                <CardContent sx={{ textAlign: "left", paddingX: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {client.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    {client.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Clients;
