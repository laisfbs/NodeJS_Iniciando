const nomes = ['Lais', 'Arthur', 'Ana', 'Beto', 'Carla', 'Diego', 'Fernanda', 'Gabriel', 'Jonatan', 'Maria', 'Nair'];
nomes.pop();
nomes.push('Osvaldo')
console.log(nomes);
console.log(nomes.length);

//dividindo com slice()
const sala1 = nomes.slice(0, nomes.length / 2);
const sala2 = nomes.slice(nomes.length / 2);

console.log('Alunos da sala 1:', { sala1 })
console.log('Quantidade de alunos na sala 1 ', sala1.length)
console.log('Alunos da sala 1:', { sala2 })
console.log('Quantidade de alunos na sala 1 ', sala2.length);

//alterando com splice()
nomes.splice(1, 4, 'Luana', 'Jessica');
console.log(nomes)

//concatenando com array
const salaPython = ['Jean', 'Guilherme', 'Denner']
const salaJavascript = ['Roseli', 'Mariana']

const salaUnificada = salaPython.concat(salaJavascript)
console.log(salaUnificada)

//Procurando na lista
const alunos = ['Sara', 'Lavinia', 'Isabel', 'Livia']
const mediaDosAlunos = [10, 7, 9, 6]

let listaNotasAlunos = [alunos, mediaDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaNotasAlunos[0].includes(nomeDoAluno)) {
        let indice = listaNotasAlunos.indexOf(alunos)
        return listaNotasAlunos[0][indice] + ', sua media é '
            + listaNotasAlunos[1][indice]
    } else {
        return 'Aluno não esta cadastrado'
    }
}
console.log(alunos)
console.log(mediaDosAlunos)
console.log(exibeNomeNota('Lais'))

//for classico
const numeros = [100, 200, 300, 400, 500, 600]

for (let i = 0; i < numeros.length; i++) {
    console.log(i, numeros[i])
}

//media com for
const notasFor = [10, 6.5, 8, 7.5]
let somaDasNotas = 0

for (let i = 0; i < notasFor.length; i++) {
    somaDasNotas += notasFor[i]
}
let media = somaDasNotas / notasFor.length

console.log(media)

//media com forEach
const notasForEach = [10, 6.5, 8, 7.5]
let somaDasNotasForEach = 0

//callback(funcao que chama outra)
notasForEach.forEach(nota => {
    somaDasNotasForEach += nota
})
let mediaForEach = somaDasNotasForEach / notasForEach.length

console.log(mediaForEach)

//revisando callbacks
const nomesCallback = ['Lais', 'Arthur', 'Ana', 'Beto', 'Carla', 'Diego', 'Fernanda', 'Gabriel', 'Jonatan', 'Maria', 'Nair'];
nomesCallback.forEach(ImprimeNomes)

function ImprimeNomes(nomeCallback) {
    console.log(nomeCallback)
}

//metodo map()
const notasMap = [10, 9, 8, 7, 6]
const notasAtualizadas = notasMap.map(nota => nota == 10 ? nota : ++nota)

    console.log(notasAtualizadas)

//metodo map - alterando string
let nomesP = ["ana Julia", "CaiO Vinicius", "BIA"]
const nomesAtualizados = nomesP.map(nomesP => nomesP.toUpperCase())

    console.log(nomesAtualizados)

//filtrando elementos
const nomesElementos = ['Lais', 'Arthur', 'Ana', 'Beto'];
const notasElementos = [7, 4.5, 8, 7.5]
const reprovados = nomesElementos.filter( (aluno, indice) => notasElementos[indice] < 5)

console.log('reprovados:', {reprovados}) 


