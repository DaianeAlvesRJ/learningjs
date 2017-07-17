'use strict';

var aluno = {
    nome:null,
    idade: null,
    ano: null,
    professor:null,
    notas:[
        { materia: null,
          prova1:null, 
          prova2:null, 
          prova3:null,
          media:(null)
        }
    ],
    
}

function setName(nome){
    aluno.nome=nome
}
function setAge(idade){
    aluno.idade = idade
}
function setAno(ano){
    aluno.ano = ano
}

function setProfessor(professor){
    aluno.professor=professor
}

function setNotas(nota){
    aluno.notas.push(nota)
}
setName('Fabiana Lima')
setAge(33)
setAno(2015)
setProfessor('Ana Paula')
setNotas({materia:'Java Script', prova1: 8.0, prova2:6.0, prova3: 7.0, media: 0})


console.log(aluno)