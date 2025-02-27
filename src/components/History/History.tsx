import React, { useRef } from "react";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Antonio from "../../assets/stories/Antonio.jpg";
import Araceli from "../../assets/stories/Araceli.jpg";
import Concepcion from "../../assets/stories/Concepcion.jpg";
import Glendy from "../../assets/stories/Glendy.jpg";
import Leticia from "../../assets/stories/Leticia.jpg";
import Luisa from "../../assets/stories/Luisa.jpg";
import Rita from "../../assets/stories/Rita.jpg";
import Rosalba from "../../assets/stories/Rosalba.jpg";
import Ruth from "../../assets/stories/Ruth.jpg";
import Socorro from "../../assets/stories/Socorro.jpg";
import Teresa from "../../assets/stories/Teresa.jpg";
import Veronica from "../../assets/stories/Veronica.jpg";

const historyData = [
  {
    title: "Antonio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: Antonio,
  },
  {
    title: "Araceli",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: Araceli,
  },
  {
    title: "Concepción",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: Concepcion,
  },
  {
    title: "Glendy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: Glendy,
  },
  {
    title: "Leticia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: Leticia,
  },
  {
    title: "Luisa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: Luisa,
  },
  {
    title: "Rita",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: Rita,
  },
  {
    title: "Rosalba",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: Rosalba,
  },
  {
    title: "Ruth",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: Ruth,
  },
  {
    title: "Socorro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: Socorro,
  },
  {
    title: "Teresa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: Teresa,
  },
  {
    title: "Verónica",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: Veronica,
  },
];

const HistoryCarousel = () => {
  const sliderRef = useRef<Slider>(null);

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ py: 6, backgroundColor: "#F8F7F5", px: { xs: 2, md: 8 } }}>
      <Typography
        variant="h3"
        sx={{ mb: 4, color: "#5A5147", textAlign: "right" }}
      >
        Historias
      </Typography>
      <Box
        sx={{
          position: "relative",
          maxWidth: "100%",
          mx: "auto",
          overflow: "hidden",
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {historyData.map((item, index) => (
            <Box key={index} sx={{ px: 2 }}>
              <Card
                sx={{
                  boxShadow: "none",
                  textAlign: "left",
                  backgroundColor: "#F8F7F5",
                  mx: 1,
                }}
              >
                {/* Square image container */}
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "1 / 1", // Ensures the Box is always square
                    overflow: "hidden",
                    borderRadius: 2,
                    position: "relative", // for older Safari you may need to use the padding-bottom hack
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>

        {/* Botones de navegación */}
        <IconButton
          aria-label="Anterior"
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            backgroundColor: "rgba(255,255,255,0.7)",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
          }}
        >
          <ArrowBackIos />
        </IconButton>

        <IconButton
          aria-label="Siguiente"
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            backgroundColor: "rgba(255,255,255,0.7)",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default HistoryCarousel;
