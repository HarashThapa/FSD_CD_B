const http=require("http");
const port=3005;
const server=http.v=http.createServer(async(req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.statusCode=200;
    const data=await fetch("https://dummyjson.com/recipes");
    console.log(data)
    const jsondata =await data.json();
    console.log(jsondata)
    const newData=jsondata.recipes;
    console.log(newData)
    const names=newData.map((re)=>{
        return re.name;

    })
    res.write(JSON.stringify(names));
    res.end();

})
server.listen(port,(err)=>{
    try{
        if(err){
        console.log('Server is running on port ${port}');
    }
    }catch(err){
        console.log("Server Error",err.message);
    }

    

})