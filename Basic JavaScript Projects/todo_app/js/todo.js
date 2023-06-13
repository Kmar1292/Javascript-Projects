// this function gets the task from input
function get_todos(){
    // This creates an array of tasks that are input
    var todos = new Array;
    // this pulls task that was saved in the web browser memory
    var todos_str = localStorage.getItem('todo');
    // If the input is not null then JSON.parse will communicate with the web browser to make the task a JS object
    if (todos_str !== null){
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// This function adds the input task to the get_todos function array
function add(){
    // This takes the input task and creates a variable of it
    var task = document.getElementById("task").value;

    var todos = get_todos();
    // This adds a new task  at the end of the array
    todos.push(task);
    // this converts the task input to a JSON string
    localStorage.setItem("todo", JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

// This function keeps the tasks permanently displayed on screen
function show(){
    // This sets the task that was retrieved as a variable
    var todos = get_todos();

    // this sets up each task as an unordered list
    var html = '<ul>';
    // this displays a task to the list in the orer that it is input
    for (var i = 0; i < todos.length; i++){
        // this also displays the task as a list and creates the button with the "x"
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';

    // This diplays the task as a list
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName("remove");    //creates array of all the remove buttons
    for (var i = 0; i < buttons.length; i++){   //iterate through each button
        buttons[i].addEventListener("click", remove);   //for each button, perform 'remove' function when clicked
    }
}

function remove(){
    var todos = get_todos();    //gets todos in object form
    var index = this.getAttribute("id");    //get id # of button
    todos.splice(index, 1);     //splice out the element at position 'index'
    localStorage.setItem("todo", JSON.stringify(todos));    //update the local JSON string
    show(); //update the list that is displayed to user
}

// This diplays the input task when the 'Add Item' button is clicked
document.getElementById('add').addEventListener('click', add);
// This will keep the inputs displayed permanently on screen
show();