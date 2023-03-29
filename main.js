
const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")


// Adicionado tarefas
function addTask() {

  if (inputBox.value == '') {
    alert("Você deve por um nome na tarefa antes de tentar adiciona-lá")

  } else {

    let li = document.createElement("Li")
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)

    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }

  // Resetando texto do
  inputBox.value = ""

  // Salvando alterações
  save()

}




// Marcando tarefas como concluidas
// Excluindo tarefas
listContainer.addEventListener("click", function(e){

  // Quando eu clicar no LI(TASK), sera marcado como tarefa concluida
  if(e.target.tagName === "LI") {

    
    e.target.classList.toggle("ckeck-text");

    // Salvando alterações
    save()
    

    // Se eu clicar no SPAN(X), removo o LI(Task)
  } else if (e.target.tagName === "SPAN") {

    e.target.parentElement.remove()

    // Salvando alterações
    save()
    

  }

  
}, false)



// Salvando alteraçãoes feitas pelo o usario

function save() {
  localStorage.setItem("data", listContainer.innerHTML)
}



// Exbibindo aquili que foi feito pelo o usario anteriormente
function showSave() {
  listContainer.innerHTML = localStorage.getItem("data")
}

showSave();