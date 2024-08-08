const display = document.querySelector('#display')
const subDisplay = document.querySelector('#subDisplay')
const igual = document.querySelector('#igual')
const mais = document.querySelector('#mais')
const menos = document.querySelector('#menos')
const C = document.querySelector('#C')

let lista = [];

function numero(number){
    if(display.innerHTML == '0') {
        display.innerHTML = ''
    }
        
    display.innerHTML += number
}

function mais(){
    lista.push(display.innerHTML)
    console.log(lista);
}

// let n1 = [
//     {
//         number: 0,
//         negative: false,
//         operation: 'plus',
//         simbol: '+'
//     }
// ];

// function adicionaNumero(numero, negativo, operacao, simbolo){
//     n1.push({
//         number: numero,
//         negative: negativo,
//         operation: operacao,
//         simbol: simbolo
//     })
// }


// function somarNumeros(numeros){
//     let soma = 0;
//     for(let i = 0; i < numeros.length; i++){
//         soma += numeros[i]
//     }
//     console.log(soma);
//     return soma
// }

// function operacao(){
//     let calculo = 0;
//     for(let i = 0; i < n1.length; i++){
//         if(n1[i].operation == 'plus'){
//             calculo += n1[i].number
//         }
//         else if(n1[i].number == 'minus'){
//             calculo -= n1[i].number
//         }
//     }
// }

// function mostraContas(){
//     subDisplay.innerHTML = ''
//     for(let i = 0; i < n1.length; i++){
//         subDisplay.innerHTML += `${n1[i].number} ${n1[i].simbol} `
//     }
// }

// document.addEventListener('click', (e) => {
//     // console.log(e);
//     for(let i = 0; i < buttons.length; i++){
//         if(buttons[i].id == e.target.id){
//             if (display.innerHTML == '0') {
//                 display.innerHTML = ''
//                 subDisplay.innerHTML = ''
//             }
//             adicionaNumero(e.target.id, false, 'plus', '+')
//             display.innerHTML += `${e.target.id}`
//             console.log(n1);
//         }
//     }
// })


// mais.addEventListener('click', () => {
    
//     if (display.innerHTML != '') {
        
//         // n1.push(parseInt(display.innerHTML))
//         display.innerHTML = ''
//         subDisplay.innerHTML = ''
//         mostraContas()
//     }
// })

// C.addEventListener('click', () => {
//     display.innerHTML = '0'
//     subDisplay.innerHTML = ''
//     n1 = []
// })

// menos.addEventListener('click', () => {
//     display.innerHTML = '-'
// })


// igual.addEventListener('click', () =>{
//     let numero = display.innerHTML
//     adicionaNumero(display.innerHTML)
//     numero = somarNumeros(n1)
//     subDisplay.innerHTML = ''
//     for(let i = 0; i < n1.length; i++){
//         if(i < n1.length - 1){
//             subDisplay.innerHTML += `${n1[i]} + `
//         }
//         else{
//             subDisplay.innerHTML += `${n1[i]} = `
//         }
//     }

// })