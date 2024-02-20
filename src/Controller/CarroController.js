const { response } = require('express');
const CarroService = require('../Services/CarroService.js');
const { json } = require('body-parser');

module.exports = {
    buscarTodos: async (require, response) => {
        let json = { error: '', result: [] };

        let carros = await CarroService.buscarTodos();

        for (let i in carros) {
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo,
                placa: carros[i].placa
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

    inserir: async (require, response) => {
        let json = { error: '', result: {} };

        let modelo = require.body.modelo;
        let placa = require.body.placa;
        
        if (modelo && placa){
            let CarroCodigo = await CarroService.inserir(modelo, placa);
            json.result = {
                codigo: CarroCodigo,
                modelo,
                placa
            };
        }else {
            json.error = 'Campos não enviados';
        }
            response.json(json);
    },

    alterar: async(require, response) => {
        let json = {error:'', result:{}};

        let codigo = require.params.codigo;
        let modelo = require.body.modelo;
        let placa = require.body.placa;

        if (codigo && modelo && placa){
            await CarroService.alterar(codigo, modelo, placa);
            json.result = {
                codigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados';
        }
        response.json(json);
    },

    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await CarroService.excluir(req.params.codigo);
        
        res.json(json);
    },

};