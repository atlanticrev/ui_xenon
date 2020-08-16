class XenonBase extends EventTarget {

    static get defaults () {
        return {};
    }

    constructor () {
        super();
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