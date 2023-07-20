let prompt = require ("prompt-sync")()

// let nome_recebido = prompt ("Digite seu nome: ")
// let idade_recebido = parseInt(prompt("Digite sua idade: "))
// let peso_recebido = parseInt(prompt("Digite seu peso: "))

// for (let contador =0; contador < 3; contador++){

//   let pessoa = {
//     nome: nome_recebido,
//     idade: idade_recebido,
//     peso: peso_recebido

//     console.log("Olá " + pessoa.nome + "!! Voce esta com " + pessoa.idade + " anos" + " e " + pessoa.peso + "Kg")
// }


function olaPessoa(nome_,idade_,peso_) {

  let pessoa = {
    nome: nome_,
    idade: idade_,
    peso: peso_
  }

    console.log("Olá " + pessoa.nome + "!! Voce esta com " + pessoa.idade + " anos" + " e " + pessoa.peso + "Kg")

}
olaPessoa ("Denis", 25, 90)

