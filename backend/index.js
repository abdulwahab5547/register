// Importing express - a framework of Node.js
import express from 'express';

// Creating an express application
const app = express()


// Importing and Configuring dotenv
import dotenv from 'dotenv';
dotenv.config();

// Importing cors
import cors from 'cors';
app.use(cors({ origin: '*' }));
// // Enable CORS for all origins
// const corsOptions = {
//   origin: 'https://register-blush.vercel.app', // Replace with your frontend's URL
//   methods: 'GET,POST,PUT,DELETE',
//   allowedHeaders: 'Content-Type,Authorization'
// };

// app.use(cors(corsOptions));

app.get('/data', (req, res) => {
    res.json({ message: 'Backend connected properly.' });
});

app.get('/', (req, res) => {
    res.send('server started');
});

app.get('/server', (req, res) => {
    res.send('The server has started');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
