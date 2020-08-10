//procurar o botão
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener('click', cloneField)
//executar uma ação
function cloneField(){
    
    const newFieldContainer= document.querySelector('.schedule-item').cloneNode(true)

    const fields=newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field){
        field.value=""
    }) 
    fields[0].value=""
    fields[1].value=""

    document.querySelector('#schedule-items').appendChild(newFieldContainer)

//duplicar os campos
//colocar na página
}