class XenonButton extends XenonBase {

    static get defaults () {
        return {};
    }

    constructor (options) {
        super(options);
        this.options = Object.assign({}, XenonButton.defaults, options);
        this.el = this.createTemplate();
        this.init();
        this.render(document.body);
    }

    init () {
        this.onClick = this.onClick.bind(this);
        this.el.addEventListener('click', this.onClick);
    }

    createTemplate () {
        return Utils.createEl(`
            <button class="activate-sidebar">
                Button
            </button>
        `);
    }

    onClick () {
        this.dispatchEvent(new Event('XenonButton.click'));
    }

}