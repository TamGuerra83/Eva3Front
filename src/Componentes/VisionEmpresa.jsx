import React from 'react';
import { Box, Typography, useTheme, Container } from '@mui/material';

const VisionEmpresa = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.mode === 'dark' ? '#2E2E2E' : '#FBE9E7',
        color: theme.palette.text.primary,
        py: 8,
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'center',
            backgroundColor: theme.palette.mode === 'dark' ? '#3A3A3A' : '#FFF3E0',
            p: { xs: 4, md: 6 },
            borderRadius: 3,
            boxShadow: theme.palette.mode === 'dark'
              ? '0px 4px 10px rgba(0,0,0,0.5)'
              : '0px 4px 10px rgba(0,0,0,0.1)',
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: theme.palette.mode === 'dark' ? '#FFE082' : '#6D4C41',
              textShadow: theme.palette.mode === 'dark' ? '1px 1px 2px #000' : 'none',
            }}
          >
            Nuestra Visión
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              maxWidth: '700px',
              mx: 'auto',
              color: theme.palette.mode === 'dark' ? '#E0E0E0' : 'inherit',
            }}
          >
            En <strong>Tejelanas Vivi</strong>, soñamos con un mundo donde cada hilo cuente una historia. 
            Nos esforzamos por ofrecer materiales sustentables, naturales y de alta calidad, 
            que conecten tradición, creatividad y amor por lo hecho a mano.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default VisionEmpresa;
