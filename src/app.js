import express from "express";
//importando o express
import db from "./config/dbConnect.js"
//importando o banco de dados na cloud
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => { 
    console.log('conexão com o banco de dados feita com sucesso.')
})

const app = express();
//constante que guarda os metodos do express

app.use(express.json())
//para interpretar json enviado na requisição

routes(app);

// const livros = [
//     {id: 1, "titulo": "Senhor dos Aneis"},
//     {id: 2, "titulo": "O Hobbit"},
//     {id: 3, "titulo": "Harry Potter"}
// ];
//alterado para retornar os livros do banco de dados


// CRUD - METODOS HTTPS BASICOS com EXPRESS

//metodo http para enviar uma requisição
// app.get('/', (req, res) => {
//     res.status(200).send("Curso de Node");
// });
//requisição para o URL padrão (responde "curso de node")


// app.get('/livros', (req, res) => {
//     livros.find((err, livros) => {
//         res.status(200).json(livros)
//     })
// })
//requisição para URL /livros (responde os livros que está na constante livros)


// app.get('/livros/:id', (req, res) => {
//     let index = buscaLivro(req.params.id) //params.id tras o id passado na url
//     res.json(livros[index]);
// })

// app.post('/livros', (req, res) => {
//     livros.push(req.body);
//     res.status(201).send('Livro foi cadastrado com sucesso')
// });

// app.put('/livros/:id', (req, res) => {
//     let index = buscaLivro(req.params.id) //params.id tras o id passado na url
//     livros[index].titulo = req.body.titulo
//     res.json(livros)
// })

// app.delete('/livros/:id', (req, res) => {
//     let {id} = req.params; //params.id tras o id passado na url
//     let index = buscaLivro(id);
//     livros.splice(index, 1);
//     res.send(`Livros ${id} removido`)
// })
// function buscaLivro(id){
//     return livros.findIndex(livro => livro.id == id)
// }

export default app;
//exportando metodos e requisições para chamar em outro arquivo

