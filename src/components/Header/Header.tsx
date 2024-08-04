import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";

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
        color: "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={7}>
          <Typography
            component={motion.div}
            variants={textVariants}
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: "52px",
                sm: "60px",
                md: "72px",
                lg: "88px",
              },
              color: "#333333",
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
                xs: "52px",
                sm: "60px",
                md: "72px",
                lg: "88px",
              },
              color: "#333333",
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
                xs: "52px",
                sm: "60px",
                md: "72px",
                lg: "88px",
              },
              color: "#333333",
            }}
          >
            lorem
          </Typography>
        </Grid>

        <Grid
          item
          sm={12}
          md={12}
          lg={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            padding: 0,
            mt: { xs: 1, sm: 1, md: 2, lg: 40 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              component={motion.div}
              variants={textVariants}
              variant="h5"
              sx={{
                color: "#333333",
                mb: 2,
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
                color: "#333333",
                border: "1.5px solid #333333",
                borderRadius: "50px",
                textTransform: "none",
                fontWeight: 600,
                px: "28px",
                py: "12px",
                ":hover": {
                  backgroundColor: "#333333",
                  color: "#fff",
                  fontWeight: 600,
                },
              }}
            >
              Ver más
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
