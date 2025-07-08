const express=require('express');
const app=express();
require('dotenv').config();
const cors=require('cors');
const {connectDb}=require('./db/connect');

const userRouter=require('./routes/user')

app.use(cors())
app.use(express.json());

app.use('/user',userRouter);
// app.get('/addData')
app.use('/app',require('./routes/index'));

const PORT=process.env.PORT || 3000;
const start=async()=>{
    try {
        await connectDb(process.env.MONGO_URI);;
        app.listen(PORT,()=>{
            console.log(`server is running on port ${PORT}`);
        })

    } catch (error) {
        console.log(`Error connecting to the database: ${error.message}`);
    }
}

start();

