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

let relatorio =''

for(let info in cliente){
    if(typeof cliente[info]=== 'object' ||typeof cliente[info] ==='function'){
        continue
    }else {
        relatorio += `${info} ==> ${cliente[info]}
        `
    }
}

console.log(relatorio)