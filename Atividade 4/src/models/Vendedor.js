const Funcionario = require('./Funcionario');

class Vendedor extends Funcionario {
  constructor(id, nome, cpf, matricula, salario, metaVendas) {
    super(id, nome, cpf, matricula, salario);
    this.metaVendas = metaVendas;
  }

  create() {}
  read() {}
  update() {}
  delete() {}
}

module.exports = Vendedor;