//declarando constantes
const express = require('express');
const app = express();
const path= require('path');
const RouteMain= require('./routes/main');
const RouteProducts = require('./routes/products');
const publicPath= path.resolve(__dirname, '/public');


//Methods 
app.listen(process.env.PORT || 3000, function() {
    
    console.log('Servidor corriendo en puerto 3000');
});

app.use(express.static('public'));

app.set('views engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', RouteMain);

//Routes Products
app.use('/products', RouteProducts);
app.use('/products/detailsProducts', RouteProducts);




//app.use(express.json());
//app.use(express.urlencoded({extended: true}))
// app.post('/', (req,res)=>{
//     console.log(req.body);
//     res.sendFile(__dirname + '/views/login.html');
// });


