const express = require('express');

const app = express();
const port = 3000;

// http://localhost:3000/payment

// http://localhost:3000/payment?otp=5678
const verify=(req,res,next)=>{
    //otp verification code
    if(req.query.otp==='1234'){
    console.log('Verified middleware  OTP');
        next();
    }else{
        res.send('OTP is wrong');
    }
}



app.use((req, res, next) => {
    //universal middleware
    console.log('Time:', Date.now());
    next();
})
app.use('/payment', verify,(req, res, next) => {
    //middleware for /payment
    console.log('Payment done');
    next();
})


app.use('/g23', (req, res, next) => {
console.log('G23 middleware');
next();
});


app.get('/', (req, res) => {
    res.send('Hello G23 Payment Page');
});

app.get('/payment', (req, res) => {
    res.send('Payment Page');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});