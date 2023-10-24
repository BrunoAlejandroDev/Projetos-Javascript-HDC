// Selecionar os elementos
let inputElement = document.querySelector('#input')
let inputElement2 = document.querySelector('#input2')
let outputElement = document.querySelector('#output')
let outputElement2 = document.querySelector('#output2')
let fromElement = document.querySelector('#from')
let toElement = document.querySelector('#to')
let fromElement2 = document.querySelector('#from2')
let toElement2 = document.querySelector('#to2')
let convertBtn = document.querySelector('#convert-btn')
let convertBtn2 = document.querySelector('#convert-btn2')
let messageElement = document.querySelector('#message')
let messageElement2 = document.querySelector('#message2')

function convertValuesComp(){
    const fromValue = fromElement.value;
    const toValue = toElement.value
    const inputValue = Number(inputElement.value)

    // validação para o caso de unidades iguais
    if(fromValue === toValue){
        outputElement.value = inputElement.value
        messageElement.textContent = 'As unidades escolhidas são iguais.'
        return
    }
    
    let result 
    switch (fromValue) {
        case 'km':
            switch (toValue) {
                case 'km':
                    result = inputValue
                    break
                case 'hm':
                    result = inputValue * 10
                    break;
                case 'dam':
                    result = inputValue * 100
                    break;
                case 'm':
                    result = inputValue * 1000
                    break;
                case 'dm':
                    result = inputValue * 10000
                    break;
                case 'cm':
                    result = inputValue * 100000
                    break;
                case 'mm':
                    result = inputValue * 1000000
                    break;
            }
        break;
        case 'hm':
            switch (toValue) {
                case 'km':
                    result = inputValue / 10
                    break;
                case 'hm':
                    result = inputValue 
                    break;
                case 'dam':
                    result = inputValue * 10
                    break;
                case 'm':
                    result = inputValue * 100
                    break;
                case 'dm':
                    result = inputValue * 1000
                    break;
                case 'cm':
                    result = inputValue * 10000
                    break
                case 'mm':
                    result = inputValue * 100000
                    break
            }
        break;
        case 'dam':
            switch (toValue) {
                case 'km':
                    result = inputValue / 100
                    break;
                case 'hm':
                    result = inputValue / 10 
                    break;
                case 'dam':
                    result = inputValue 
                    break;
                case 'm':
                    result = inputValue * 10
                    break;
                case 'dm':
                    result = inputValue * 100
                    break;
                case 'cm':
                    result = inputValue * 1000
                    break;
                case 'mm':
                    result = inputValue * 10000
                    break;
            }
        break;
        case 'm':
            switch (toValue) {
                case 'km':
                    result = inputValue / 1000
                    break;
                case 'hm':
                    result = inputValue / 100
                    break;
                case 'dam':
                    result = inputValue / 10
                    break;
                case 'm':
                    result = inputValue
                    break;
                case 'dm':
                    result = inputValue * 10
                    break;
                case 'cm':
                    result = inputValue * 100
                    break;
                case 'mm':
                    result = inputValue * 1000
                    break;
            }
        break;
        case 'dm':
            switch (toValue) {
                case 'km':
                    result = inputValue / 10000
                    break;
                case 'hm':
                    result = inputValue / 1000
                    break;
                case 'dam':
                    result = inputValue / 100
                    break;
                case 'm':
                    result = inputValue / 10
                    break;
                case 'dm':
                    result = inputValue
                    break;
                case 'cm':
                    result = inputValue * 10
                    break;
                case 'mm':
                    result = inputValue * 100
                    break;
            }
        break;
        case 'cm':
            switch (toValue) {
                case 'km':
                    result = inputValue / 100000
                    break;
                case 'hm':
                    result = inputValue / 10000
                    break;
                case 'dam':
                    result = inputValue / 1000
                    break;
                case 'm':
                    result = inputValue / 100
                    break;
                case 'dm':
                    result = inputValue / 10
                    break;
                case 'cm':
                    result = inputValue
                    break;
                case 'mm':
                    result = inputValue * 10
                    break;
            }
        break;
        case 'mm':
            switch (toValue) {
                case 'km':
                    result = inputValue / 1000000
                    break;
                case 'hm':
                    result = inputValue / 100000
                    break;
                case 'dam':
                    result = inputValue / 10000
                    break;
                case 'm':
                    result = inputValue / 1000
                    break;
                case 'dm':
                    result = inputValue / 100
                    break;
                case 'cm':
                    result = inputValue / 10
                    break;
                case 'mm':
                    result = inputValue
                    break;
            }
        break;
    }
    // Exibir resultado no input
    messageElement.textContent = '';
    outputElement.value = result

    // Exibir resultado na mensagem
    const fromLabel = fromElement.options[fromElement.selectedIndex].text
    const toLabel = toElement.options[toElement.selectedIndex].text
    
    const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`
    messageElement.textContent = message

    return
}
convertBtn.addEventListener('click', convertValuesComp)

/* FUNÇÃO 2 - VOLUME */
function convertValuesVol(){
    const fromValue2 = fromElement2.value;
    const toValue2 = toElement2.value
    const inputValue2 = Number(inputElement2.value)

    // validação para o caso de unidades iguais
    if(fromValue2 === toValue2){
        outputElement2.value = inputElement2.value
        messageElement2.textContent = 'As unidades escolhidas são iguais.'
        return
    }

    let result2 
    switch (fromValue2) {
        case 'kl':
            switch (toValue2) {
                case 'kl':
                    result2 = inputValue2
                    break
                case 'hl':
                    result2 = inputValue2 * 10
                    break;
                case 'dal':
                    result2 = inputValue2 * 100
                    break;
                case 'l':
                    result2 = inputValue2 * 1000
                    break;
                case 'dl':
                    result2 = inputValue2 * 10000
                    break;
                case 'cl':
                    result2 = inputValue2 * 100000
                    break;
                case 'ml':
                    result2 = inputValue2 * 1000000
                    break;
            }
        break;
        case 'hl':
            switch (toValue2) {
                case 'kl':
                    result2 = inputValue2 / 10
                    break;
                case 'hl':
                    result2 = inputValue2 
                    break;
                case 'dal':
                    result2 = inputValue2 * 10
                    break;
                case 'l':
                    result2 = inputValue2 * 100
                    break;
                case 'dl':
                    result2 = inputValue2 * 1000
                    break;
                case 'cl':
                    result2 = inputValue2 * 10000
                    break
                case 'ml':
                    result2 = inputValue2 * 100000
                    break
            }
        break;
        case 'dl':
            switch (toValue2) {
                case 'kl':
                    result2 = inputValue2 / 100
                    break;
                case 'hl':
                    result2 = inputValue2 / 10 
                    break;
                case 'dal':
                    result2 = inputValue2 
                    break;
                case 'l':
                    result2 = inputValue2 * 10
                    break;
                case 'dl':
                    result2 = inputValue2 * 100
                    break;
                case 'cl':
                    result2 = inputValue2 * 1000
                    break;
                case 'ml':
                    result2 = inputValue2 * 10000
                    break;
            }
        break;
        case 'l':
            switch (toValue2) {
                case 'kl':
                    result2 = inputValue2 / 1000
                    break;
                case 'hl':
                    result2 = inputValue2 / 100
                    break;
                case 'dal':
                    result2 = inputValue2 / 10
                    break;
                case 'l':
                    result2 = inputValue2
                    break;
                case 'dl':
                    result2 = inputValue2 * 10
                    break;
                case 'cl':
                    result2 = inputValue2 * 100
                    break;
                case 'ml':
                    result2 = inputValue2 * 1000
                    break;
            }
        break;
        case 'dl':
            switch (toValue2) {
                case 'kl':
                    result2 = inputValue2 / 10000
                    break;
                case 'hl':
                    result2 = inputValue2 / 1000
                    break;
                case 'dal':
                    result2 = inputValue2 / 100
                    break;
                case 'l':
                    result2 = inputValue2 / 10
                    break;
                case 'dl':
                    result2 = inputValue2
                    break;
                case 'cl':
                    result2 = inputValue2 * 10
                    break;
                case 'ml':
                    result2 = inputValue2 * 100
                    break;
            }
        break;
        case 'cl':
            switch (toValue2) {
                case 'kl':
                    result2 = inputValue2 / 100000
                    break;
                case 'hl':
                    result2 = inputValue2 / 10000
                    break;
                case 'dal':
                    result2 = inputValue2 / 1000
                    break;
                case 'l':
                    result2 = inputValue2 / 100
                    break;
                case 'dl':
                    result2 = inputValue2 / 10
                    break;
                case 'cl':
                    result2 = inputValue2
                    break;
                case 'ml':
                    result2 = inputValue2 * 10
                    break;
            }
        break;
        case 'ml':
            switch (toValue2) {
                case 'kl':
                    result2 = inputValue2 / 1000000
                    break;
                case 'hl':
                    result2 = inputValue2 / 100000
                    break;
                case 'dal':
                    result2 = inputValue2 / 10000
                    break;
                case 'l':
                    result2 = inputValue2 / 1000
                    break;
                case 'dl':
                    result2 = inputValue2 / 100
                    break;
                case 'cl':
                    result2 = inputValue2 / 10
                    break;
                case 'ml':
                    result2 = inputValue2
                    break;
            }
        break;
    }
    // Exibir resultado no input
    messageElement2.textContent = '';
    outputElement2.value = result2

    // Exibir resultado na mensagem
    const fromLabel2 = fromElement2.options[fromElement2.selectedIndex].text
    const toLabel2 = toElement2.options[toElement2.selectedIndex].text
    
    const message2 = `${inputElement2.value} ${fromLabel2} equivalem a ${result2} ${toLabel2}`
    messageElement2.textContent = message2

    return
}
convertBtn2.addEventListener('click', convertValuesVol)