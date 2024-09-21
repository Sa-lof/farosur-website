import React, { useRef } from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";

const historyData = [
  {
    title: "Nuestra Historia en Hunucmá: Confeccionando Calidad y Confianza",
    description:
      "En el corazón de Yucatán, nuestra maquila 100% mexicana se especializa en la confección de lencería y trajes de baño. Con más de 15 años de experiencia, nos destacamos por la calidad y la innovación. Somos un equipo de artesanos comprometidos con la excelencia, constantemente mejorando procesos para ofrecer productos únicos. Más que una fábrica, somos una familia impulsando la economía local y el talento mexicano.",
    imagePosition: "right",
    textAlign: "start",
    images: [
      "https://via.placeholder.com/400",
      "https://via.placeholder.com/400/FF0000/FFFFFF",
      "https://via.placeholder.com/400/0000FF/FFFFFF",
    ], // Array of images
  },
  {
    title: "Comprometidos con el Bienestar, la Igualdad y el Crecimiento Local",
    description: "En nuestra maquila en Hunucmá, Yucatán, estamos comprometidos con los ODS 5, 8 y 10, promoviendo trabajo decente, crecimiento económico e igualdad de oportunidades. Nuestro equipo, mayormente local, mejora su calidad de vida mientras contribuye al desarrollo de la comunidad. Valoramos la cultura y tradiciones de Hunucmá, creando un ambiente de respeto e identidad local.",
    imagePosition: "left",
    textAlign: "end",
    images: [
      "https://via.placeholder.com/400",
      "https://via.placeholder.com/400/FF0000/FFFFFF",
      "https://via.placeholder.com/400/0000FF/FFFFFF",
    ],
  },
  {
    title: "Empoderamiento Femenino y Apoyo al Comercio Local",
    description: "El 85% de nuestro equipo está conformado por mujeres capacitadas, a quienes ofrecemos herramientas y educación constante. A través de programas especializados, apoyamos a amas de casa para que trabajen desde sus hogares con flexibilidad. Además, priorizamos proveedores locales de Yucatán, fortaleciendo el comercio y creando relaciones duraderas en la región.",
    imagePosition: "right",
    textAlign: "start",
    images: [
      "https://via.placeholder.com/400",
      "https://via.placeholder.com/400/FF0000/FFFFFF",
      "https://via.placeholder.com/400/0000FF/FFFFFF",
    ],
  },
];

// Variants for framer-motion animations
const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const History: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Settings for the slider (carousel)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <Box sx={{ marginTop: { xs: 12, sm: 12, md: 16, lg: 20 } }} id="historia">
      <Typography
        component={motion.div}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={titleVariants}
        ref={ref}
        variant="h2"
        sx={{
          fontWeight: "bold",
          mb: 4,
          textAlign: "right",
          fontSize: {
            xs: "32px",
            sm: "48px",
            md: "56px",
            lg: "72px",
          },
          color: "#3D4899",
        }}
      >
        Nuestra <span style={{ color: "#8FBFE0" }}>historia</span>
      </Typography>
      {historyData.map((item, index) => (
        <Grid
          container
          spacing={2}
          sx={{
            mb: 6,
            alignItems: "center",
            flexDirection:
              item.imagePosition === "left" ? "row-reverse" : "row",
          }}
          key={index}
        >
          <Grid item xs={12} md={6}>
            <Card
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              sx={{
                backgroundColor: "#C0E4F3",
                height: 400,
                display: "flex",
                justifyContent: item.textAlign,
                alignItems: "start",
                textAlign: item.textAlign,
                borderRadius: 0,
                boxShadow: "none",
                padding: 4,
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: {
                      xs: "20px",
                      sm: "24px",
                      md: "28px",
                      lg: "32px",
                    },
                    color: "#3D4899",
                    mb: 2,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "22px",
                    },
                    color: "#3D4899",
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Slider {...settings}>
              {item.images.map((imageUrl, imgIndex) => (
                <Card
                  key={imgIndex}
                  sx={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: 465,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: 0,
                    boxShadow: "none",
                  }}
                ></Card>
              ))}
            </Slider>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default History;
