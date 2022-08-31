// const nome = prompt("Qual é o seu nome?")
// const cor = prompt("Qual é sua cor favorita?")
// const citacao = prompt("Qual é sua citação favorita?")
// const nomeMaiusculo = nome.toUpperCase()

// console.log("(A) A minha cor favorita é "+ nomeMaiusculo + " e minha cor favorita é " + cor + " e sua citação favorita é \"" + citacao + "\".")

// console.log(`(B) Nome: ${nomeMaiusculo}\n Cor Favorita: ${cor}`)
// console.log(`Quantidade de caracteres: ${nome.length}`)
// const verificarLetra = nome.includes("a")
// console.log("O nome da pessoa tem letra A?: "+verificarLetra)

const nome = prompt("Qual é o seu nome?")
const email = prompt("Qual é o seu endereço de e-mail?")

console.log("O e-mail "+email+ " foi cadastrado com sucesso. Boas vindas, "+nome+"!\nO numero de caracteres no nome da pessoa é: "+nome.length)

console.log("O e-mail possui \"@\"?"+email.includes("@"))
console.log(nome.replaceAll("R","L"))
