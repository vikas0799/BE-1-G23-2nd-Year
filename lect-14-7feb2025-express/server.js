const express = require('express');

const app = express();
const port = 3000;

// app.use(express.static('public'));
app.use((req, res, next) => {
    console.log("middleware 1");
    next();
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});