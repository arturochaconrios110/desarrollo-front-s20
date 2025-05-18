import { useState } from "react";
import { Card, CardContent, CardActions, Button, Typography, Box, CardMedia } from "@mui/material";

const NewsCarousel = ({ news }) => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? news.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrent((prev) => (prev === news.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", position: "relative", minHeight: 400, backgroundColor: "#e3f2fd", borderRadius: 2, boxShadow: 2, p: 2 }}>
      <Card>
        {news[current].image && (
          <CardMedia
            component="img"
            image={news[current].image}
            alt={news[current].title}
            sx={{ maxHeight: 180, objectFit: "cover" }}
          />
        )}
        <CardContent>
          <Typography variant="h6">{news[current].title}</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {news[current].description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            sx={{ textDecoration: "none" }}
            onClick={() => window.open(news[current].link || "#", "_blank")}
          >
            Leer más
          </Button>
        </CardActions>
      </Card>
      <Button onClick={handlePrev} sx={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)" }}>&lt;</Button>
      <Button onClick={handleNext} sx={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}>&gt;</Button>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        {news.map((_, idx) => (
          <Box
            key={idx}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              mx: 0.5,
              backgroundColor: idx === current ? "primary.main" : "grey.400",
              transition: "background-color 0.3s",
              cursor: "pointer",
              border: idx === current ? "2px solid #1976d2" : "none",
            }}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default NewsCarousel;
