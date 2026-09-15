class Pessoa {
    constructor(cpf, nome, email, dataNascimento) {
        this.cpf = cpf;
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
    }
}

class Aluno extends Pessoa {
    constructor(cpf, nome, email, dataNascimento, estudar, dataCadastro) {
        super(cpf, nome, email, dataNascimento);
        this.estudar = estudar;
        this.dataCadastro = dataCadastro;
    }
}

class Administrador extends Pessoa {
    constructor(cpf, nome, email, dataNascimento, setor, ensinoSuperior) {
        super(cpf, nome, email, dataNascimento);
        this.setor = setor;
        this.ensinoSuperior =ensinoSuperior;
    }
}

class Instrutor extends Pessoa {
    constructor(cpf, nome, email, dataNascimento, especialidade) {
        super(cpf, nome, email, dataNascimento);
        this.especialidade = especialidade;
    }
}

class Curso {
    constructor(nome, duracao, descricao, preco) {
        this.nome = nome;
        this.preco = preco;
        this.duracao = duracao;
        this.descricao = descricao;
    }
}

class Modulo extends Curso {
    constructor(nome, duracao, titulo, descricao, ordemDuracao) {
        super(nome, duracao, descricao);
        this.titulo = titulo;
        this.ordemDuracao = ordemDuracao;
    }
}

class Aula extends Modulo {
    constructor(titulo, duracao, conteudo) {
        super(duracao, titulo);
        this.conteudo = conteudo;
    }
}