const express=require("express");
const app=express();

// middleware will work for all the requests and then further things will be handled...

app.use((req,res,next)=>{
    let out=`url=${req.url} and adress is ${req.ip}`
    console.log(out);
    // res.send(out);
    next();
    
})

// Middleware-1
app.use((req,res,next)=>{
    console.log("middleware 1 RESPONSIBLE FOR MOBILE OTP");

    // authentication
let auth=true;
if(!auth){
    res.send("auth failed...try again")
}else
    next();
    
})

// Middleware-2

app.use((req,res,next)=>{
    console.log("middleware 2 responsible for email auth");

    // authentication
let auth=true;
if(!auth){
    res.send("email auth failed...try again")
}else
    next();
    
})


app.get("/",(req,res)=>{
    console.log("I am here");
  res.send("home page...")
})

app.use((req,res)=>{
    res.send("404 Not Found...")
})

app.listen(3000,()=>{
    console.log("Server is running at 3000");
    
})