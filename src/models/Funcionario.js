const Pessoa = require('./Pessoa');

class Funcionario extends Pessoa {
  constructor(id, nome, cpf, matricula) {
    super(id, nome, cpf);
    this.matricula = matricula;
  }
}

module.exports = Funcionario;