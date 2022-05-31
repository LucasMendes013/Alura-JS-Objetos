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

const propsClientes = Object.keys(cliente)

console.log(propsClientes)

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj)
    if(propsClientes.includes('dependentes')){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}
console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)