const express =require("express");
const port=3001;
const app=express();
const products=[{
    id : 1001,
    title: "laptop",
    price: 5500.0,
    quantities:10
}];
app.use(express.json())

app.get("/products",(req,res)=>{
    res.status(200);
    res.json(products);
})

app.get("/product/:id",(req,res)=>{
    const pid=parseInt(req.params.id);
    console.log('pid=',pid);
    
    const index=products.findIndex(ind=>ind.id==pid);
    let foundProduct={};
    if(index==-1){
        res.status(400);
        res.json({status: "fail", message: "Product id not found"});
    }
    else{
        foundProduct = products[index]
        res.status(200);
        res.json({status: "sucess", message: "Product id found", foundProduct});
    }
})
app.post("/products",(req,res)=>{
    const {id,title,price,quantities}=req.body;
    if(!id || !title || !price ||!quantities){
        res.status(400);
        res.json({status: "fail", message: "all field are required"})
    }
    else{
        const newProduct={
            id,title,price,quantities
          
        }
        products.push(newProduct);
        res.status(201);
        res.json({status: "sucess", message:"product creates sucessfully". newProduct});
    }
})
   
app.listen(port,(err)=>{
    try{
        if(err) throw err;
        else
            console.log('Server is running on port ${port}')    
    }
    catch(err){
        console.log("server error:",err.message);
        
    }
})