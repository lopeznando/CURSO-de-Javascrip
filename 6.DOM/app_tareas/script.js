let input = document.querySelector("#tarea");
let button = document.querySelector("#btn-agregar");
let ul = document.querySelector("#lista-tareas");

button.addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerHTML = `${input.value} <button class="delete">Eliminar</button> <button class="edit">Editar</button>`;
    input.value = "";
    let deleteButton = li.querySelector(".delete");
    let editButton = li.querySelector(".edit");
    
    deleteButton.addEventListener("click", () => {
      ul.removeChild(li);
    });
    
    editButton.addEventListener("click", () => {
      let newText = prompt("Ingrese el nuevo texto:");
      li.innerHTML = `${newText} <button class="delete">Eliminar</button> <button class="edit">Editar</button>`;
    });
    
    ul.appendChild(li);
  });