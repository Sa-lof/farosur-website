import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Variants for motion animations
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
    <Box
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      sx={{
        position: "relative",
        height: "70vh", // Adjust the height as needed
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        id: "home",
        paddingX: { xs: 2, sm: 3, md: 4 }, // Padding on the sides
        textAlign: "center",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures the video covers the area
          zIndex: -2,
        }}
      >
        <source
          src="https://www.w3schools.com/howto/rain.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for opacity */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          maxWidth: { xs: "100%", md: "80%" }, // Adjust the width of the content box
          textAlign: { xs: "center", md: "center" }, // Center text on small screens, left-align on medium and larger
          paddingX: { xs: 2, sm: 3, md: 2 }, // Padding adjustments
        }}
      >
        <Typography
          component={motion.div}
          variants={textVariants}
          variant="h1"
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: "36px", // Adjusted for small screens
              sm: "42px",
              md: "52px",
              lg: "72px",
            },
            color: "#fff",
          }}
        >
          TODO LO QUE TU MARCA NECESITA,
        </Typography>
        <Typography
          component={motion.div}
          variants={textVariants}
          variant="h1"
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: "36px", // Adjusted for small screens
              sm: "42px",
              md: "52px",
              lg: "72px",
            },
            color: "#fff",
          }}
        >
          SIN COMPLICACIONES
        </Typography>

        <Box
          sx={{
            mt: 4, // Margin-top to separate the text from the button
          }}
        >
          <Typography
            component={motion.div}
            variants={textVariants}
            variant="h5"
            sx={{
              color: "#fff",
              fontWeight: 300,
              mb: 4,
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "18px",
                lg: "28px",
              },
              maxWidth: {
                xs: "90%", // Adjusted for mobile
                sm: "80%", // Adjusted for small screens
                md: "60%", // Adjusted for larger screens
                lg: "70%", // Adjusted for larger screens
              },
              lineHeight: {
                xs: "1.4", // More compact for smaller screens
                sm: "1.5",
                md: "1.6", // Default for larger screens
              },
              letterSpacing: "0.01em",
              mx: "auto", // Center the text horizontally
              textAlign: { xs: "center", md: "center" },
            }}
          >
            Materializamos tu visión simplificando cada parte del proceso, todo
            a través de atención 100% personalizada de la mano de expertos.
          </Typography>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
