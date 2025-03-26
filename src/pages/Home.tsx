import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import Origen from "../components/Origen/Origen";
import History from "../components/History/History";
import Banner from "../components/Banner/Banner";
import Clientes from "../components/Clientes/Clientes";
import Servicios from "../components/Servicios/Servicios";
import Clients from "../components/Clients/Clients";
import Footer from "../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <Box sx={{ overflowX: "hidden", backgroundColor: "#F8F7F5"}}>
      <Navbar />
      <Box sx={{ marginTop: "100px" }}>
        <Header />
        <Origen />
        <History />
        <Banner />
        <Clientes />
        <Servicios />
        <Clients />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
