import { v4 as uuidv4 } from 'uuid';

export const generateUniqueShortcode = (customShortcode?: string): string => {
    if (customShortcode) {
        // Validate custom shortcode (alphanumeric and reasonable length)
        const isValid = /^[a-zA-Z0-9]{1,10}$/.test(customShortcode);
        if (!isValid) {
            throw new Error('Custom shortcode must be alphanumeric and up to 10 characters long.');
        }
        return customShortcode;
    }
    // Generate a unique shortcode if no custom shortcode is provided
    return uuidv4().slice(0, 8); // Shorten UUID to 8 characters
};

export const calculateExpiryDate = (validityPeriod: number): Date => {
    const expiryDate = new Date();
    expiryDate.setMinutes(expiryDate.getMinutes() + (validityPeriod || 30)); // Default to 30 minutes
    return expiryDate;
};