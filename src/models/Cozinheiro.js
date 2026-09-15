const Funcionario = require('./Funcionario');

class Cozinheiro extends Funcionario {
  constructor(id, nome, cpf, matricula, especialidade) {
    super(id, nome, cpf, matricula);
    this.especialidade = especialidade;
  }

  create() {}
  read() {}
  update() {}
  delete() {}
}

module.exports = Cozinheiro;