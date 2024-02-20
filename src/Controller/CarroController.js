const CarroService = require('../Services/CarroService.js');

module.exports = {
    buscarTodos: async (require, response) => {
        let json = { error: '', result: [] };

        let carros = await CarroService.buscarTodos();

        for (let i in carros) {
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo
            });

        }
        response.json(json);
    },

    buscarUm: async (require, response) => {
        let json = { error: '', result: {} };

        let codigo = require.params.codigo;

        let carro = await CarroService.buscarUm(codigo);

        if (carro) {
            json.result = carro;
        }
        response.json(json);
    },

    

};