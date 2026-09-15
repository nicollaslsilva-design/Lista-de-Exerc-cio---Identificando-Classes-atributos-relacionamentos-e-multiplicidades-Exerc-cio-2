class Pagamento {
  constructor(id, valor, data, formaPagamento) {
    this.id = id;
    this.valor = valor;
    this.data = data;
    this.formaPagamento = formaPagamento;
  }

  create() {}
  read() {}
  update() {}
  delete() {}
}

module.exports = Pagamento;