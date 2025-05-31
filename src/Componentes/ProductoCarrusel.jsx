import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const productos = [
  {
    titulo: 'Pieceras Vellon',
    descripcion: 'Suavidad y calidez natural.',
    imagen: 'IMG_5821.jpg',
  },
  {
    titulo: 'Chaleco Lana',
    descripcion: 'Colores fuertes',
    imagen: 'IMG_5819.jpg',
  },
  {
    titulo: 'Poncho de lana de alpaca',
    descripcion: 'Textura premium para tejidos únicos.',
    imagen: 'IMG_5814.jpg',
  },
  {
    titulo: 'Poncho lana',
    descripcion: 'Textura premium para tejidos únicos.',
    imagen: 'IMG_5815.jpg',
  },
  {
    titulo: 'Lana de Alpaca',
    descripcion: 'Textura premium para tejidos únicos.',
    imagen: 'lana4.jpg',
  },


  
];

const ProductoCarrusel = ({ onContacto }) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%', px: 2, py: 6, maxWidth: '1200px', mx: 'auto' }}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ paddingBottom: '50px' }}
      >
        {productos.map((prod, idx) => (
          <SwiperSlide key={idx}>
            <Box
              sx={{
                p: 3,
                backgroundColor: theme.palette.mode === 'dark' ? '#2E2E2E' : '#FFF8F1',
                borderRadius: 3,
                boxShadow: 4,
                textAlign: 'center',
                height: '100%',
              }}
            >
              <Box
                component="img"
                src={prod.imagen}
                alt={prod.titulo}
                sx={{
                  width: '100%',
                  height: { xs: '250px', md: '300px' },
                  objectFit: 'cover',
                  borderRadius: 2,
                  border: '4px solid #FFC107',
                  boxShadow: '0 4px 20px rgba(241, 241, 225, 0.2)',
                  mb: 2,
                  transition: 'transform 0.4s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
              <Typography variant="h6" gutterBottom>
                {prod.titulo}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {prod.descripcion}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onContacto(prod.titulo)}
              >
                Contáctanos
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProductoCarrusel;



