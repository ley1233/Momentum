const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input") 
const TODOS_KET = "todos";
let toDos = [];


function saveToDo(){
  localStorage.setItem(TODOS_KET,JSON.stringify(toDos));
}



function deleteTodo(event){ 
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id))
  saveToDo();
}




function paintToDo(newtodo){
  const li = document.createElement("li");
  li.id = newtodo.id;
  const span = document.createElement("span");
  span.innerText = newtodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click",deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);

}


function handleTodoSubmit(event){
event.preventDefault();
const newtodo = todoInput.value;
todoInput.value   ="";
const newTodoObj = {
  text: newtodo,
  id: Date.now() 
};
toDos.push(newTodoObj);
paintToDo(newTodoObj);
saveToDo();

}

todoForm.addEventListener("submit", handleTodoSubmit);

const saveToDos= localStorage.getItem(TODOS_KET)




if(saveToDos != null){
  const parsedToDos = JSON.parse(saveToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo)
}; 
