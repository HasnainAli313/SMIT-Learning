import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("Hellow, World!");
})
app.post("/",(req,res)=>{
    res.send("This is post Method!")
})

app.listen(3000,()=>{
    console.log("listening on http://localhost:3000")
})