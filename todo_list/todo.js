const toDoForm = document.querySelector(".toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".toDoList");

// Key
const TODOS_LIST = "toDos";

function filterFn(toDo) {
    return toDo.id === 1
}

// Just create the empty array for save the todo list
let toDoArray = [];

function delToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDoArray.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDoArray = cleanToDos;
    saveToDos();
}

function saveToDos() {
    // "JSON.stringify" must be needed for convert obj to string type(?)
    localStorage.setItem(TODOS_LIST, JSON.stringify(toDoArray));
}

// For creating the form
function createListForm(title) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDoArray.length + 1;
    span.innerText = title;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", delToDo)
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    
    // Object for save the todo list
    const toDoObj = {
        id: newId,
        title: title
    }
    // Push object to array
    toDoArray.push(toDoObj);
    // Save array to localstorage
    saveToDos(toDoArray);
}

function handleSubmit(event) {
    // Prevent to out the "input value data" when put the "enter (submit)"
    event.preventDefault();
    const toDoInputValue = toDoInput.value;
    const toDoListNoList = toDoList.querySelector("no-list")
    
    // If user submit without text on inputtext, alert the message
    if(toDoInputValue === "") {
        alert("Warning : Plz input the todo!");
    } else {
        if(toDoListNoList) {
            toDoList.removeChild(toDoListNoList)
        }
        //call the function for creating the form
        createListForm(toDoInputValue);
        toDoInput.value = "";
    }
}

// Load the todo list
function loadToDo() {
    getToDosList = localStorage.getItem(TODOS_LIST);
    
    if(getToDosList !== null) {
        // There is todo list!
        // Convert string to object
        const parsToDos = JSON.parse(getToDosList);
        // forEach for separate object
        parsToDos.forEach(function(toDo){
            // and call "createListForm" with just "title" every each times
            createListForm(toDo.title);
        });
        
    } /* else {
        // There is "no" todo list
        const span = document.createElement("span");
        const createSpan = toDoList.appendChild(span);
        createSpan.className = ".no-list";
        createSpan.innerText = "There is no todo list";
    } */
}

function init() {
    // Load the all of Todo list
    loadToDo();
    // When submit
    toDoForm.addEventListener("submit", handleSubmit);
    
    
}

init();