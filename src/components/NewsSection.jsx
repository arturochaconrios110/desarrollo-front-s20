import { Box, Typography, Card, CardContent, CardActions, Button }from "react";

const NewsSection = ({ news }) => { 
    return (
        <Box>
            {news.map((item, index) => (
                <Card key={index} sx={{ mb: 4 }}>
                    <CardContent>
                        <Typography variant="h6"> {item.title}</Typography>
                        <Typography variant="body2" sx={{mb:2}}>{item.description}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small" 
                            variant="contained"
                            onClick={() => handleTeadMore(item)}
                            sx={{ textDecoration: 'none'}}
                        >
                            Leer más
                        </Button>
                    </CardActions>
                </Card>
            ))}

            
        </Box>
        
    )
}
export default NewsSection;