const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, './public'); 
app.use(express.static(publicPath));

app.listen(3080, ()=>{
    console.log("servidor corriendo en el puerto http://localhost:3080");
});

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});


app.get('/productCart', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/productCart.html'));
});

app.get('/productDetail',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/productDetail.html'));
})