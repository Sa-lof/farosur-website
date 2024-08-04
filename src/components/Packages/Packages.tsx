import React, { useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
} from "@mui/material";
import { motion, useInView } from "framer-motion";

const packageData = [
  {
    title: "Nombre paquete",
    includes: ["Incluye", "Incluye", "Incluye", "Incluye", "Incluye"],
  },
  {
    title: "Nombre paquete",
    includes: ["Incluye", "Incluye", "Incluye", "Incluye", "Incluye"],
  },
];

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const lineVariants = {
  hidden: { width: 0 },
  visible: { width: "100%", transition: { duration: 1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Packages: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={ref}
      sx={{ marginTop: { xs: 12, sm: 12, md: 16, lg: 20 } }}
    >
      <Typography
        component={motion.div}
        variants={titleVariants}
        variant="h2"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: { xs: 4, md: 6 },
          fontSize: {
            xs: "32px",
            sm: "48px",
            md: "56px",
            lg: "72px",
          },
        }}
      >
        Selecciona el <span style={{ color: "#b0b0b0" }}>paquete</span> para ti
      </Typography>
      <Box
        component={motion.div}
        variants={lineVariants}
        sx={{ borderBottom: "2px solid #000", mb: { xs: 4, md: 6 } }}
      />
      <Grid container spacing={4}>
        {packageData.map((pkg, index) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            key={index}
            component={motion.div}
            variants={cardVariants}
          >
            <Card
              sx={{
                backgroundColor: "#d3d3d3",
                borderRadius: 0,
                boxShadow: "none",
                p: 4,
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
                    mb: 2,
                  }}
                >
                  {pkg.title}
                </Typography>
                <Box
                  component={motion.div}
                  variants={lineVariants}
                  sx={{ borderBottom: "1px solid #333", mb: 2 }}
                />
                <Grid container spacing={2}>
                  {pkg.includes.map((item, idx) => (
                    <Grid item xs={6} key={idx}>
                      <List disablePadding>
                        <ListItem disableGutters>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: {
                                xs: "14px",
                                sm: "16px",
                                md: "18px",
                                lg: "20px",
                              },
                            }}
                          >
                            • {item}
                          </Typography>
                        </ListItem>
                      </List>
                    </Grid>
                  ))}
                </Grid>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
                >
                  <Button
                    sx={{
                      color: "#fff",
                      backgroundColor: "#333",
                      borderRadius: "50px",
                      textTransform: "none",
                      px: { xs: "12px", md: "24px" },
                      py: { xs: "6px", md: "12px" },
                      fontSize: {
                        xs: "10px",
                        md: "12px",
                      },
                      ":hover": {
                        backgroundColor: "#555",
                      },
                    }}
                  >
                    Cotiza ahora
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Packages;
