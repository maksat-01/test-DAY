const input = document.querySelector('.text-input')
const number = document.querySelector('.number-input')
const btn = document.querySelector('.add-btn')
const ul = document.querySelector('.list')



btn.addEventListener('click', () => {
    addToDOo()
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
})


function addToDOo() {
    if (input.value !== "") {
        const newList = `<li class="list-group-item d-flex  justify-content-between align-items-center">
<span class="d-flex align-items-center ">
<input type="checkbox" class="check-box mx-2">
${input.value} 

</span>
<span class="d-flex align-items-center">
<input type="checkbox" class="check-box mx-2">
${number.value} 

</span>

<button class="del-btn btn btn-danger">delete</button>
</li>`
        ul.innerHTML += newList
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
    }
})



