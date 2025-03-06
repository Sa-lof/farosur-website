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
      {/* Imagen con texto alineado a la derecha */}
      <Box
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        sx={{
          position: "relative",
          height: "70vh",
          width: "100%",
          backgroundImage: "url('https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          paddingBottom: "32px",
          paddingRight: "48px",
        }}
      >
        <Typography
          component={motion.p}
          variants={textVariants}
          sx={{
            fontSize: "40px",
            fontWeight: "400",
            color: "#4E4E4E",
            textAlign: "right",
            paddingRight: "5%",
            fontFamily: "Baskerville"
          }}
        >
          Somos mujeres creando
        </Typography>
      </Box>

      {/* Texto superior */}
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
    </>
  );
};

export default Header;
