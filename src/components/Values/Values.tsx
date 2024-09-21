import React from "react";
import { Grid, Box, Typography, IconButton } from "@mui/material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { motion } from "framer-motion";

const valuesData = [
  {
    title: "Sin complicaciones",
    description:
      "Evita retrasos y problemáticas, deja tu proyecto en nuestras manos y lo hacemos crecer.",
    icon: <AssignmentTurnedInIcon />, // Icon for "Sin complicaciones"
  },
  {
    title: "Atención personalizada",
    description:
      "Te llevamos de la mano en cada parte del proceso y ajustamos a tus necesidades.",
    icon: <PersonIcon />, // Icon for "Atención personalizada"
  },
  {
    title: "Proveemos herramientas",
    description:
      "Te asesoramos y te brindamos todo lo necesario para la manufactura de tu marca.",
    icon: <BuildIcon />, // Icon for "Proveemos herramientas"
  },
  {
    title: "Proveedor con impacto social",
    description:
      "Como empresa socialmente responsable, podemos nutrir tu propuesta de valor.",
    icon: <VolunteerActivismIcon />, // Icon for "Proveedor con impacto social"
  },
];

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const lineVariants = {
  hidden: { width: 0 },
  visible: { width: "100%", transition: { duration: 1, delay: 0.5 } },
};

const Values: React.FC = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Grid
        container
        spacing={2}
        sx={{ backgroundColor: "#C0E4F3", padding: 6 }}
      >
        {valuesData.map((value, index) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
            <Box sx={{ padding: 4 }}>
              <Box
                component={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginRight: 1, color: "#3D4899" }}
                >
                  {value.title}
                </Typography>
                <IconButton size="small" sx={{ color: "#3D4899" }}>
                  {value.icon} {/* Render the icon dynamically */}
                </IconButton>
              </Box>
              <Box
                component={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={lineVariants}
                sx={{
                  borderBottom: "2px solid #3D4899",
                  width: "100%",
                  marginBottom: 1,
                }}
              />
              <Typography
                component={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
                variant="body2"
                sx={{ color: "#3D4899" }}
              >
                {value.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Values;
