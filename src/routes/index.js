import express from "express"; 
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";


//esse arquivo da o caminho para o routes, indicando a onde deve ir e fazer oque.

//const de rotas
const routes = (app) => {
    app.route ('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de node"})
    })

    app.use(
        express.json(),
        livros,
        autores
    )
}

export default routes



