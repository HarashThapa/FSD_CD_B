const express=require("express");
const port=3001;
const app=express();
app.get("/users",(req,res)=>{
    res.send(" view users data");
})
app.get("/users",(req,res)=>{
    res.send("post request to create user");
})
app.get("/users",(req,res)=>{
    res.send(" patch request to update user data");
})
app.get("/users",(req,res)=>{
    res.send(" delete user data");
})
app.listen(port,()=>{
    console.log('server is running on port ${port}');
    
})
