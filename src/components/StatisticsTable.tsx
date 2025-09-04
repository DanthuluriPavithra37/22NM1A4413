import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface ClickData {
    timestamp: string;
    source: string;
    location: string;
}

interface ShortenedUrl {
    shortUrl: string;
    originalUrl: string;
    creationDate: string;
    expiryDate: string;
    clickCount: number;
    clickData: ClickData[];
}

interface StatisticsTableProps {
    shortenedUrls: ShortenedUrl[];
}

const StatisticsTable: React.FC<StatisticsTableProps> = ({ shortenedUrls }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Shortened URL</TableCell>
                        <TableCell>Original URL</TableCell>
                        <TableCell>Creation Date</TableCell>
                        <TableCell>Expiry Date</TableCell>
                        <TableCell>Click Count</TableCell>
                        <TableCell>Click Data</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {shortenedUrls.map((url) => (
                        <TableRow key={url.shortUrl}>
                            <TableCell>{url.shortUrl}</TableCell>
                            <TableCell>{url.originalUrl}</TableCell>
                            <TableCell>{url.creationDate}</TableCell>
                            <TableCell>{url.expiryDate}</TableCell>
                            <TableCell>{url.clickCount}</TableCell>
                            <TableCell>
                                {url.clickData.map((click, index) => (
                                    <div key={index}>
                                        {click.timestamp} - {click.source} - {click.location}
                                    </div>
                                ))}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default StatisticsTable;