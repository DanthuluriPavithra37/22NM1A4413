# React URL Shortener App

## Overview
The React URL Shortener App is a user-friendly application that allows users to shorten URLs and view analytical insights about the shortened links. The application is built using React and Material UI, providing a clean and responsive interface.

## Features
- Shorten up to 5 URLs concurrently.
- Option to specify a validity period for shortened URLs (default is 30 minutes).
- Custom shortcodes can be provided, ensuring uniqueness.
- Displays shortened URLs along with their expiry dates.
- Statistics page showing all shortened URLs with click data and timestamps.
- Client-side validation for user inputs.
- Robust error handling with user-friendly messages.

## Project Structure
```
react-url-shortener-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── UrlShortenerForm.tsx
│   │   ├── UrlShortenerResult.tsx
│   │   ├── StatisticsTable.tsx
│   │   └── LoggingMiddleware.tsx
│   ├── pages
│   │   ├── ShortenerPage.tsx
│   │   ├── StatisticsPage.tsx
│   │   └── RedirectPage.tsx
│   ├── routes
│   │   └── AppRouter.tsx
│   ├── utils
│   │   ├── validation.ts
│   │   └── urlHelpers.ts
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── theme.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd react-url-shortener-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Application
To start the application, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

## Usage
- Navigate to the URL Shortener page to input your long URLs, validity period, and optional shortcode.
- After submission, the shortened URLs will be displayed along with their expiry dates.
- Visit the Statistics page to view all shortened URLs and their click statistics.

## Logging
The application includes a logging middleware that captures and logs relevant events and errors throughout the application for better debugging and monitoring.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.