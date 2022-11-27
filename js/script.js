const input = document.querySelector('.text-input')
const number = document.querySelector('.number-input')
const btn = document.querySelector('.add-btn')
const ul = document.querySelector('.list')

if (localStorage.getItem('taskHTML')) {
    ul.innerHTML = localStorage.getItem('taskHTML')
}

btn.addEventListener('click', () => {
    addToDOo()
    saveHTMLtoLS()
})

input.addEventListener('keydown', (e) => {
    switch (e.key) {
        case "Enter" :
            addToDOo()
            break;
        case "Delete" :
            input.value = ""
            break;
    }
    saveHTMLtoLS()
})

number.addEventListener('keydown', (e) => {
    switch (e.key) {
        case "Enter" :
            addToDOo()
            break;
        case "Delete" :
            number.value = ""
            break;
    }
    saveHTMLtoLS()
})


function addToDOo() {
    if (input.value !== "") {
        const newList = `<li class="list-group-item d-flex  justify-content-between align-items-center">
<span class="d-flex align-items-center">
<input type="checkbox" class="check-box mx-2">
<span class="d-flex flex-column">
${input.value} 
</span>

</span>
<span class="d-flex align-items-center">
<input type="checkbox" class="check-box mx-2">
<span class="d-flex flex-column">
${number.value} 
</span>

</span>

<button class="del-btn btn btn-danger">delete</button>
</li>`
        ul.innerHTML += newList
        saveHTMLtoLS()
    }
    input.value = ""
    number.value = ""
}

ul.addEventListener('click', (e) => {
    console.log(e.target.classList)
    if (e.target.classList.contains('del-btn')) {
        e.target.parentNode.remove()
    }

    if (e.target.classList.contains('check-box')) {
        e.target.parentNode.classList.toggle('line')
        saveHTMLtoLS()
    }
})


function saveHTMLtoLS() {
    localStorage.setItem('taskHTML', ul.innerHTML)
}
