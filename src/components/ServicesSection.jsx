import {Box, Typography, Card, CardMedia, CardContent, Button} from '@mui/material';
import Banner from './Banner';

const ServicesSection = ({services}) => {
    return (
        <Box sx={{ my: 4 }}>
            <Typography variant="h4" sx={{ mb:3, textAlign:'center'}} >
                Alcalde
            </Typography>
            <Box sx={{ display: 'flex', FlexDirection:'column', gap:3}}> 
                {services.map((service, index) => (
                    <Card key={index} sx={{ display:'felx', alignItems: 'center', justifyContent: 'space-between' }}>
                        <CardMedia
                            component="img"
                            sx={{width:200}}
                            image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6qaMHGtr77KuWXuvXi3qn7prpb7lwmHv_A&s'}
                            alt={'Servicio ${index + 1}'}
                            
                        />
                        <CardContent sx={{flex:1, textAlign:'center'}}>
                            <Typography variant="h6" sx={{fontWeight:'bold', mb:2}}>
                                {service}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{mb:2}}>
                                Descripción breve del servicio {index + 1}. Proporcionamos este servicio para mejorar tu calidad de vida.
                            </Typography>
                            <Button variant="contained" color="primary" size="small">
                            ver más
                        </Button>
                        </CardContent>
                        </Card>
                ))}
            </Box>
        </Box>
    );  
}
export default ServicesSection;
