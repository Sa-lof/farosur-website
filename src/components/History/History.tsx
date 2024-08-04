import React, { useRef } from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { motion, useInView } from "framer-motion";

const historyData = [
  {
    title: "Historia resumida",
    description: "Descripcion",
    imagePosition: "right",
    textAlign: "start",
    imageUrl: "https://via.placeholder.com/400", // Replace with actual image URL
  },
  {
    title: "Empresa socialmente responsable / inclusiva",
    description: "Descripcion",
    imagePosition: "left",
    textAlign: "end",
    imageUrl: "https://via.placeholder.com/400", // Replace with actual image URL
  },
  {
    title: "Historia de equipo",
    description: "Descripcion",
    imagePosition: "right",
    textAlign: "start",
    imageUrl: "https://via.placeholder.com/400", // Replace with actual image URL
  },
];

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
        }}
      >
        Nuestra <span style={{ color: "#b0b0b0" }}>historia</span>
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
                backgroundColor: "#d3d3d3",
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
                    fontWeight: "bold",
                    fontSize: {
                      xs: "20px",
                      sm: "24px",
                      md: "28px",
                      lg: "32px",
                    },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "20px",
                      lg: "24px",
                    },
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundImage: `url(${item.imageUrl})`,
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
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default History;
