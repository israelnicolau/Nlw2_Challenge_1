document.querySelector("#del")
//quando clicar no botao
.addEventListener('click', deleteField)

function deleteField({target}){
    if(document.querySelectorAll('.schedule-items').length>1)
    target.parentElement.parentElement.parentElement.remove()
}

