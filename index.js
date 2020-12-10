const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

const app = express();
dbConnection();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`server running in port ${process.env.PORT}..`);
});