const express=require('express');
const morgan=require('morgan');
const helmet=require('helmet');
const mongoose=require('mongoose');
const userRoute=require('./routes/users')
const authRoute=require('./routes/auth')
const postRoute=require('./routes/post')
require('dotenv').config();
const app=express();
app.use(helmet())
app.use(morgan("common"));

const PORT=process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useCreateIndex:true
}).then(()=>{
    console.log("MongoDB Connected");
}).catch(error=>{
    console.log(error);
})
app.use(express.json())

app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/post",postRoute)





app.listen(PORT,()=>{
    console.log("Server running")
})