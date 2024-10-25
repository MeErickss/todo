const inptcriar = document.querySelector("[inpt-criar]")
const btncriar = document.querySelector("[btn-criar]")
const numtask = document.querySelector("[num-task]")
const didtask = document.querySelector("[did-task]")
const tarefas = document.querySelector("[tarefas]")
const secao = document.querySelector("[secao2]")

const estado = {
    listaTarefas: [],
    tarefasConcluidas : 0,
    
}


function atualizarTela(){
    didtask.innerText = estado.tarefasConcluidas
    numtask.innerText = estado.listaTarefas.length
}


btncriar.addEventListener("click", function(){
    if (inptcriar.value != ""){ 

        novaTarefa = {
            tarefa: inptcriar.value,
            concluida: false
        }
        estado.listaTarefas.push(novaTarefa)


        tarefas.style = "display: block;"
        secao.style = "display: none;"
        var novoAddTask = document.createElement('div');
        novoAddTask.classList.add('addtask');
        

        novoAddTask.innerHTML = `
        <input checkbox id="button" class="checkbox" type="checkbox"/>
        <p p class="ttxt">${novaTarefa.tarefa}</p>
        <button trash class="trash"><i style="font-size: x-large;" class="fa fa-trash-o"></i></button>`
        
        tarefas.appendChild(novoAddTask);

        const checkbox = novoAddTask.querySelector("[checkbox]")
        const trash = novoAddTask.querySelector("[trash]")
        let nomeTarefaElement = novoAddTask.querySelector("[p]")
        let posicao = estado.listaTarefas.findIndex( t => t.tarefa == nomeTarefa)

        checkbox.addEventListener("click", function(e){

            // Atualiza o estado da tarefa para concluida
            let nomeTarefa = nomeTarefaElement.innerText            
            estado.listaTarefas[posicao].concluida = true        

           
            if (e.target.checked){
                estado.tarefasConcluidas += 1
                nomeTarefaElement.classList.add("concluida")
                
            } else {
                estado.tarefasConcluidas -= 1
                nomeTarefaElement.classList.remove("concluida")
            }

            atualizarTela()
        
        })

        trash.addEventListener("click", function(e){
            tarefas.removeChild(novoAddTask)
            estado.listaTarefas.remove()
        })

        inptcriar.value = ""
        atualizarTela()
    }
})