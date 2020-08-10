const{
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses,
    pagesuccess
}= require('./pages')
//Servidor
const express = require('express')
const server = express()

//configurar nunjucks(template engine)
const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
//inicio e config servidor
server
//receber os dados do rec body
.use(express.urlencoded({extended: true}))
//configurar arquivos estáticos(css, scripsts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/success", pagesuccess)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)
