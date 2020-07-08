class CheckBox extends EventTarget {

    constructor (options) {
        super();
        this.checked = options.checked || false;
        this.checkbox = this.createTemplate();
        this.nativeInput = this.checkbox.querySelector('input');

        this.checkbox.addEventListener('click', () => this.onCheck());

        this.render(document.body);
    }

    createTemplate () {
        const node = document.createElement('div');
        node.innerHTML = `
            <div class="checkbox-track ui-element ${this.checked ? 'checked' : ''}">
                <div class="checkbox-wrapper">
                    <input type="checkbox" checked="${this.checked ? 'checked' : ''}"/>
                </div>
            </div>         
        `;
        return node.firstElementChild;
    }

    render (container) {
        container.appendChild(this.checkbox);
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
        this.checkbox.classList.toggle('checked');
    }

    isChecked () {
        return this.checked;
    }

}

const checkbox = new CheckBox({checked: true});
const checkbox1 = new CheckBox({checked: false});

checkbox.addEventListener('CheckBox.EVENT_CHECKED', (e) => console.log(e.detail));