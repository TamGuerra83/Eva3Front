import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link } from 'react-router-dom';

const Header = ({ toggleColorMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: 'Inicio', to: '/' },
    { label: 'Contacto', to: '/contacto' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff3e0",
          color: theme.palette.mode === "dark" ? "#ff9800" : "#000",
          boxShadow: 3,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo o Título */}
          <Typography
  variant="h6"
  component="div"
  sx={{
    fontWeight: 'bold',
    color: '#ff9800',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: theme.palette.mode === 'dark' ? '#ff9800' : '#8D6E63', // Amarillo en modo oscuro, marrón en claro
      cursor: 'pointer',
    },
  }}
>
  Tejelanas Vivi
</Typography>


          {/* Iconos */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Botón modo día/noche */}
            <IconButton onClick={toggleColorMode} color="inherit">
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>

            {/* Menú Drawer solo en mobile */}
            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>

          {/* Menú visible en escritorio */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3 }}>
              {menuItems.map((item) => (
                <Typography
                  key={item.to}
                  component={Link}
                  to={item.to}
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    fontWeight: 500,
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer para móviles */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton component={Link} to={item.to}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;


