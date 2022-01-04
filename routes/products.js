const express= require('express');
const router= express.Router();
const productsController= require('../controllers/productsController')

const path = require('path');

const options = {
    root: path.join(__dirname, '../views')
};
//Routes Products
router.get('/', productsController.index);
router.get('/index', productsController.index);
router.get('/create', productsController.create);
router.get('/:id', productsController.detail);
router.get('/detailsProducts', productsController.detail);
router.get('/detailsProducts/:id', productsController.detail);
//router.get('', productsController.detail);
//export Modules
module.exports= router;
