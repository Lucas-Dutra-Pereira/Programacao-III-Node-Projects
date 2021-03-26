const express = require ('express')
const app = express()

app.get('/', function(req,res){
    res.send("Oi, sou o Sting, seja bem vindo à minha página Web")
})


app.listen(3000,function(){
    console.log("Conexão Inicializada na Porta 3000")
})