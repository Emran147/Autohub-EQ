class Component {
    constructor(TEMPLATE_SELECTOR, CONTAINER_SELECTOR) {
        this.template = Handlebars.compile($(TEMPLATE_SELECTOR).html()); 
        this.container = $(CONTAINER_SELECTOR);
        
    }

    render(data, empty = true) {
        if (empty) {
            this.clear();
        }
        const html = this.template({ data : data});
        this.container.append(html);
    }
    clear() {
        this.container.empty();
    }
}
