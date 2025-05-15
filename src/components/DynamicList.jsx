import { useState } from 'react';
import { Box, Typography, TextField, Button, ListItem, IconButton, ListItemText } from '@mui/material'; 
import DeleteIcon from '@mui/icons-material/Delete';

const DynamicList = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue.trim()){
            setItems([...items, inputValue]);
            console.log(items);
            setInputValue('');
        }
    }
    const handleDelete = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    }

    return (
        <Box sx={{my:4}}>
            <Typography variant="h6" gutterBottom>
                Agrega tus opciones en la lista
            </Typography>
            <TextField
                label="Aregar Elemento"
                variant="outlined"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                sx={{ mb: 2, width: '100%' }}  
            />

            <Button variant="contained" color="primary"  onClick={handleAdd} sx={{mb:2}}>
                Agregar
            </Button>
            <list>
                {items.map((item, index) => (
                    <ListItem key={index} secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
                            <DeleteIcon />
                    
                    </IconButton> 
                    }> 
                        <ListItemText primary={item} />
                    </ListItem>
                ))} 
            </list>
        </Box> 
    )
}
export default DynamicList;