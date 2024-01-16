class Component {
    constructor(TEMPLATE_SELECTR, CONTAINER_SELECTOR) {
        this.template;
        this.container = $(CONTAINER_SELECTOR);
    }
    render(data, empty = true) {
        if(empty) {
            this.container.empty();
        }
        const html = template(data);
        this.container.append(html);
    }
}