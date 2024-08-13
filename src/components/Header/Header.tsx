import React from "react";
import { Box, Typography, Button } from "@mui/material";
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

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
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
          maxWidth: { xs: "100%", md: "70%" }, // Adjust the width of the content box
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
          Lorem ipsum lorem
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
          ipsum lorem ipsum
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
          lorem
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
              mb: 4,
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "18px",
                lg: "20px",
              },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
            urna sapien. Integer eget felis eleifend, auctor est vitae,
            facilisis neque.
          </Typography>
          <Button
            component={motion.button}
            variants={buttonVariants}
            sx={{
              color: "#fff",
              border: "1.5px solid #fff",
              borderRadius: "50px",
              textTransform: "none",
              fontWeight: 600,
              px: "28px",
              py: "12px",
              ":hover": {
                backgroundColor: "#fff",
                color: "#3D4899",
                fontWeight: 600,
              },
            }}
          >
            Ver más
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
