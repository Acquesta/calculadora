const display = document.querySelector('#display')
const subDisplay = document.querySelector('#subDisplay')
const igual = document.querySelector('#igual')
const mais = document.querySelector('#mais')
const menos = document.querySelector('#menos')
const C = document.querySelector('#C')

const listaButtons = document.querySelector('.numeros')
console.log(listaButtons.children);

const buttons = listaButtons.children

let n1 = [];


function somarNumeros(numeros){
    let soma = 0;
    for(let i = 0; i < numeros.length; i++){
        soma += numeros[i]
    }
    console.log(soma);
    return soma
}

function diminuir(){
    
}

document.addEventListener('click', (e) => {
    // console.log(e);
    for(let i = 0; i < buttons.length; i++){
        if(buttons[i].id == e.target.id){
            if (display.innerHTML == '0') {
                display.innerHTML = ''
                subDisplay.innerHTML = ''
            }
            
            display.innerHTML += `${e.target.id}`
        }
    }
})


mais.addEventListener('click', () => {
    
    if (display.innerHTML != '') {
        
        n1.push(parseInt(display.innerHTML))
        display.innerHTML = ''
        subDisplay.innerHTML = ''
        for (let i = 0; i < n1.length; i++) {
            subDisplay.innerHTML += ` ${n1[i]} +`
        }
    }
})

C.addEventListener('click', () => {
    display.innerHTML = '0'
    subDisplay.innerHTML = ''
    n1 = []
})

menos.addEventListener('click', () => {
    display.innerHTML = '-  '
})


igual.addEventListener('click', () =>{
    n1.push(parseInt(display.innerHTML))
    display.innerHTML = somarNumeros(n1)
    subDisplay.innerHTML = ''
    for(let i = 0; i < n1.length; i++){
        if(i < n1.length - 1){
            subDisplay.innerHTML += `${n1[i]} + `
        }
        else{
            subDisplay.innerHTML += `${n1[i]} = `
        }
    }

})