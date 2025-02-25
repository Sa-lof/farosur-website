import React, { useRef } from "react";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const historyData = [
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.",
    image: "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
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
      <Typography variant="h3" sx={{ mb: 4, color: "#5A5147", textAlign: "center" }}>
        Historias
      </Typography>
      <Box sx={{ position: "relative", maxWidth: "100%", mx: "auto", overflow: "hidden" }}>
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
                <Box
                  sx={{
                    width: "100%",
                    height: 300,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    borderRadius: 2,
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
