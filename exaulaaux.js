import {exercicio1} from "./exaula2.js"

// let prompt = require("prompt-sync")

import promptSync from "prompt-sync"

let prompt = promptSync();

// prompt ("Digite Algo: ")

// exercicio1 ()

// function olaPessoa(nome_,idade_,peso_) {

//   let pessoa = {
//     nome: nome_,
//     idade: idade_,
//     peso: peso_
//   }

//     console.log("Olá " + pessoa.nome + "!! Voce esta com " + pessoa.idade + " anos" + " e " + pessoa.peso + "Kg")

// }
// olaPessoa ("Denis", 25, 90)

// Digite o numero do exercicios que voce quer exibir, se quiser sair digite sair
let resposta

let resposta = prompt("Digite o exercios, se quiser sair digite sair: ")
do {
  resposta = prompt("Digite o exercios, se quiser sair digite sair: ")
  switch (resposta){
    case 1 :
      exercicio1()
      break
  }
  case 2 : 
  exercicio2

  default:
} while (resposta != = "sair");