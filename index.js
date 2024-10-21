const express = require('express')
const { cp } = require('fs')
const app = express()

app.get("/", (request, response)=>{
    response.send("<h1>Minha primeira rota!</h1>")
})

app.get("/cadastro/:nome?", (request, response)=>{
    let nome = request.params.nome
    if(nome) {
        response.send("<h1>Usuário cadastrado com sucesso!</h1> <br> <h2>Bem-vindo</h2> <strong> " + nome + "</strong>!")
    } else {
        response.send("Cadastro incompleto!")
    }
})

app.get("/consulta/", (request, response)=> {
    let cpf = request.query["cpf"]

    if(cpf) {
        response.send("Seu cpf: <strong>" + cpf + "</strong>")

    } else {
        response.send("Cpf não encontrado")
    }
})

app.listen(4000, (error)=>{
    if(error) {
        console.log("Erro ao iniciar")
    } else {
        console.log("Servidor iniciado")
    }
})