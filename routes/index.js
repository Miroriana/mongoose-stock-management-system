const express = require('express');
const stockRoutes = require('./stock.routes');
const allRoutes = express();


allRoutes.use('/stock',stockRoutes);

module.exports= allRoutes;