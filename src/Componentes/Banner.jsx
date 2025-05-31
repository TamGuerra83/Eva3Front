import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Banner = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '60vh', md: '70vh' },
        backgroundImage: 'url("lana5.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: "'Caveat', cursive",
      }}
    >
      {/* Capa con degradado */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0))',
          zIndex: 1,
        }}
      />

      {/* Contenido con hover */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          px: 2,
          animation: `${fadeInUp} 1.2s ease-out`,
          transition: 'color 0.3s ease',
          '&:hover .titulo': {
            color: '#FFD600',
          },
          '&:hover .subtitulo': {
            color: '#FFECB3',
          },
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          className="titulo"
          sx={{
            color: '#fff',
            fontWeight: 700,
            textShadow: '2px 2px 6px rgba(0,0,0,0.6)',
            fontFamily: "'Caveat', cursive",
          }}
        >
          Tejelanas Vivi
        </Typography>
        <Typography
          variant="h3"
          className="subtitulo"
          sx={{
            mt: 2,
            color: '#f5f5f5',
            fontWeight: 400,
            fontSize: '1.2rem',
            fontFamily: "'Caveat', cursive",
          }}
        >
          Lanas naturales y vellón directo desde Laguna de Zapallar
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4, px: 4, py: 1.5, borderRadius: '20px', fontWeight: 'bold' }}
          onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
        >
          Ver productos
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;


