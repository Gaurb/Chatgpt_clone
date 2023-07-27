const errorHandler = require('./middlewares/errorMiddleware');
const express=require('express');
const morgan= require('morgan');
const bodyParser= require('body-parser');
const colors= require('colors');
const cors= require('cors');
const dotenv= require('dotenv');
const connectDB = require('./config/db');
const authRoutes= require('./routes/authRoutes');
// dotenv
dotenv.config();

// mongo connection
connectDB();


// rest object
const app= express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(errorHandler);

const PORT= process.env.PORT || 8080

// API routes
app.use("/api/v1/auth",authRoutes);


// listen server
app.listen(PORT,()=>{
    console.log(`server is running in ${process.env.DEV_MODE} on port no, ${PORT}`);
});