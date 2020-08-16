class XenonCircularProgress {

    static get defaults () {
        return {
            progressBarWidth: '4px',
            progressBackColor: '#000000',
            progressColor: '#4ee3c3',
            progress: '25',
            progressContainerSize: '100px'
        };
    }

    constructor (options) {
        this.options = Object.assign({}, XenonCircularProgress.defaults, options);
        this.el = this.createTemplate();
        this.init();
        this.render();
    }

    init () {
        for (let optionName of Object.keys(this.options)) {
            this.el.style.setProperty(`--${optionName}`, this.options[optionName]);
        }
    }

    createTemplate () {
        return Utils.createEl(`
            <div id="container">
              <svg>
                <circle class="back"></circle>
                <circle class="progress"></circle>
              </svg>
              <div class="progress-content"></div>
            </div>      
        `);
    }

    render (root = document.body) {
        root.appendChild(this.el);
    }

    destroy () {
        this.el.parentElement.removeChild(this.el);
    }

    setProgress (percent) {
        this.el.style.setProperty(`--progress`, percent.toString());
    }

}