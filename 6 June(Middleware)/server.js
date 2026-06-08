const express=require("express");
const app=express();

const data=require("./data.json")
console.log(data);


app.use((req,res,next)=>{
    console.log(`${req.url} and adress is ${req.ip}`);
    next();
})

app.get("/data",(req,res)=>{
    res.send(data);
})

app.get("/",(req,res,next)=>{
    res.send({
        "name":"Parth",
        age:21
    })
})

app.listen(4000,()=>{
    console.log("server running at 4000");
    
})