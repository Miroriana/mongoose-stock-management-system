const express = require('express');
const stockRouter = express.Router();
const {record,update,remove,list,findById} = require('../controllers/stock-controller');
const { routes } = require('./user.routes');


stockRouter.post('/add',record);
stockRouter.get('/list',list);
stockRouter.put('/update',update);
stockRouter.delete('/delete',remove);
stockRouter.get('/findById',findById);

module.exports= stockRouter;