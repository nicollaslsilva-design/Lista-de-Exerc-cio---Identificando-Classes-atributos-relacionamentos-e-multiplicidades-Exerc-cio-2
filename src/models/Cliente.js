const Pessoa = require('./Pessoa');

class Cliente extends Pessoa {
  constructor(id, nome, cpf, telefone) {
    super(id, nome, cpf);
    this.telefone = telefone;
  }

  create() {}
  read() {}
  update() {}
  delete() {}
}

module.exports = Cliente;