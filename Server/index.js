import express from'express';
import mongoose from 'mongoose';
import route from './Router/route.js';
import cors from 'cors'
// import "dotenv/config.js"
const ex=express();

ex.use(cors())
ex.use(express.json())
ex.use('/vehicle',route)
mongoose.connect("mongodb+srv://prathap6047:FSVO3d7xg4wtceDm@cluster0.f80a0fz.mongodb.net/vehilcesdata")
// FSVO3d7xg4wtceDm

// (String(process.env.MONGO_DB_URL))
.then(
    console.log('Db connect succesfull....'),
    ex.listen(5000,()=>{console.log('server connected...')})

)










