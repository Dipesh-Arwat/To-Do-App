var todoArray = [];

function saveTodo() {
    var title = document.getElementById("title").value;
    todoArray.push(title);
    var title = document.getElementById("title").value = "";
    localStorage.setItem("my-todos", todoArray.toString());
    fetchTodo();
}

function fetchTodo() {
    var str = localStorage.getItem("my-todos");
    todoArray = str.split(",");
    var htmlString = `
        <tr class="table-primary">
            <th> Sr.No </th>
            <th> Title </th>
            <th> Actions </th>
        </tr>
    `
    var counter = 0

    todoArray.forEach((ele) => {
        counter++;
        htmlString += `
        <tr>
            <td> ${counter} </td>
            <td> ${ele} </td>
            <td> 
                <button class="btn btn-outline-warning" onclick="editTodo(${counter - 1})"> Edit </button>
                <button class="btn btn-outline-danger" onclick="deleteTodo(${counter - 1})"> Delete </button>
            
            </td>
        </tr>
        `
    })

    document.getElementById("todo-table").innerHTML = htmlString;
}

function editTodo(index) {
    var newValue = prompt("Do you want to change?", todoArray[index]);

    if (newValue != "" && newValue != null) {
        todoArray[index] = newValue;
        localStorage.setItem("my-todos", todoArray.toString());
        fetchTodo();

    }
}

function deleteTodo(index){
    if(confirm("Are you sure, you want to delete it?")){
        todoArray.splice(index, 1);
        localStorage.setItem("my-todos", todoArray.toString());
        fetchTodo();
    }
}