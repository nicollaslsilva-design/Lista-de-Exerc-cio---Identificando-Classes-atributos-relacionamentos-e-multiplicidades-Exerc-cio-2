const Funcionario = require('./Funcionario');

class Gerente extends Funcionario {
  constructor(id, nome, cpf, matricula, salario, setor) {
    super(id, nome, cpf, matricula, salario);
    this.setor = setor;
  }

  create() {}
  read() {}
  update() {}
  delete() {}
}

module.exports = Gerente;