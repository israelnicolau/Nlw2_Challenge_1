//procurar o botão

document.querySelector("#add-time")
//quando clicar no botao
.addEventListener('click', cloneField)
document.querySelector("#del")
.addEventListener('click', deleteField)



function deleteField({target}){
    console.log("FALA DEV");
    if(document.querySelectorAll('.schedule-item').length>1){
    target.parentElement.parentElement.parentElement.remove()
    }
}
//executar uma ação
function cloneField(){
    const newFieldContainer= document.querySelector('.schedule-item').cloneNode(true)
    newFieldContainer.querySelector('button').addEventListener('click', deleteField)
    const fields2 = newFieldContainer.querySelectorAll('input');
    var schedule=document.querySelectorAll('.schedule-item')
    schedule.forEach(function(y,  index){

        const fields=y.querySelectorAll('input')
        var x= true;
        fields.forEach(function(field){
            if(field.value==""){x = false}
            
        }) 

        if(x==false){
            alert("Preencha todos os campos")
        }
        
        else{
            if(schedule.length-1==index){
                fields2.forEach(function(field){
                field.value=""
                }) 
                document.querySelector('#schedule-items').appendChild(newFieldContainer)
            }
        
        }
    })
//duplicar os campos
//colocar na página
}