'use strict';

var usuario = {
    nome: 'Fulano Beltrano Filho',
    idade: 34,
    enderecos: [
         { id: 1, rua: 'Lindolfo Color', numero: 104, bairro: 'Centro', cidade: 'São Leopoldo', estado: 'RS', cep: '93.000.000' }
     ]
 }

function setName(nome){
    usuario.nome = nome 
}

function setAge(idade){
    usuario.idade = idade
}
function setEndereco(endereco){
usuario.enderecos.push(endereco)
}
setName('Daiane Alves')
setAge(33)
setEndereco({id:2, rua:'Lamartine babo', numero:123, bairro: 'Fonseca', cidade:'Niteroi', estado:'RJ',cep: '23.230.635'})
console.log(usuario)


// criar funções para alterar nome e idade do usuario
// criar função que adicione mais endereços, o endereco atual não deve ser apagado