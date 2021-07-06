const livros = require('./database')
const readline = require('readline-sync')

const primeiraEntrada = readline.question('Deseja buscar um livro? (S/N)')

if (primeiraEntrada.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponiveis:')
  console.log('Cinema e TV', '/Terror e suspense','/Ficção científica','/Poesia e prosa', '/Cosmicismo', '/Tecnologia')

  const entradaCategoria = readline.question('Qual categoria você escolhe:')

  const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

  console.table(retorno)
} else {
  const ordenadosPorTamanho = livros.sort((a,b)=> a.paginas - b.paginas)
  console.log('Essas são todos os livros disponiveis:')
  console.table(ordenadosPorTamanho)
}