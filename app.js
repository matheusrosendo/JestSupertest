const express = require("express");
const app = express();

app.use(express.json());
app.post('/users', (req, res)=>{
    const {username, password} = req.body;
    if(username && password){
        res.status(200).send({
            userId: 1,
            message: "ok"
        })
    } else {
        res.status(400).send({
            message: "error, empty user or password"
        })
    }    
})

module.exports = app;