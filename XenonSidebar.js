class XenonSidebar extends XenonBase {

    static get defaults () {
        return {
            isOpened: false,
            dimmerOpacity: '0.7'
        };
    }

    constructor (options) {
        super(options);
        this.options = Object.assign({}, XenonSidebar.defaults, options);
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
        this.sidebarDimmer.addEventListener('click', () => {
            this.toggle();
        });
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

    toggle () {
        if (!this.isOpened) {
            this.el.style.display = 'flex';
            // @todo why rAF?
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    this.sidebar.style.setProperty('--offset', '0');
                    this.sidebarDimmer.style.setProperty('--opacity', this.options.dimmerOpacity);
                    this.isOpened = true;
                });
            })
        } else {
            this.sidebar.style.setProperty('--offset', '-100%');
            this.sidebarDimmer.style.setProperty('--opacity', '0');
            this.isOpened = false;
            this.sidebar.addEventListener('transitionend', this._onTransitionEnd, false);
        }
    }

    _onTransitionEnd (e) {
        this.el.style.display = 'none';
        this.sidebar.removeEventListener('transitionend', this._onTransitionEnd, false);
    }

}