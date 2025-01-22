const express=require('express');
const app=express();



app.get('/',(req,res)=>{
    res.send('Hello World g23');
});


app.get('/search',(req,res)=>{
    // console.log(req.query);
    //dataset se req.query ki help se data ko fetch kar s
  let NAME=req.query.name;
  let age=req.query.age;
  console.log(typeof(age));
//   if(age>18){
//     res.send('You are eligible');
//   }
//   else{
//       res.send('You are not eligible');
//   }
    // res.send(`You are searching somethings ${age} with name ${NAME}`);

if(age===undefined){
    res.send('Please provide age');
}
else{
    res.send(`You are searching somethings ${age} with name ${NAME}`);
}
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});