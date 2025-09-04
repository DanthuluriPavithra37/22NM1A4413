import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShortenerPage from '../pages/ShortenerPage';
import StatisticsPage from '../pages/StatisticsPage';
import RedirectPage from '../pages/RedirectPage';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ShortenerPage} />
                <Route path="/statistics" component={StatisticsPage} />
                <Route path="/:shortcode" component={RedirectPage} />
            </Switch>
        </Router>
    );
};

export default AppRouter;