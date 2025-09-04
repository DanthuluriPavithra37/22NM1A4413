import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';

interface UrlShortenerResultProps {
  results: {
    originalUrl: string;
    shortUrl: string;
    expiryDate: string;
  }[];
}

const UrlShortenerResult: React.FC<UrlShortenerResultProps> = ({ results }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Shortened URLs
      </Typography>
      <Grid container spacing={2}>
        {results.map((result, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">Original URL:</Typography>
                <Typography variant="body2">{result.originalUrl}</Typography>
                <Typography variant="h6">Shortened URL:</Typography>
                <Typography variant="body2">{result.shortUrl}</Typography>
                <Typography variant="h6">Expiry Date:</Typography>
                <Typography variant="body2">{result.expiryDate}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UrlShortenerResult;