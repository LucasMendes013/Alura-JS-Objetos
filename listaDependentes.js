const cliente = {
    nome: 'andre',
    idade: 36,
    cpf: '123456789',
    email: 'andre@gmail.com',
    fone: ["55555555", '666666666'],
    dependentes: [{
        nome: 'Sara',
        parentesco: 'filha',
        dataDeNascimento: '20/03/2011'
    }]
}

cliente.dependentes.push({
    nome: 'samila maria',
    parentesco: 'filha',
    dataNasc: '17/04/2014'
})
console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="17/04/2014")

console.log(filhaMaisNova[0].dataNasc)