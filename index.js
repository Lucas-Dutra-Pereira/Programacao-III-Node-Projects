const express = require ('express')
const app = express()

app.get('/', function(req,res){
    res.send("Oi, sou o Sting, seja bem vindo à minha página Web")
})


app.get('/msg',function(req,res){
    res.send("Essa mensagem é automática!")
})

app.listen(3000,function(){
    console.log("Conexão Inicializada")
})
