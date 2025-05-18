import { Box, Typography, Card, CardContent, CardActions, Button, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NewsSection = ({ news }) => { 
    const navigate = useNavigate();
    const handleTeadMore = (item) => {
        navigate('/news-detail', { state: { newsItem:item } });
    }


    return (
          
        <Box>
             <Typography variant="h4" sx={{ mb:3, textAlign:'center'}} >
                NOTICIAS DE CHOLCHOL
            </Typography>
            <Box sx={{ display: 'flex', FlexDirection:'column', gap:3}}>
            {news.map((item, index) => (
                <Card key={index} sx={{ mb: 2 }}>
                    
                    <CardContent>
                        <Typography variant="h6"> {item.title}</Typography>
                        <Typography variant="body2" sx={{mb:2}}></Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            size="small" 
                            color="primary"
                            sx={{ textDecoration: 'none'}}
                            onClick={() => handleTeadMore(item)}
                        >
                            Leer más
                        </Button>
                    </CardActions>
                </Card>
            ))}
            </Box>
        </Box>
    )
}
export default NewsSection;