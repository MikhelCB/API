const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");
const { response } = require("express");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection();
    const checkUserExists = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso.");
    }
    return response.status(201).json();
  }
}

module.exports = UsersController;

/*
* Index - GET para listar vários registros.
*show = GET para exibir um registro específico.
* Create - POST para criar um registro.
*Update - PUT para atualizar um registro.
Delete - DELETE para remover um registro.
*/
