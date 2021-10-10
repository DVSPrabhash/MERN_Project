const app = require('./app')
const connectDatabase = require('./config/database')


const dotenv = require('dotenv');
const cloudinary = require('cloudinary')

//setup config 
dotenv.config({path:'backend/config/config.env'})


// database connect to the server
connectDatabase();



//cloudanary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})




app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})