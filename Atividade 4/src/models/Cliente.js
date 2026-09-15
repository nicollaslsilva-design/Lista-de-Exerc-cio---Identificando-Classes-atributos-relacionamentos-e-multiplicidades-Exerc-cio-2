const Pessoa = require('./Pessoa');

class Cliente extends Pessoa {
  constructor(id, nome, cpf, telefone, endereco) {
    super(id, nome, cpf);
    this.telefone = telefone;
    this.endereco = endereco;
  }

  create() {}
  read() {}
  update() {}
  delete() {}
}

module.exports = Cliente;