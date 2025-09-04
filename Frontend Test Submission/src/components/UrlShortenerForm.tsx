import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { validateUrl, validateValidity, validateShortcode } from '../utils/validation';
import { logEvent } from './LoggingMiddleware';

const UrlShortenerForm = ({ onSubmit }) => {
    const [longUrl, setLongUrl] = useState('');
    const [validity, setValidity] = useState(30);
    const [shortcode, setShortcode] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!validateUrl(longUrl)) {
            setError('Please enter a valid URL.');
            logEvent('Invalid URL submitted');
            return;
        }

        if (!validateValidity(validity)) {
            setError('Validity period must be a positive integer.');
            logEvent('Invalid validity period submitted');
            return;
        }

        if (shortcode && !validateShortcode(shortcode)) {
            setError('Shortcode must be alphanumeric and reasonable length.');
            logEvent('Invalid shortcode submitted');
            return;
        }

        onSubmit({ longUrl, validity, shortcode });
        setLongUrl('');
        setValidity(30);
        setShortcode('');
        logEvent('URL shortening request submitted');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">Shorten Your URL</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Original Long URL"
                        variant="outlined"
                        fullWidth
                        value={longUrl}
                        onChange={(e) => setLongUrl(e.target.value)}
                        error={!!error}
                        helperText={error}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Validity (minutes)"
                        variant="outlined"
                        type="number"
                        fullWidth
                        value={validity}
                        onChange={(e) => setValidity(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Custom Shortcode (optional)"
                        variant="outlined"
                        fullWidth
                        value={shortcode}
                        onChange={(e) => setShortcode(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Shorten URL
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default UrlShortenerForm;