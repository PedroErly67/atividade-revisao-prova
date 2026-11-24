
const boasVindas = (nome) => `Bem vindo(a) ${nome}!`
console.log(boasVindas("isabelle mi amor"))

const parOuImpar = (num) => (num % 2 === 0 ? "Par" : "Ímpar")
console.log(parOuImpar(4))
console.log(parOuImpar(7))

const precos = [10, 25, 40];

const novosPrecos = precos.map(preco => `R$ ${preco}`)
console.log(novosPrecos)

const palavras = ["sol", "janela", "mar", "cadeira", "luz"];

const PalavrasGrandes = palavras.filter(n => n.length >= 4)
console.log(PalavrasGrandes)

const produtos = [
     { id: 1, nome: "Teclado", estoque: true },
     { id: 2, nome: "Mouse", estoque: false },
     { id: 3, nome: "Monitor", estoque: true },
   ];

const comEstoque = produtos.filter(produto => produto.estoque).map(produto => produto.nome)
console.log(comEstoque)
