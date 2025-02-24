const http=require("http");
const port=3004;
const server=http.createServer((req,res)=>{
    const data=[{
        "id":"1",
        "name":"Harash",
        "email":"Harash@gmail.com"
    },{
        "id":"2",
        "name":"Harash",
        "email":"Harash@gmail.com"
    },{
        "id":"3",
        "name":"Harash",
        "email":"Harash@gmail.com"
    }];
    data.map((i)=>{
        const rdata="<p>"+i.name+" "+i.email+" </p>";
        res.write(rdata);
    })
    res.end();


})

server.listen(port,(err)=>{
    try{
        if(err) throw err;
        console.log("Server is running");
        
    }
    catch(err){
        console.log("Server error",err.message);
        
    }

})