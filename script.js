const display = document.querySelector('#display')
const subDisplay = document.querySelector('#subDisplay')
const igual = document.querySelector('#igual')
const mais = document.querySelector('#mais')
const menos = document.querySelector('#menos')
const C = document.querySelector('#C')

igual.addEventListener('click', () => {
    var soma = parseInt(display.innerHTML);
    for (let i = 0; i < n1.length; i++) {
        soma += n1[i]
        if (i <= n1.length - 1) {
            console.log('final');
            subDisplay.innerHTML += ` ${n1[i]} = `
        } else {
            subDisplay.innerHTML += `${n1[i]} + `
        }
    }
    display.innerHTML = `${soma}`
    n1 = []
})

document.addEventListener('click', (e) => {
    // console.log(e);
    if (e.target.id != '' && e.target.id != 'igual' && e.target.id != 'mais' && e.target.id != 'C' && e.target.id != 'menos') {
        if (display.innerHTML == 'DISPLAY') {
            display.innerHTML = ''
            subDisplay.innerHTML = ''
        }
        display.innerHTML += `${e.target.id}`
    }
})

let n1 = [];

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
    display.innerHTML = ''
    subDisplay.innerHTML = ''
})

menos.addEventListener('click', () => {
    display.innerHTML = '-  '
})