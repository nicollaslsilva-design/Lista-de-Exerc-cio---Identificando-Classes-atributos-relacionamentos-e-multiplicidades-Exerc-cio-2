const Funcionario = require('./Funcionario');

class Garcom extends Funcionario {
  constructor(id, nome, cpf, matricula, turno) {
    super(id, nome, cpf, matricula);
    this.turno = turno;
  }

  create() {}
  read() {}
  update() {}
  delete() {}
}

module.exports = Garcom;