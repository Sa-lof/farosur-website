import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  CardMedia,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Project 1",
    date: "2023-01-01",
    description: "Description of Project 1",
    imageUrl: "https://via.placeholder.com/300",
    size: { xs: 12, sm: 12, md: 6, lg: 4 },
  },
  {
    title: "Project 2",
    date: "2023-02-01",
    description: "Description of Project 2",
    imageUrl: "https://via.placeholder.com/300",
    size: { xs: 12, sm: 12, md: 6, lg: 4 },
  },
  {
    title: "Project 3",
    date: "2023-03-01",
    description: "Description of Project 3",
    imageUrl: "https://via.placeholder.com/300",
    size: { xs: 12, sm: 12, md: 6, lg: 4 },
  },
  {
    title: "Project 4",
    date: "2023-04-01",
    description: "Description of Project 4",
    imageUrl: "https://via.placeholder.com/300",
    size: { xs: 12, sm: 12, md: 6, lg: 6 },
  },
  {
    title: "Project 5",
    date: "2023-05-01",
    description: "Description of Project 5",
    imageUrl: "https://via.placeholder.com/300",
    size: { xs: 12, sm: 12, md: 6, lg: 6 },
  },
];

const Projects: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projectData)[0]
  >(null);

  const handleClickOpen = (project: (typeof projectData)[0]) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box sx={{ marginTop: { xs: 12, sm: 12, md: 16, lg: 20 } }} id="projects">
      <Grid container spacing={4}>
        {projectData.map((project, index) => (
          <Grid
            item
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            {...project.size}
          >
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "none",
                borderRadius: 0,
              }}
              onClick={() => handleClickOpen(project)}
            >
              <CardMedia
                component="img"
                src={project.imageUrl}
                alt={project.title}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            width: { xs: "100%", md: "50%" },
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: "bold" }}>
          {selectedProject?.title}
          <Typography
            gutterBottom
            sx={{ fontSize: "12px", color: "#333333", opacity: 0.6 }}
          >
            {selectedProject?.date}
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ justifyContent: "center", display: "flex" }}>
            <Box
              component="img"
              src={selectedProject?.imageUrl}
              alt={selectedProject?.title}
              sx={{
                width: {
                  xs: "100%", // 100% width on mobile view
                  md: "70%", // 50% width on medium and larger screens
                },
                marginBottom: "20px",
              }}
            />
          </Box>
          <Typography>{selectedProject?.description}</Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Projects;
