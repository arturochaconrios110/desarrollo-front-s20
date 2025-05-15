import { useState } from 'react';
import { Box, Typography, TextField, Button, list, ListItem, ListItemText, IconButton } from '@mui/material'; 
import DeleteIcon from '@mui/icons-material/Delete';

const DynamicList = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    }

    return (
        <Box sx={{my:4}}>
            <Typography variant="h6" gutterBottom>
                Lista Dinámica
            </Typography>
            <TextField
                label="Aregar Elemento"
                variant="outlined"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                sx={{ mb: 2, width: '100%' }}  
            />

            <Button variant="contained" color="primary"  onClick={handleAdd } sx={{mb:2}}>
                Agregar
            </Button>
        </Box> 
    )
}
export default DynamicList;