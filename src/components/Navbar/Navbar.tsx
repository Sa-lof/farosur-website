import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link as ScrollLink } from "react-scroll";

// Import your logo image
import Logo from "../../assets/logo/logo.png";

const pages = [
  { name: "Home", id: "home" },
  { name: "Historia", id: "historia" },
  { name: "Paquetes", id: "paquetes" },
  { name: "Cadena de Valor", id: "cadena-de-valor" },
  { name: "Clientes", id: "clientes" },
];
const contact = { name: "Contacto", id: "contacto" };

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        margin: "32px 0",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <img
              src={Logo}
              alt="Faro Sur Logo"
              style={{
                height: "40px", // Adjust the height as needed
                width: "auto",
              }}
            />
          </Box>
          <Box
            component="a"
            href="/"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              alignItems: "center",
            }}
          >
            <img
              src={Logo}
              alt="Faro Sur Logo"
              style={{
                height: "30px", // Adjust the height as needed
                width: "auto",
              }}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon sx={{ color: "#333333" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <ScrollLink to={page.id} smooth={true} duration={1000}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </ScrollLink>
                </MenuItem>
              ))}
              <MenuItem key={contact.id} onClick={handleCloseNavMenu}>
                <ScrollLink to={contact.id} smooth={true} duration={1000}>
                  <Typography textAlign="center">{contact.name}</Typography>
                </ScrollLink>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(192, 228, 243, 0.3)", // Use rgba for background opacity
              borderRadius: "10px",
              maxWidth: 690,
              mx: "auto",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 1,
                  display: "block",
                  textTransform: "none",
                  fontSize: "14px",
                  color: "#3D4899",
                  mx: 1,
                  ":hover": {
                    backgroundColor: "transparent",
                    color: "#3D4899",
                    fontWeight: 700,
                  },
                }}
              >
                <ScrollLink
                  to={page.id}
                  smooth={true}
                  duration={1000}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {page.name}
                </ScrollLink>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "block" } }}>
            <Tooltip title="Contáctanos">
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#3D4899",
                  borderRadius: "50px",
                  textTransform: "none",
                  px: "28px",
                  py: "12px",
                  ":hover": {
                    border: "1px solid #3D4899",
                    backgroundColor: "transparent",
                    color: "#3D4899",
                  },
                }}
              >
                <ScrollLink
                  to={contact.id}
                  smooth={true}
                  duration={1000}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {contact.name}
                </ScrollLink>
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
