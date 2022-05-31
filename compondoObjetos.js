const cliente = {
    nome: 'andre',
    idade: 36,
    cpf: '123456789',
    email: 'andre@gmail.com',
    fone: ["55555555", '666666666']
}

cliente.dependente = {
    nome: 'Sara',
    parentesco: 'filha',
    dataDeNascimento: '20/03/2011'
}



console.log(cliente)

cliente.dependente.nome = 'Sara Silva'
cliente.dependente.parentesco = 'filha adotiva'
cliente.dependente.signo = 'capricornio'

console.log(cliente)
