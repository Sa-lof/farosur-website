import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";

const chainData = [
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a urna sapien. Integer eget felis eleifend, auctor est vitae, facilisis neque.",
    icon: <InfoIcon sx={{ fontSize: { xs: "32px", md: "44px" } }} />,
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a urna sapien. Integer eget felis eleifend, auctor est vitae, facilisis neque.",
    icon: <HomeIcon sx={{ fontSize: { xs: "32px", md: "44px" } }} />,
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a urna sapien. Integer eget felis eleifend, auctor est vitae, facilisis neque.",
    icon: <WorkIcon sx={{ fontSize: { xs: "32px", md: "44px" } }} />,
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a urna sapien. Integer eget felis eleifend, auctor est vitae, facilisis neque.",
    icon: <SchoolIcon sx={{ fontSize: { xs: "32px", md: "44px" } }} />,
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a urna sapien. Integer eget felis eleifend, auctor est vitae, facilisis neque.",
    icon: <StarIcon sx={{ fontSize: { xs: "32px", md: "44px" } }} />,
  },
];

const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Chain: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#3D4899",
        color: "#fff",
        padding: { xs: 4, md: 8 },
        marginTop: { xs: 12, sm: 12, md: 16, lg: 20 },

      }}
      id="cadena-de-valor"
    >
      <Typography
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        variant="h2"
        sx={{
          fontWeight: "bold",
          textAlign: "left",
          mb: { xs: 4, md: 6 },
          fontSize: {
            xs: "32px",
            sm: "48px",
            md: "56px",
            lg: "72px",
          },
        }}
      >
        Nuestra <span style={{ color: "#8FBFE0" }}>cadena</span> de valor
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              backgroundImage: `url(https://via.placeholder.com/400)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: 400,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              mb: { xs: 4, md: 4 },
              boxShadow: "none",
            }}
          ></Card>
          <Card
            sx={{
              backgroundImage: `url(https://via.placeholder.com/400)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: 400,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              boxShadow: "none",
            }}
          ></Card>
        </Grid>
        <Grid item xs={12} md={6}>
          {chainData.map((item, index) => (
            <Card
              key={index}
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              sx={{
                backgroundColor: "transparent",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                boxShadow: "none",
              }}
            >
              <IconButton size="large" sx={{ color: "#fff", marginBottom: 1 }}>
                {item.icon}
              </IconButton>
              <CardContent sx={{ padding: 0 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                      lg: "20px",
                    },
                  }}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chain;
