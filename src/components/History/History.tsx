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

type ArrowProps = {
  onClick?: () => void;
};

const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      left: -40,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
    }}
  >
    <ArrowBackIos />
  </IconButton>
);

const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: -40,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

const HistoryCarousel = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow onClick={() => sliderRef.current?.slickPrev()} />,
    nextArrow: <CustomNextArrow onClick={() => sliderRef.current?.slickNext()} />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ py: 6, backgroundColor: "#F8F7F5", px: 4 }}>
      <Typography
        variant="h3"
        sx={{ mb: 6, color: "#5A5147", textAlign: "right"}}
      >
        Historias
      </Typography>
      <Box sx={{ position: "relative", maxWidth: "90%", mx: "auto" }}>
        <Slider ref={sliderRef} {...settings}>
          {historyData.map((item, index) => (
            <Card
              key={index}
              sx={{
                boxShadow: "none",
                mx: 2,
                textAlign: "center",
                backgroundColor: "#F8F7F5",
              }}
            >
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
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default HistoryCarousel;
