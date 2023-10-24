function updateClock(){
    // Selecionando os elementos
    const hoursElement = document.querySelector('.hours')
    const minutesElement = document.querySelector('.minutes')
    const secondsElement = document.querySelector('.seconds')
    const bodyElement = document.body

    // Pegando a hora atual
    const dataAtual = new Date()

    // Pegando a hora atual
    const horaAtual = dataAtual.getHours().toString().padStart(2, "0")
    hoursElement.textContent = horaAtual;

    // Pegando o minuto atual
    const minutoAtual = dataAtual.getMinutes().toString().padStart(2, "0")
    minutesElement.textContent = minutoAtual;

    // Pegando os segundos
    const segundoAtual = dataAtual.getSeconds().toString().padStart(2, "0")
    secondsElement.innerHTML = segundoAtual

    // Mudando o fundo com base na hora
    if(dataAtual.getHours() >= 5 && dataAtual.getHours() < 16){
        bodyElement.classList.add('fundo-manha')
        bodyElement.classList.remove('fundo-tarde', 'fundo-noite');
    }
    else if(dataAtual.getHours() >= 16 && dataAtual.getHours() < 18){
        bodyElement.classList.add("fundo-tarde")
        bodyElement.classList.remove('fundo-manha', 'fundo-noite'); // Removendo outras classes, se houver
    }
    else{
        bodyElement.classList.add('fundo-noite')
        bodyElement.classList.remove('fundo-manha', 'fundo-tarde'); // Removendo outras classes, se houver
    }
}
setInterval(updateClock, 1000)