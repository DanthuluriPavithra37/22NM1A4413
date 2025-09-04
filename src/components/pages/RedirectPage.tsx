import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { logEvent } from '../components/LoggingMiddleware'; // Assuming this is how logging is integrated
import { fetchOriginalUrl } from '../utils/urlHelpers'; // Function to fetch the original URL based on shortcode

const RedirectPage: React.FC = () => {
    const { shortcode } = useParams<{ shortcode: string }>();
    const history = useHistory();

    useEffect(() => {
        const redirectToOriginalUrl = async () => {
            try {
                const originalUrl = await fetchOriginalUrl(shortcode);
                if (originalUrl) {
                    logEvent('Redirecting to original URL', { shortcode, originalUrl });
                    window.location.href = originalUrl; // Redirect to the original URL
                } else {
                    logEvent('Original URL not found', { shortcode });
                    history.push('/'); // Redirect to home or show an error
                }
            } catch (error) {
                logEvent('Error fetching original URL', { shortcode, error });
                history.push('/'); // Redirect to home or show an error
            }
        };

        redirectToOriginalUrl();
    }, [shortcode, history]);

    return null; // This component does not render anything
}; 

export default RedirectPage;