class XenonBase {

    static get defaults () {
        return {};
    }

    constructor () {
        this.el = null;
    }

    init () {}

    createTemplate () {}

    render (root = document.body) {
        root.appendChild(this.el);
    }

    destroy () {
        this.el.parentElement.removeChild(this.el);
    }

}