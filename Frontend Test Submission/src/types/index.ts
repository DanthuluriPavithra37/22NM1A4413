export interface ShortenedUrl {
    originalUrl: string;
    shortenedUrl: string;
    expiryDate: Date;
    validityPeriod: number; // in minutes
    customShortcode?: string;
    clickCount: number;
    clickData: ClickData[];
}

export interface ClickData {
    timestamp: Date;
    source: string;
    location: string; // coarse-grained geographical location
}

export interface UrlShortenerFormInputs {
    originalUrl: string;
    validityPeriod?: number;
    customShortcode?: string;
}

export interface LoggingEvent {
    eventType: string;
    message: string;
    timestamp: Date;
}