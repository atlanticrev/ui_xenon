class Sidebar {

    static get defaults () {
        return {
            isOpened: false,
            dimmerOpacity: '0.5'
        };
    }

    constructor (options) {
        this.options = Object.assign({}, Sidebar.defaults, options);
        this.el = this.createTemplate();
        this.sidebar = this.el.querySelector('.sidebar');
        this.sidebarDimmer = this.el.querySelector('.sidebar-dimmer');
        this.isOpened = this.options.isOpened;
        this.init();
        this.render(document.body);
    }

    init () {
        if (!this.isOpened) {
            this.el.style.display = 'none';
        } else {
            this.el.style.display = 'flex';
        }
        this._onTransitionEnd = this._onTransitionEnd.bind(this);
    }

    createTemplate () {
        return Utils.createEl(`
            <div class="sidebar-container">
                <div class="sidebar">
                    <h2 class="sidebar-name">Sidebar</h2>
                </div>    
                <div class="sidebar-dimmer"></div>     
            </div>         
        `);
    }

    render (root) {
        root.appendChild(this.el);
    }

    destroy () {
        this.el.parentElement.removeChild(this.el);
    }

    toggle () {
        if (!this.isOpened) {
            this.el.style.display = 'flex';
            // @todo why rAF?
            requestAnimationFrame(() => {
                this.sidebar.style.setProperty('--offset', '0');
                this.sidebarDimmer.style.setProperty('--opacity', this.options.dimmerOpacity);
                this.isOpened = true;
            })
        } else {
            this.sidebar.style.setProperty('--offset', '-100%');
            this.sidebarDimmer.style.setProperty('--opacity', '0');
            this.isOpened = false;
            this.sidebar.addEventListener('transitionend', this._onTransitionEnd, false);
        }
    }

    _onTransitionEnd (e) {
        console.log('end of transition', e.target);
        this.el.style.display = 'none';
        this.sidebar.removeEventListener('transitionend', this._onTransitionEnd, false);
    }

}