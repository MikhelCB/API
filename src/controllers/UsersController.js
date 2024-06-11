const AppError = require("../utils/AppError");

class UsersController {
  create(request, response) {
    const { name, email, password } = request.body;

    if (!name) {
      throw new AppError("O nome é obrigatório!");
    }

    response.status(201).json({ name, email, password });
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
