import React, { useState } from 'react';
import UrlShortenerForm from '../components/UrlShortenerForm';
import UrlShortenerResult from '../components/UrlShortenerResult';
import { logEvent } from '../components/LoggingMiddleware';

const ShortenerPage: React.FC = () => {
    const [results, setResults] = useState<any[]>([]);

    const handleShortenUrl = (newResult: any) => {
        setResults((prevResults) => [...prevResults, newResult]);
        logEvent('URL shortened', newResult);
    };

    return (
        <div>
            <h1>URL Shortener</h1>
            <UrlShortenerForm onShortenUrl={handleShortenUrl} />
            <UrlShortenerResult results={results} />
        </div>
    );
};

export default ShortenerPage;