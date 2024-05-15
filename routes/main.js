const express = require('express');
const main = express.Router();
// const cors = require('cors');

// // Initialize CORS middleware
// const corsOptions = {
//     credentials: true,
//     origin: 'http://localhost:5173'
// };
// const corsMiddleware = cors(corsOptions);

// // Use CORS middleware in the router
// main.use(corsMiddleware);

main.get('/', (req, res) => {
    res.json("Frontend and Backend Connected! ");
});

module.exports = main;
