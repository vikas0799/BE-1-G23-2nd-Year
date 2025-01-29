const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');


app.get('/index', (req, res) => {   
res.render('index');
});

app.get('/random', (req, res) => {  
    //data fetching form database or file
    let todo=["Apple","Banana","Orange","Grapes","Mango","Pineapple","Watermelon","Strawberry","Peach","Kiwi"]; 
      let name="Rajesh";
      let arpit={
        name:"Arpit uppal",
        age:20,
        dist:"yamunanagr",
        college:"Chitkara university",
      }
    res.render('random',{finalName:name,fruits:todo,arpit:arpit});
  });

  

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
