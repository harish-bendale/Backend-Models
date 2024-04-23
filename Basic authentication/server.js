const express = require('express');
const app = express();
const Port = 4000;
const authMiddleWare = require('./auth.js');

app.use(authMiddleWare);

app.get('/',(req,res)=>{
 res.send("Hello There")
})
app.listen(Port,() =>{
    console.log(`App is listening At port No '${Port}'`);
});
