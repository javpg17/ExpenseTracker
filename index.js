const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

const app = express();
dbConnection();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

// Controllers
app.use('/api/user', require('./features/users/usersController'));

app.listen(process.env.PORT, () => {
    console.log(`server running in port ${process.env.PORT}..`);
});