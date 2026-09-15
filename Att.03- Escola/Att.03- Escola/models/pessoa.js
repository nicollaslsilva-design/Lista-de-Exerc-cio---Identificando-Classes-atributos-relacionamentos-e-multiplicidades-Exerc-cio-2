class Pessoa {
    constructor(nome, cpf, dataNascimento) {
    this.cpf = cpf;
    this.nome = nome;
    this.dataNascimento = dataNascimento 
    }
}

class Aluno extends Pessoa {
    constructor(cpf, nome, dataNascimento, matricula) {
        super(cpf,nome,dataNascimento);
        this.cpfmatricula = matricula;
    }
}

class Professor extends Pessoa {
    constructor(cpf, nome, ensinnosuperior, dataNascimento, matriculaFormativa) {
        super(cpf, nome, dataNascimento);
        this.ensinnosuperior = ensinnosuperior;
        this.matriculaFormativa = matriculaFormativa;
    }
}

class Turma {
    constructor(sala, turno, horarios) {
        this.sala = sala;
        this.turno = turno;
        this.horarios = horarios;
    }
}

class dissiplina {
    constructor(nome, codigo, materia, cargaHoraria) {
        super(nome);
        this.codigo = codigo;
        this.materia = materia;
        this.cargaHoraria = cargaHoraria;
    }
}