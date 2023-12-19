require('dotenv').config();


const allRoutes =require ('./routes');
const {connectDb} = require('./db/databaseController');

const express = require('express');
const app = express();
connectDb();
app.use(express.json());
app.use('/api/sms/v1',allRoutes);

app.listen(process.env.PORT, (req, res) =>{
    console.log(`server listening on port ${process.env.PORT}`);
});