class XenonCheckBox extends EventTarget {

    static get defaults () {
        return {
            checked: false,
        };
    }

    constructor (options) {
        super();
        this.options = Object.assign({}, XenonCheckBox.defaults, options);
        this.el = this.createTemplate();
        this.nativeInput = this.el.querySelector('input');
        this.init();
        this.render();
    }

    createTemplate () {
        return Utils.createEl(`
            <div class="checkbox-track ${this.options.checked ? 'checked' : ''}">
                <div class="checkbox-wrapper">
                    <input type="checkbox" checked="${this.options.checked ? 'checked' : ''}"/>
                </div>
            </div>         
        `);
    }

    init () {
        this.checked = this.options.checked;
        this.el.addEventListener('click', () => this.onCheck());
    }

    render (root = document.body) {
        root.appendChild(this.el);
    }

    onCheck () {
        this.checked = !this.checked;
        if (this.checked) {
            this.nativeInput.checked = 'checked';
            this.dispatchEvent(new CustomEvent('XenonCheckBox.EVENT_CHECKED', {detail: this.checked}));
        } else {
            this.nativeInput.checked = '';
            this.dispatchEvent(new CustomEvent('XenonCheckBox.EVENT_UNCHECKED', {detail: this.checked}));
        }
        this.el.classList.toggle('checked');
    }

    isChecked () {
        return this.checked;
    }

}