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

    

};