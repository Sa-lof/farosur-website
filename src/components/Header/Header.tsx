import React from "react";
import { Box } from "@mui/material";

const Header: React.FC = () => {
  return (
    <>
      {/* Background video */}
      <Box
        sx={{
          position: "relative",
          height: "90vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/T2L37nTqqhM?autoplay=1&mute=1&controls=0&loop=1&playlist=T2L37nTqqhM&modestbranding=1&rel=0&disablekb=1&fs=0&loop=1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            pointerEvents: "none", // prevents user interaction (e.g. pausing)
          }}
          allow="autoplay; encrypted-media"
          frameBorder="0"
          title="Background Video"
        ></iframe>
      </Box>

      {/* Header text */}
      <Box
        sx={{
          textAlign: "center",
          padding: "16px",
          fontSize: "18px",
          fontWeight: "400",
          color: "#4E4E4E",
        }}
      >
        Un espacio destinado a la <strong>creación</strong> y{" "}
        <strong>desarrollo</strong> de trajes de baño, situado en la{" "}
        <strong>Península de Yucatán, México</strong>
      </Box>
    </>
  );
};

export default Header;
