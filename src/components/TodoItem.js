export default class TodoItem {
    constructor(todo) {
        this.todo = todo;
    }

    render() {
        const li = document.createElement("li");
        li.classList.add("task");

        const title = document.createElement("div");
        title.classList.add("title");
        title.innerText = this.todo.title;
        li.appendChild(title);

        const description = document.createElement("div");
        description.classList.add("description");
        description.innerText = this.todo.description;
        li.appendChild(description);

        const dueDate = document.createElement("div");
        dueDate.classList.add("due-date");
        dueDate.innerText = this.todo.dueDate;
        li.appendChild(dueDate);

        const project = document.createElement("div");
        project.classList.add("project");
        project.innerText = this.todo.project;
        li.appendChild(project);

        return li;
    }
}