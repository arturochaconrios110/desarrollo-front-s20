import {useState, useEffect} from 'react';
import { Box,  Typography} from '@mui/material';

const Timer = () => {
    const [timertext, setTimerText] = useState('Cargando...');

    useEffect(() => {
        const interval = setInterval(() => {
            setTimerText("Hora actual: " + new Date().toLocaleTimeString());        
            },1000);
            return() => clearInterval(interval);
        }
        ,[]);
      

    return (
        <Box sx={{textAlign : 'center', my: 4}}>
            <Typography variant="h4" gutterBottom>
                {timertext}
            </Typography>
            </Box>
    )
}
export default Timer;
// import { useState, useEffect } from 'react'; 