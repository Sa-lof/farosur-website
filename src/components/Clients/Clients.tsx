import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clientsData = [
  "Cliente",
  "Cliente",
  "Cliente",
  "Cliente",
  "Cliente",
  "Cliente",
  "Cliente",
  "Cliente",
  "Cliente",
  "Cliente",
];

const Clients: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ marginTop: { xs: 12, sm: 12, md: 16, lg: 20 }, overflow: "hidden", display:"none"}} id="clientes">
      <Slider {...settings}>
        {clientsData.map((client, index) => (
          <Box key={index} sx={{ padding: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 100,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "24px", md: "40px" } }}
              >
                {client}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Clients;
