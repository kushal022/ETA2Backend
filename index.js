const express = require('express')
const app = express();
const cors = require('cors');
const morgan = require('morgan')
const colors = require('colors');
const dotenv = require('dotenv');
const connectDb = require('./config/connectDb');

const path = require('path') // for static file


dotenv.config();
const PORT = process.env.PORT || 3500;

//Connect DB
connectDb();

//Middlewares:
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());

//import routes:
const userRoutes = require('./routes/userRoute');
const transactionRoutes = require('./routes/transactionRoute');

//Routes
app.get('/',(req,res)=>{
    res.send("Hello from Home Page")
})

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/transaction', transactionRoutes);


//todo: ------------- Static Files ------------------
// app.use(express.static(path.join(__dirname,'./client/dist')));
// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname,'./client/dist/index.html'))
// });


//Server Listen
app.listen(PORT , ()=>{
    console.log(`Server is listening at ${PORT}`)
})