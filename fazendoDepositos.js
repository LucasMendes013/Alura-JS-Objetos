const cliente = {
    nome: 'andre',
    idade: 36,
    cpf: '123456789',
    email: 'andre@gmail.com',
    fone: ["55555555", '666666666'],
    dependentes: [
        {
            nome: 'Sara',
            parentesco: 'filha',
            dataDeNascimento: '20/03/2011'},
        {
            nome: 'samila maria',
            parentesco: 'filha',
            dataNasc: '17/04/2014'
        }   
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    },
    retirar: function(valor){
        this.saldo -= valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
cliente.retirar(60)
console.log(cliente.saldo)