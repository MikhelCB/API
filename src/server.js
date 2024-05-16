const express = require("express");

const app = express();

app.get("/message/:id/:user", (resquest, response) => {
  const { id, user } = resquest.params;

  response.send(`
    Mensagem ID: ${id}. 
    Para o usuário: ${user}.
    `);
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
