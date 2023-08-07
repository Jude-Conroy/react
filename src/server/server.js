const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
const serverExpress = express();
const httpServer = require('http').createServer(serverExpress);
const NotificationManager = require('./Notifications/NotificationManager');

// Configure CORS options
const corsOptions = {
    origin: ['http://localhost:3000'], // Same origins as your Express server
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"]
};

// Apply CORS middleware
serverExpress.use(cors(corsOptions));
serverExpress.use(bodyParser.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: '5432',
});

const notificationManager = new NotificationManager(httpServer);

serverExpress.get('/api/trading', async (req, res) => {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM public.trading');
        res.json(result.rows);
    } finally {
        client.release();
    }
});

serverExpress.get('/api/alerts', async (req, res) => {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM public.alerts');
        res.json(result.rows);
    } finally {
        client.release();
    }
});

serverExpress.get('/api/reports', async (req, res) => {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM public.reports');
        res.json(result.rows);
    } finally {
        client.release();
    }
});

serverExpress.post('/login', (req, res) => {
    const {username, password} = req.body;

    // Mock user data for the sake of example
    const mockUserData = {
        username: 'mockuser',
        password: 'mockpassword',
        token: 'mockJwtToken123456',
        role: 'admin',
    };

    // Mock a successful login
    if (username === mockUserData.username && password === mockUserData.password) {
        res.json({
            success: true,
            token: mockUserData.token,
            role: mockUserData.role
        });
        notificationManager.sendNotificationToAll("This is the server speaking");

    } else {
        // Mock a failed login
        res.status(401).json({
            success: false,
            message: 'Incorrect username or password.'
        });
    }
});

serverExpress.get('/api/status', async (req, res) => {
    try {
        // Simulating the data, replace this with your actual query to the service
        const results = [
            { id: 1, name: 'Service 1', status: 'OK', location: 'US'},
            { id: 2, name: 'Service 2', status:  'Not OK', location: 'EU' },
        ];

        // Send the results as JSON
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while querying the services' });
    }
});

httpServer.listen(5000, () => {
    console.log('serverExpress is running on port 5000');
});


