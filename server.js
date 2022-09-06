import app from './src/app.js'
//importando a saida do express no arquivo app

const port = process.env.PORT || 3000;
//          porta em produção OU porta local


app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})
//listen que identifica a porta e retorna se o servidor estiver ativo com o link para seu uso
