const Pessoa = require('./Pessoa');

class Funcionario extends Pessoa {
  constructor(id, nome, cpf, matricula, salario) {
    super(id, nome, cpf);
    this.matricula = matricula;
    this.salario = salario;
  }
}

module.exports = Funcionario;