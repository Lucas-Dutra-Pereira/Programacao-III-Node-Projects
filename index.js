const express = require ('express')
const app = express()

app.get('/', function(req,res){
    res.send("Oi, sou o Sting, seja bem vindo à minha página Web")
})


app.get('/msg',function(req,res){
    res.send("Essa mensagem é automática!")
})

app.get('/layout',function(req,res){
    res.send("Esse é o novo Layout!")
})

app.listen(3000,function(){
    console.log("Conexão Inicializada")
})

