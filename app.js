if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const app = express();
const cors = require('cors');

// In App Module
const router = require('./routes');
const errorHandler = require('./middlewares/handleError');

// The Config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// The Router
app.use(router);
// Midlleware error handling
app.use(errorHandler);

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });

module.exports = app;