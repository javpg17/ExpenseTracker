const express = requiere('express');
require('dotenv').config();
import cors from 'cors';
import { dbConnection } from './database/config';

const app = express();
dbConnection();
app.use(cors());
app.use.(express.static('public'));
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`server running in port ${process.env.PORT}..`);
});