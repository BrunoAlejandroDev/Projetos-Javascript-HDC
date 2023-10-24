// array para guardar as citações
const quotes = [
    {   
      quote: "A persistência é o caminho do êxito.",
      author: "Charles Chaplin",
    },
    {
      quote: "A única forma de fazer um grande trabalho é amar o que se faz.",
      author: "Steve Jobs",
    },
    {
      quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      author: "Robert Collier",
    },
    {
      quote:"O fracasso é a oportunidade de começar de novo, com mais experiência.",
      author: "Henry Ford",
    },
    {
      quote: "Não espere por oportunidades, crie você mesmo as suas.",
      author: "Autor desconhecido",
    },
    {
      quote:"O verdadeiro sucesso não é o sucesso financeiro, mas sim o sucesso em ajudar outras pessoas.",
      author: "Zig Ziglar",
    },
    {
      quote: "O fracasso não significa que você não seja bom o suficiente, significa que você precisa se esforçar mais",
      author: "Autor desconhecido",
    },
];

// selecionando os elementos do HTML
const quoteBtn = document.querySelector('#quoteBtn')
const quoteTitle = document.querySelector('.title')
const quoteAuthor = document.querySelector('.author')

// função para acessar o array e anexar o autor e a frase nos elementos
function getQuote(){
    const randomQuote = Math.floor(Math.random() * quotes.length)

    quoteTitle.textContent = quotes[randomQuote].quote
    quoteAuthor.textContent = quotes[randomQuote].author
}

quoteBtn.addEventListener('click', getQuote)