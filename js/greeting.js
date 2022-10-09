const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const toDoForm = document.getElementById("todo-form");
const clock2 = document.querySelector("#clock")
const todoList2 = document.querySelector("#todo-list")

function onLoginSubmit(tomato){
 tomato.preventDefault();
 const username = loginInput.value;
 loginForm.classList.add(HIDDEN_CLASSNAME);
 localStorage.setItem(USERNAME_KEY, username);
 console.log(username);
 paintGreetings(username);
 
}




function paintGreetings(username){
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  clock2.classList.remove(HIDDEN_CLASSNAME);
  todoList2.classList.remove(HIDDEN_CLASSNAME); 
 }


const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);

} else {
  paintGreetings(savedUserName);
}
