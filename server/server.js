import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const PORT=4000;
const app=express();


app.use(cors);


await mongoose.connect("mongodb+srv://peephole5layer:divyanshu002M@learn1.khin1pd.mongodb.net/?retryWrites=true&w=majority").then(() => console.log('MongoDB connection is successsful')).catch((err) => console.error(err));

app.get('/',(req,res) =>{
    res.send("hello world");
}
);

app.listen(PORT,() =>{
    console.log('server is running at http://localhost:4000');

});