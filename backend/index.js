// Importing express - a framework of Node.js
import express from 'express';

// Creating an express application
const app = express()

// Importing and Configuring dotenv
import dotenv from 'dotenv';
dotenv.config();

// Importing cors
import cors from 'cors';

// Enable CORS for all origins
app.use(cors());

app.get('/data', (req, res) => {
    res.json({ message: 'Backend connected properly.' });
});

app.get('/', (req, res) => {
    res.send('server started');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});