import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import LoggingMiddleware from './components/LoggingMiddleware';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoggingMiddleware>
        <Router>
          <AppRouter />
        </Router>
      </LoggingMiddleware>
    </ThemeProvider>
  );
};

export default App;