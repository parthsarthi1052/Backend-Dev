let http=require("http")
// console.log(http);

let Server=http.createServer((req,res)=>{
    console.log("server is running....");
    res.end("insta home page");
})


Server.listen(4000);