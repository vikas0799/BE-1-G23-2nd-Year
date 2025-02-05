const express=require('express');
const app=express();


// app.use(express.static('public'));
app.use('/static',express.static('assets'));
// ...

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});