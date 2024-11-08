const ex=require(‘express);
const app=express();
app.get(‘/message’,(req,res) =>{
res.json({message : “Hello World!”});
});
const port=8080;
app.listen(port,()=>{
console.log(‘Server is running’);
});

