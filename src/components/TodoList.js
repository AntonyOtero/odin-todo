import TodoItem from './TodoItem.js';

export default class TodoList {
    constructor(todos) {
        this.todos = todos;
    }

    render() {
        const ul = document.createElement("ul");
        ul.setAttribute("role", "list");
        this.todos.forEach(todo => {
            const item = new TodoItem(todo);
            ul.appendChild(item.render());
        });

        return ul;
    }
}