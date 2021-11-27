const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const total = document.querySelector('#total')
let i = 0

//add  event

btn.addEventListener('click', (e) => {
    //    console.log(input.value);
    //1 variant
    //result.innerHTML += input.value
    //2 variant
    //result.innerHTML += `<li>${input.value}</li>`
    //3 variant cheres func
    if (input.value === '') return
    createDeleteElements(input.value)
    input.value = ''

})

//create and delete todo
function createDeleteElements(value) {
    //    console.log(value);
    i++

    const li = document.createElement('li')
    const btn = document.createElement('button')

    li.className = 'li'
    li.textContent = value

    btn.className = 'btn'
    btn.textContent = 'add'
    li.appendChild(btn)

    //remove todo
    btn.addEventListener('click', e => {
        i--
        result.removeChild(li)
        total.textContent = i
    })
    //toggle class active
    li.addEventListener('click', e => {
        li.classList.toggle('li-active')
    })

    total.textContent = i

    result.appendChild(li)
}