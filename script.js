class CheckBox extends EventTarget {

    constructor (options) {
        super();
        this.checked = options.checked || false;
        this.init();
        this.render(document.body);
    }

    init () {
        const node = document.createElement('div');
        node.innerHTML = `
            <div class="checkbox-track ui-element ${this.checked ? 'checked' : ''}">
                <div class="checkbox-wrapper">
                    <input type="checkbox" checked="${this.checked ? 'checked' : ''}"/>
                </div>
            </div>         
        `;
        this.checkbox = node.firstElementChild;
        this.checkbox.addEventListener('click', () => this.onCheck());
    }

    render (container) {
        container.appendChild(this.checkbox);
    }

    onCheck () {
        this.checked = !this.checked;
        this.checkbox.classList.toggle('checked');
    }

}

CheckBox.EVENT_CHECKED = Symbol('CheckBox.EVENT_CHECKED');
CheckBox.EVENT_UNCHECKED = Symbol('CheckBox.EVENT_UNCHECKED');

const checkbox = new CheckBox({checked: true});
const checkbox1 = new CheckBox({checked: false});
const checkbox2 = new CheckBox({checked: true});
const checkbox3 = new CheckBox({checked: false});

const checkbox4 = new CheckBox({checked: true});
const checkbox5 = new CheckBox({checked: false});
const checkbox6 = new CheckBox({checked: true});
const checkbox7 = new CheckBox({checked: false});

const checkbox8 = new CheckBox({checked: true});
const checkbox9 = new CheckBox({checked: false});
const checkbox10 = new CheckBox({checked: true});
const checkbox11 = new CheckBox({checked: false});

const checkbox12 = new CheckBox({checked: true});
const checkbox13 = new CheckBox({checked: false});
const checkbox14 = new CheckBox({checked: true});
const checkbox15 = new CheckBox({checked: false});