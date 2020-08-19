export default class XenonBase extends EventTarget {

    static get defaults () {
        return {};
    }

    constructor () {
        super();
        this.el = null;
    }

    init () {}

    createTemplate () {}

    createEl (templateString) {
        const el = document.createElement('div');
        el.innerHTML = templateString.trim();
        return el.firstElementChild;
    }

    render (root = document.body) {
        root.appendChild(this.el);
    }

    destroy () {
        this.el.parentElement.removeChild(this.el);
    }

}