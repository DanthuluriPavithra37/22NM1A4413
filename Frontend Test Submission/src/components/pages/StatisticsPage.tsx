import React, { useEffect, useState } from 'react';
import { Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import StatisticsTable from '../components/StatisticsTable';
import { fetchStatistics } from '../utils/urlHelpers';
import { useLogging } from '../components/LoggingMiddleware';

const StatisticsPage: React.FC = () => {
    const [statistics, setStatistics] = useState([]);
    const [loading, setLoading] = useState(true);
    const logger = useLogging();

    useEffect(() => {
        const getStatistics = async () => {
            try {
                const data = await fetchStatistics();
                setStatistics(data);
            } catch (error) {
                logger.error('Failed to fetch statistics', error);
            } finally {
                setLoading(false);
            }
        };

        getStatistics();
    }, [logger]);

    if (loading) {
        return (
            <Container>
                <Typography variant="h6">Loading statistics...</Typography>
            </Container>
        );
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                URL Shortener Statistics
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Shortened URL</TableCell>
                            <TableCell>Creation Date</TableCell>
                            <TableCell>Expiry Date</TableCell>
                            <TableCell>Click Count</TableCell>
                            <TableCell>Click Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {statistics.map((stat) => (
                            <StatisticsTable key={stat.shortenedUrl} stat={stat} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default StatisticsPage;