const express = require('express');
const app= express();
app.use('/', (req,res)=>{
    res.send("Hello DEV Team I'm Node!!!")
})

app.listen(3000, (req,res)=>{
    console.log("Hello Node!!!");
})