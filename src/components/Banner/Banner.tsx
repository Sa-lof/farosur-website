import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const ImpactoSocial = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#6B6359",
        color: "white",
        textAlign: "center",
        py: 8,
        px: 4,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      id="impacto"
    >
      <Typography
        component={motion.h2}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        variant="h3"
        sx={{ fontWeight: "bold", mb: 3, fontFamily: "BAKERSVILE" }}
      >
        Impacto social positivo
      </Typography>
      <Typography
        component={motion.p}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        variant="body1"
        sx={{
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: 1.8,
          fontSize: "18px",
        }}
      >
        Nos esforzamos por hacer una diferencia en la sociedad, apoyando causas
        que beneficien y fomenten su desarrollo y bienestar. El 100% de las
        mujeres que conforman FaroSur, vive en el pueblo de Hunucmá; motivo por
        el cual al ofrecer y mantener los empleos aportan a la comunidad
        crecimiento económico y empleos dignos a muchas mujeres originarias de
        este hermoso poblado Yucateco.
      </Typography>
      <Typography
        component={motion.p}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        variant="h5"
        sx={{
          fontStyle: "italic",
          mt: 4,
          fontWeight: "light",
          fontSize: "30px",
          fontFamily: "BAKERSVILE",
        }}
      >
        "El trabajo dignifica a las mujeres, les hace dueñas de su propia vida"
      </Typography>
    </Box>
  );
};

export default ImpactoSocial;
