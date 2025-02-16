function addTodo() {
    let name = document.getElementById("todo-name").value;
    let content = document.getElementById("todo-content").value;
    if (name && content) {
        let todoList = document.getElementById("todo-list");
        let newTodo = document.createElement("div");
        newTodo.classList.add("todo-item");
        newTodo.textContent = `${name} : ${content}`;
        todoList.appendChild(newTodo);
        document.getElementById("todo-name").value = "";
        document.getElementById("todo-content").value = "";
    }
}