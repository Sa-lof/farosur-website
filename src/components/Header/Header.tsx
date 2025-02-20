import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
};

const Header: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          padding: "16px",
          fontSize: "18px",
          fontWeight: "400",
          color: "#4E4E4E",
        }}
      >
        Un espacio destinado a la <strong>creación</strong> y <strong>desarrollo</strong> de trajes de baño situado en la <strong>Península de Yucatán</strong>
      </Box>
    
      <Box
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        sx={{
          position: "relative",
          height: "70vh",
          width: "100%",
          backgroundColor: "#E0E0E0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          padding: "16px",
        }}
      >
        <Typography
          component={motion.p}
          variants={textVariants}
          sx={{
            fontSize: "64px",
            fontWeight: "500",
            color: "#9E9E9E",
          }}
        >
          1920 x 600
        </Typography>

        <Typography
          component={motion.p}
          variants={textVariants}
          sx={{
            position: "absolute",
            bottom: "16px",
            fontSize: "24px",
            fontWeight: "400",
            color: "#4E4E4E",
          }}
        >
          Somos mujeres creando
        </Typography>
      </Box>
    </>
  );
};

export default Header;
