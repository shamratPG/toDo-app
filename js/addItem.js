const addItem = () => {
    const todosList = localStorage.getItem('todos');
    const todos = {};
    const newTask = getElement('new-task').value;
    todos.name = newTask;
    console.log(todos);
    // localStorage.setItem('todos', newTask);
}