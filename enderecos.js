
var usuario = {
    nome: 'Fulano Beltrano Filho',
    idade: 34,
    enderecos: [
        { id: 1, rua: 'Lindolfo Color', numero: 104, bairro: 'Centro', cidade: 'São Leopoldo', estado: 'RS', cep: '93.000.000' },
    ]
}

usuario.enderecos.push({nome: "nome"})
console.log(usuario)

// criar funções para alterar nome e idade do usuario
// criar função que adicione mais endereços, o endereco atual não deve ser apagado
