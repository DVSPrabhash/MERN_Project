const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')

const bodyparser = require('body-parser')

//const cloudinary = require('cloudinary')commmnet kra mnm
const fileUpload = require('express-fileupload')


const errorMiddleware = require('./middlewares/errors')

app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cookieParser())
app.use(fileUpload());





//import all the routes in here

const products = require('./routes/product');
const auth = require('./routes/auth');
const bodyParser = require('body-parser');

app.use('/api/v1', products)
app.use('/api/v1', auth)

//middleware 2 handling error
app.use(errorMiddleware);


module.exports = app