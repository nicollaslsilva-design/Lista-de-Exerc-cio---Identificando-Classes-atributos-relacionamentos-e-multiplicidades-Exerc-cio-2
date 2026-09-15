class Pedido {
  constructor(id, numero, data, valorTotal, cliente, garcom, mesa) {
    this.id = id;
    this.numero = numero;
    this.data = data;
    this.valorTotal = valorTotal;
    this.cliente = cliente;
    this.garcom = garcom;
    this.mesa = mesa;
    this.itens = [];
  }

  create() {}
  read() {}
  update() {}
  delete() {}
}

module.exports = Pedido;