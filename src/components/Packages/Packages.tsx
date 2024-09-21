import React, { useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { motion, useInView } from "framer-motion";

const packageData = [
  {
    title: "Desarrollo del Producto",
    includes: [
      "Primera muestra o prototipo",
      "Asesoría en telas y avíos",
      "Muestra final con tela original",
      "Digitalización y graduación",
      "Impresión de moldes",
      "Entrega de archivo del modelo",
    ],
    price: [
      "Trajes de Baño Dama: $6,000 MXN",
      "Trajes de Baño Niña: $5,000 MXN",
      "Trajes de Baño Caballero: $5,000 MXN",
      "Trajes de Baño Niño: $4,000 MXN",
    ],
    observations:
      "Máximo 2 ajustes al prototipo, sin cambiar estructura técnica o de costura. Precios estimados en base a modelos estándar.",
  },
  {
    title: "Maquila de Prendas",
    includes: [
      "Corte",
      "Costura (muestra para autorización)",
      "Limpieza de sobrantes",
      "Control",
      "Empaque en bulto o individual",
    ],
    price: [
      "Mínimo de 50 piezas por modelo y color",
      "Precios según tiempo de producción",
    ],
    observations:
      "No incluye tela, avíos o material de empaque. Hilos disponibles según catálogo.",
  },
  {
    title: "Paquete Completo",
    includes: [
      "Primera muestra o prototipo",
      "Asesoría en telas y avíos",
      "Adquisición de telas y avíos",
      "Muestra final con tela original",
      "Digitalización y graduación",
      "Impresión de moldes",
      "Corte",
      "Costura",
      "Limpieza de sobrantes",
      "Control",
      "Empaque en bulto o individual",
    ],
    price: ["Precios según tipo de tela, complejidad del producto y servicios"],
    observations:
      "Máximo 2 ajustes al prototipo, sin cambiar estructura técnica o de costura.",
  },
  {
    title: "Otros Servicios",
    includes: [
      "Impresión de gráficos y moldes",
      "Asesoría técnica en proyectos textiles",
      "Realización de gráficos sobre modelos existentes",
      "Digitalización y graduación",
      "Todo lo relacionado con la parte textil",
    ],
    price: ["Solicitar cotización"],
    observations: "Servicios adicionales personalizados.",
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

  // Function to scroll to the contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={ref}
      sx={{ marginTop: { xs: 12, sm: 12, md: 16, lg: 20 } }}
      id="paquetes"
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
            xs: "24px",
            sm: "32px",
            md: "48px",
            lg: "56px",
          },
          color: "#3D4899",
        }}
      >
        Selecciona el <span style={{ color: "#8FBFE0" }}>paquete</span> para ti
      </Typography>
      <Box
        component={motion.div}
        variants={lineVariants}
        sx={{ borderBottom: "2px solid #3D4899", mb: { xs: 4, md: 6 } }}
      />
      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          alignItems: "stretch", // Ensure all items have the same height
        }}
      >
        {packageData.map((pkg, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            key={index}
            component={motion.div}
            variants={cardVariants}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                backgroundColor: "#C0E4F3",
                borderRadius: 0,
                boxShadow: "none",
                p: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: { xs: "auto", md: "100%" }, // Variable height for mobile and fixed height for larger screens
                width: "100%",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#3D4899",
                    fontSize: {
                      xs: "20px",
                      sm: "22px",
                      md: "24px",
                      lg: "28px", // Larger font size for large screens
                    },
                    mb: 2,
                  }}
                >
                  {pkg.title}
                </Typography>
                <Box
                  component={motion.div}
                  variants={lineVariants}
                  sx={{ borderBottom: "1px solid #3D4899", mb: 2 }}
                />

                {/* Simplified list using ul */}
                <ul style={{ paddingLeft: "16px", color: "#3D4899", fontSize: "18px" }}>
                  {pkg.includes.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <Typography
                  variant="body2"
                  color={"#3D4899"}
                  sx={{
                    mt: 2,
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "18px", // Larger font size for large screens
                    },
                  }}
                >
                  <strong>Precio:</strong>
                  <ul>
                    {pkg.price.map((price, idx) => (
                      <li key={idx}>{price}</li>
                    ))}
                  </ul>
                </Typography>

                {pkg.observations && (
                  <Typography
                    variant="body2"
                    color={"#3D4899"}
                    sx={{
                      mt: 2,
                      fontStyle: "italic",
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "16px",
                        lg: "18px", // Larger font size for large screens
                      },
                    }}
                  >
                    {pkg.observations}
                  </Typography>
                )}
              </CardContent>

              <Box
                sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
              >
                <Button
                  onClick={scrollToContact}
                  sx={{
                    color: "#fff",
                    backgroundColor: "#3D4899",
                    borderRadius: "50px",
                    textTransform: "none",
                    px: { xs: "12px", md: "24px" },
                    py: { xs: "6px", md: "12px" },
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "14px",
                      lg: "16px", // Larger button text for large screens
                    },
                    ":hover": {
                      backgroundColor: "transparent",
                      border: "1px solid #3D4899",
                      color: "#3D4899",
                    },
                  }}
                >
                  Cotiza ahora
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Packages;
