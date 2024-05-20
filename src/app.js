const express = require('express');
const app = express();
const addressRoutes = require('./routes/addressRoutes');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const sequelize = require('./config/dbConfig');
const User = require('./models/userModel');
const Address = require('./models/addressModel');
const searchRoutes = require('./routes/searchRoutes');

dotenv.config();

app.use(express.json());

app.use('/addresses', addressRoutes);
app.use('/users', userRoutes);
app.use('/search', searchRoutes);


const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

module.exports = app;
