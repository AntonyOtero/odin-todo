import TodoList from "./TodoList";

export default class App {
    constructor() {
        this.todos = [
            {
                id: crypto.randomUUID(),
                title: "Example Task",
                description: "Here is a more detailed context of the task.",
                dueDate: "Dec 8",
                priority: "P1",
                project: "inbox",
                completed: false,
            },
        ];
    }

    addTodo = (title) => {
        const todo = {
            id: crypto.randomUUID(),
            title: "Example Task",
            description,
            dueDate,
            priority,
            project,
            completed: false,
        }
        this.todos.push(todo);
        this.update();
    }

    update() {
        const newList = new TodoList(this.todos);
        this.container.replaceChild(newList.render(), this.listElement);
        this.listElement = newList.render();
    }

    render() {
        this.container = document.createElement("div");

        const todoList = new TodoList(this.todos, this.toggleTodo, this.deleteTodo);
        this.listElement = todoList.render();
        this.container.appendChild(this.listElement);

        return this.container;
    }
}