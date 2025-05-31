import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Contacto = () => {
  const theme = useTheme();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const producto = queryParams.get('producto');

  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  useEffect(() => {
    if (producto) {
      setFormData((prev) => ({
        ...prev,
        mensaje: `Estoy interesado/a en el producto: ${producto}`,
      }));
    }
  }, [producto]);

  const validate = () => {
    const newErrors = {};

    if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(formData.nombre)) {
      newErrors.nombre = 'El nombre solo puede contener letras.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'Correo inválido.';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es obligatorio.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Formulario válido:', formData);
      alert('Mensaje enviado ✉️');
      setFormData({ nombre: '', correo: '', mensaje: '' });
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url("yarn-7162973_1920.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
     <Box
  sx={{
    maxWidth: 600,
    width: '100%',
    p: 4,
    borderRadius: 3,
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(30, 30, 30, 0.6)'
      : 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(5px)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Contáctanos
        </Typography>

        <form onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            error={!!errors.nombre}
            helperText={errors.nombre}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Correo"
            name="correo"
            type="email"
            value={formData.correo}
            onChange={handleChange}
            error={!!errors.correo}
            helperText={errors.correo}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Mensaje"
            name="mensaje"
            multiline
            rows={4}
            value={formData.mensaje}
            onChange={handleChange}
            error={!!errors.mensaje}
            helperText={errors.mensaje}
            margin="normal"
          />
          <Box textAlign="center" mt={3}>
            <Button variant="contained" type="submit">
              Enviar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Contacto;


