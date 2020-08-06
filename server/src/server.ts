import express from 'express';

const app = express();

// Corpo ( Request Body ): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

app.get('/', function (request, response) {
    return response.json({ message: "helo world" });
});

app.listen(3333);

