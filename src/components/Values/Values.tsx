import React from "react";
import { Grid, Box, Typography, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { motion } from "framer-motion";

const valuesData = [
  {
    title: "Lorem ipsum",
    description:
      "Morbi a urna sapien. Integer eget felis eleifend, auctor est vitae, facilisis neque. Sed feugiat nisl lectus, et elementum dolor condimentum ut.",
  },
  {
    title: "Lorem ipsum",
    description:
      "Morbi a urna sapien. Integer eget felis eleifend, auctor est vitae, facilisis neque. Sed feugiat nisl lectus, et elementum dolor condimentum ut.",
  },
  {
    title: "Lorem ipsum",
    description:
      "Morbi a urna sapien. Integer eget felis eleifend, auctor est vitae, facilisis neque. Sed feugiat nisl lectus, et elementum dolor condimentum ut.",
  },
  {
    title: "Lorem ipsum",
    description:
      "Morbi a urna sapien. Integer eget felis eleifend, auctor est vitae, facilisis neque. Sed feugiat nisl lectus, et elementum dolor condimentum ut.",
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
    <Box sx={{ marginTop: { xs: 8, sm: 4, md: 4, lg: 8 }, overflow: "hidden" }}>
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
                  <InfoIcon />
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
