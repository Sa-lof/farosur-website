import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import Values from "../components/Values/Values";
import History from "../components/History/History";
import Packages from "../components/Packages/Packages";
import Chain from "../components/Chain/Chain";
import Clients from "../components/Clients/Clients";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Box>
        <Navbar />
        <Box
          sx={{
            mx: { xs: "16px", sm: "32px", md: "64px", lg: "96px", xl: "120px" },
            my: { xs: "24px", sm: "48px", md: "72px", lg: "96px", xl: "72px" },
          }}
        >
          <Header />
          <Values />
          <History />
          <Packages />
        </Box>
        <Chain />
        <Clients />
        <Box
          sx={{
            mx: { xs: "16px", sm: "32px", md: "64px", lg: "96px", xl: "120px" },
            my: { xs: "24px", sm: "48px", md: "72px", lg: "96px", xl: "72px" },
          }}
        >
          <Projects />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
