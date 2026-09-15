class Usuario {
    constructor(cpf, nome, id_usuario) {
        this.cpf = cpf;
        this.nome = nome;
        this.id_usuario = id_usuario;
    }
}

class livro {
    constructor(nome, autor, edicao, id_livro) {
        super(nome);
        this.autor = autor;
        this.edicao = edicao;
        this.id_livro = id_livro;
    }
}

class Emprestimo extends Usuario{
    constructor(id_livro, nomeLivro) {
        super(id_livro, nomeLivro);
    }
}

class Devolucao extends livro{
    constructor(id_usuario, dataDevolucao){
        super(id_usuario);
        this.dataDevolucao = dataDevolucao;
    }
}

class Reserva {
    constructor(nomeLivro, id_usuario, dataReserva){
        super(nomeLivro, id_usuario);
        this.dataReserva = dataReserva;
    }
}