class Pedido {
  constructor(id, numero, data, status, cliente, vendedor, pagamento) {
    this.id = id;
    this.numero = numero;
    this.data = data;
    this.status = status;
    this.cliente = cliente;
    this.vendedor = vendedor;
    this.pagamento = pagamento;
    this.itens = [];
  }

  create() {}
  read() {}
  update() {}
  delete() {}
}

module.exports = Pedido;