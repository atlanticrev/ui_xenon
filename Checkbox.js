class CheckBox extends EventTarget {

    static get defaults () {
        return {
            checked: false,
            root: document.body
        };
    }

    constructor (options) {
        super();
        this.options = Object.assign({}, CheckBox.defaults, options);
        this.checked = this.options.checked;
        this.checkboxEl = this.createTemplate();
        this.nativeInput = this.checkboxEl.querySelector('input');
        this.checkboxEl.addEventListener('click', () => this.onCheck());
        this.render(this.options.root);
    }

    createTemplate () {
        return Utils.createEl(`
            <div class="checkbox-track ${this.checked ? 'checked' : ''}">
                <div class="checkbox-wrapper">
                    <input type="checkbox" checked="${this.checked ? 'checked' : ''}"/>
                </div>
            </div>         
        `);
    }

    render (container) {
        container.appendChild(this.checkboxEl);
    }

    onCheck () {
        this.checked = !this.checked;
        if (this.checked) {
            this.nativeInput.checked = 'checked';
            this.dispatchEvent(new CustomEvent('CheckBox.EVENT_CHECKED', {detail: this.checked}));
        } else {
            this.nativeInput.checked = '';
            this.dispatchEvent(new CustomEvent('CheckBox.EVENT_UNCHECKED', {detail: this.checked}));
        }
        this.checkboxEl.classList.toggle('checked');
    }

    isChecked () {
        return this.checked;
    }

}