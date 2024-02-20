const db = require('../db')

module.exports = {
    buscarTodos: () => {
        return new Promise((accept, reject) => {
            db.query('SELECT * FROM carros', (err, result) => {
                if (err) { reject(err); return; }
                accept(result);
            });
        });
    },

    buscarUm: (codigo) => {
        return new Promise((accept, reject) => {
            db.query('SELECT * FROM carros WHERE codigo = ?', [codigo], (err, result) => {
                if (err) { reject(err); return; }
                if (result.length > 0) {
                    accept(result[0]);
                } else {
                    accept(false);
                }
            });
        });
    },
    inserir: (modelo, placa) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO carros (modelo, placa) VALUES (?, ?)', [modelo, placa], (err, result) => {
                if (err) { reject(err); return; }
                accept(result.insertCodigo);
            });
        });
    },

    alterar: (codigo, modelo, placa) => {
        return new Promise((accept, reject) => {
            db.query('UPDATE carros SET modelo = ?, placa = ? WHERE codigo = ?',
                [modelo, placa, codigo],
                (err, result) => {
                    if (err) { reject(err); return; }
                    accept(result);
                }
            );
        });
    },

    excluir: (codigo)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM carros WHERE codigo = ?',[codigo], (error, results ) =>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            });
        });
    }

};