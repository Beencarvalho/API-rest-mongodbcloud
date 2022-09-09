import autores from "../models/Autor.js"

class AutorController {

//METODOS CRUDE 

    //METODOS GET
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }
    static listarAutorPorId = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autores) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id do Autor não localizado.`})
            }else {
                res.status(200).send(autores);
            }
        })
    }

    //METODO PUSH
    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar Autor.`})
            } else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    //METODO PUT
    static atualizarAutor = (req, res) => {
        const id = req.params.id; //para saber o id que quer atualizar

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){ 
                res.status(200).send({message: 'Autor atualizado com suceso'})
            } else { 
                res.status(500).send({message: err.message})
            }
        })
    }
    
    //METODO DELETE
    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Autor Removido com sucesso.'})
            } else{
                res.status(500).send({message: err.message})
            }
        })
    }

};

export default AutorController