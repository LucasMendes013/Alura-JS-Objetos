const clientes = [
    {
        nome: 'andre',
        idade: 36,
        cpf: '123456789',
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
    },
    {
    nome: 'juliana',
    idade: 39,
    cpf: '1234533339',
    dependentes: [
        {
            nome: 'lucas',
            parentesco: 'neto',
            dataDeNascimento: '26/01/2020'}],
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]
console.log(listaDependentes)