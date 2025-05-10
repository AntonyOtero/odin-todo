export default class TodoItem {
    constructor(todo) {
        this.todo = todo;
    }

    render() {
        const li = document.createElement("li");
        li.textContent = this.todo.title;

        return li;
    }
}