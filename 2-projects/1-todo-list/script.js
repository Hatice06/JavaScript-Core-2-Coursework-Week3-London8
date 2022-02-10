function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach(element => {  
    
    let liEl = document.createElement("li");
    liEl.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    
    liEl.innerHTML = element.task;
    let spanEl = document.createElement("span");
    spanEl.classList.add("badge", "bg-primary", "rounded-pill");
    let iCheckEl = document.createElement("i");
    iCheckEl.classList.add("fa", "fa-check");
    iCheckEl.setAttribute("aria-hidden", "true");
    let iTrashEl = document.createElement("i");
    iTrashEl.classList.add("fa", "fa-trash");
    iTrashEl.setAttribute("aria-hidden", "true");
    spanEl.appendChild(iCheckEl);
    spanEl.appendChild(iTrashEl);


    liEl.appendChild(spanEl)    
    list.appendChild(liEl);
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];



// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.

function addNewTodo(event) { 
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!

  let getTodoInput = document.getElementById("todoInput").value;
  todos.push({task: getTodoInput, completed: false});
  populateTodoList(todos);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
