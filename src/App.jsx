import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import Header from './Componentes/Header';
import Banner from './Componentes/Banner';
import ProductoCarrusel from './Componentes/ProductoCarrusel';
import Footer from './Componentes/Footer';
import Contacto from './Componentes/Contacto';
import VisionEmpresa from './Componentes/VisionEmpresa';

const App = ({ mode, toggleColorMode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const theme = createTheme({
    palette: {
      mode,
      background: {
        default: mode === 'dark' ? '#121212' : '#F5F0EB',
      },
      primary: {
        main: '#8D6E63',
      },
      text: {
        primary: mode === 'dark' ? '#fff' : '#000',
      },
    },
  });

  const handleContacto = (producto) => {
    navigate(`/contacto?producto=${encodeURIComponent(producto)}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleColorMode={toggleColorMode} />

      <Routes>
        <Route
          path="/"
          element={
            <main
              style={{
                paddingTop: '100px',
                minHeight: '80vh',
                width: '100%',
                overflowX: 'hidden',
                boxSizing: 'border-box',
                margin: '0 auto',
              }}
            >
              <Banner />
              <VisionEmpresa />
              <ProductoCarrusel onContacto={handleContacto} />
            </main>
          }
        />
        <Route
          path="/contacto"
          element={
            <main
              style={{
                paddingTop: '100px',
                minHeight: '80vh',
                width: '100%',
                overflowX: 'hidden',
              }}
            >
              <Contacto />
            </main>
          }
        />
      </Routes>

      <Footer />
    </ThemeProvider>
    
  );
};

export default App;

