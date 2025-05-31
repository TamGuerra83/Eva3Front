import React from 'react';
import { Box, Typography, useTheme, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        py: 4,
        px: 2,
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(to right, #1e1e1e, #2e2e2e)'
          : 'linear-gradient(to right, #f5f5dc, #e3dac9)',
        color: theme.palette.text.primary,
        textAlign: 'center',
        borderTop: `1px solid ${theme.palette.divider}`,
        width: '100%',
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        Tejelanas Vivi © {currentYear}
      </Typography>

      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton
          component="a"
          href="https://www.instagram.com/tu_usuario_instagram"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          sx={{
            color: theme.palette.text.primary,
            transition: 'color 0.3s ease',
            '&:hover': {
              color: '#E1306C', // Color rosa característico de Instagram
            },
          }}
        >
          <InstagramIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://wa.me/56912345678"
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp"
          sx={{
            color: theme.palette.text.primary,
            transition: 'color 0.3s ease',
            '&:hover': {
              color: '#25D366', // Verde de WhatsApp
            },
          }}
        >
          <WhatsAppIcon />
        </IconButton>
      </Box>

      <Typography variant="caption" sx={{ mt: 2, display: 'block' }}>
        Lanas y vellón natural desde Laguna de Zapallar
      </Typography>
    </Box>
  );
};

export default Footer;

