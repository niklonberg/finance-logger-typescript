class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.textContent = heading;
        li.appendChild(h4);
        const p = document.createElement("p");
        p.textContent = item.format();
        li.appendChild(p);
        if (position === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
export default ListTemplate;
