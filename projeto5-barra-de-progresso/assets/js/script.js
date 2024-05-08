// Selecionar ps elementos HTML
let progressBar = document.querySelector('.progress')
let nextBtn = document.querySelector('#next-btn')
let previousBtn = document.querySelector('#previous-btn')

// variável para armazenar o valor da barra de progresso conforme incremento ou decremento
let progressUpdate = 0;

// função para realizar a animação da barra
function updateProgressBar(){
    progressBar.style.width = progressUpdate + '%'
}

// função para aumentar o progresso
function updateBar(){
    progressUpdate += 10; // definindo o quanto a barra vai avançar

    if(progressUpdate > 100){ // definindo um valor limite
        progressUpdate = 100;
    }

    // chamando a função de animação
    updateProgressBar();
}

// função para diminuir o progreso
function decreaseBar(){
    progressUpdate -= 10; // definindo o quanto a barra vai diminuir

    if(progressUpdate < 0){ // definindo um valor limite
        progressUpdate = 0;
    }

    // chamando a função de animação
    updateProgressBar();
}


// criando a funcionalidade nos botões
nextBtn.addEventListener('click', updateBar)
previousBtn.addEventListener('click', decreaseBar)