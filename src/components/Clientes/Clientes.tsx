import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Slider from "react-slick";
import client1 from "../../assets/clients/Barocco.jpg";
import client2 from "../../assets/clients/Eurosol OKOK.jpg";
import client3 from "../../assets/clients/Liech Antel.jpg";

const clientsData = [
  {
    title: "BAROCCO",
    description:
      "Marca mexicana creada en el año 2006, por Ruth Ramírez, quien cuenta con una maestría en Artes Visuales y experiencia de 20 años en el ramo. La marca está dirigida a mujeres latinas y tiene una cadena de valor que incluye el proceso completo; desde el diseño de los estampados, hasta la distribución y venta en varios estados de la República Mexicana, a través de 'El Palacio de Hierro'.",
    image: client1,
    link: "https://baroccoswimwear.com/",
  },
  {
    title: "LIECH ANTEL",
    description:
      "Creada por la diseñadora mexicana del mismo nombre. Actualmente la marca está presente en los hoteles y concept stores más exclusivos de México y Miami. Ha participado en “fashion shows”, a nivel nacional e internacional como Miami Swim Week, compartiendo pasarela con los mejores diseñadores del mundo y teniendo menciones en medios de prestigio como Forbes, Vogue, ESPN, NYPost, Quien, entre otros.",
    image: client3,
    link: "https://www.liechantel.com/",
  },
  {
    title: "EUROSOL CONCEPT",
    description:
      "Marca mexicana que crea conceptos de playa para mujeres que buscan funcionalidad y control abdominal. Actualmente la marca es diseñada por Gricelda Zarco y se inspira en la flora y fauna tropical, creando estampados posicionados y exclusivos para la marca.",
    image: client2,
  },
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
    centerPadding: "0px", // Ajusta para evitar desplazamiento lateral
  };

  return (
    <Box sx={{ textAlign: "center", py: 6, px: 4 }} id="clientes">
      <Typography
        variant="h3"
        sx={{ mb: 6, color: "#5A5147", textAlign: "left" }}
      >
        Clientes
      </Typography>

      {isMobile ? (
        // 🎠 Modo Carrusel en pantallas pequeñas
        <Box sx={{ maxWidth: 350, mx: "auto" }}>
          <Slider {...sliderSettings}>
            {clientsData.map((client, index) => (
              <Box
                key={index}
                sx={{ display: "flex", justifyContent: "center", px: 2 }}
              >
                <Card
                  sx={{
                    boxShadow: "none",
                    maxWidth: 320,
                    backgroundColor: "#F8F7F5",
                    mx: "auto",
                  }}
                >
                  <Box
                    sx={{
                      width: 300,
                      height: 500,
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
                        objectFit: "cover",
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
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  boxShadow: "none",
                  maxWidth: 400,
                  backgroundColor: "#F8F7F5",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 600,
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
                      objectFit: "cover",
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
                  <Typography variant="body2" sx={{ color: "gray", mt: 1 }}>
                    <a
                      href={client.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {client.link}
                    </a>
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
