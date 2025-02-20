import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
