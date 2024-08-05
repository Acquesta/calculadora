const display = document.querySelector('#display')
const igual = document.querySelector('#igual')

igual.addEventListener('click', () =>{
    display.innerHTML = `Ola mundo`
})

document.addEventListener('click', (e) => {
    console.log(e);
    if(e.target.id != '' && e.target.){
        display.innerHTML = `${e.target.id}`
    }
})
