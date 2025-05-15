import {TextField, Button, Box, Typography} from '@mui/material';
import React, {useState} from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const [error, setError] = useState({});
    const [success, setSuccess] = useState(false);

    /** FUNCIONES */
    const enviarDatos = (e) => {
        e.preventDefault();
        const validationErrors = validate()
        // Aquí puedes manejar el envío del formulario
        
        console.log('Errores de validación:', validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            // Simular envío exitoso
            setError(validationErrors);
        } else {
            // Simular envío exitoso
            setSuccess(true);
            setError({});
            console.log('Formulario enviado');
            console.log(formData);
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = 'El nombre es requerido';
        }
        if (!formData.email) {
            newErrors.email = 'El correo electrónico es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El correo electrónico no es válido';
        }
        if (!formData.message) {
            newErrors.message = 'El mensaje es requerido';
        }
        return newErrors;
    }

    /** VISTA */
    return (
        <Box component="form" onSubmit={enviarDatos} sx={{maxWidth: 400,mx:'auto',mt:4, mb:4}}>
            <Typography variant="h5" gutterBottom>Contactanos</Typography>
            <TextField 
                label="Nombre" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
                value = {formData.name}
                onChange = {(e) => setFormData({...formData, name: e.target.value})}
                error={!!error.name}
                helperText={error.name }
            />
            <TextField 
                label="Correo Electrónico" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
                value = {formData.email}
                onChange = {(e) => setFormData({...formData, email: e.target.value})}
                error={!!error.email}
                helperText={error.email }
            />
            <TextField 
                label="Mensaje" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
                value = {formData.message}
                onChange = {(e) => setFormData({...formData, message: e.target.value})}
                error={!!error.message}
                helperText={error.message }
            />
            <Button 
                type="submit"
                variant="contained" 
                color="primary" 
                fullWidth 
                sx={{ mt: 2 }}
            >
                Enviar
            </Button>
        </Box>
    )
}
export default ContactForm;