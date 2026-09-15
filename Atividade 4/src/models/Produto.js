class Produto {
  constructor(id, codigo, nome, descricao, preco) {
    this.id = id;
    this.codigo = codigo;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
  }

  create() {}
  read() {}
  update() {}
  delete() {}
}

module.exports = Produto;