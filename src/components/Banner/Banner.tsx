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
        height: "100vh", // ✅ Ocupar toda la pantalla
        display: "flex", // ✅ Para centrar contenido verticalmente
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        component={motion.h2}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        variant="h3"
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        Impacto social positivo
      </Typography>
      <Typography
        component={motion.p}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        variant="body1"
        sx={{ maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus molestie velit, sed sollicitudin ante.
        Aenean ultricies placerat erat, non tincidunt augue lacinia sagittis. Mauris mattis sapien eu elit pulvinar imperdiet.
        Nullam facilisis massa id congue bibendum. Maecenas faucibus, sem id molestie blandit, tellus velit rutrum lectus,
        vitae varius metus augue vitae dui. Fusce ipsum nibh, sagittis vel lacinia sed, tempor ut risus.
      </Typography>
      <Typography
        component={motion.p}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        variant="h5"
        sx={{ fontStyle: "italic", mt: 4, fontWeight: "light" }}
      >
        "El trabajo dignifica a las mujeres, les hace dueñas de su propia vida"
      </Typography>
    </Box>
  );
};

export default ImpactoSocial;
