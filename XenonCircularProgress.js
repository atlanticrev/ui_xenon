import XenonBase from './XenonBase';

export default class XenonCircularProgress extends XenonBase {

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
        super(options);
        this.options = Object.assign({}, XenonCircularProgress.defaults, options);
        this.el = this.createTemplate();
        this.progressContent = this.el.querySelector('.progress-content');
        this.init();
        this.render();
    }

    init () {
        this.progress = this.options.progress;
        for (let optionName of Object.keys(this.options)) {
            this.el.style.setProperty(`--${optionName}`, this.options[optionName]);
        }
    }

    createTemplate () {
        return this.createEl(`
            <div id="container">
              <svg>
                <circle class="back"></circle>
                <circle class="progress"></circle>
              </svg>
              <div class="progress-content">${this.options.progress}%</div>
            </div>      
        `);
    }

    /**
     * @param {Number|String} percent
     */
    setProgress (percent) {
        this.progress = percent.toString();
        this.progressContent.textContent = `${this.progress}%`;
        this.el.style.setProperty(`--progress`, this.progress);
    }

}