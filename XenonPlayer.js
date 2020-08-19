import XenonBase from './XenonBase';

export default class XenonPlayer extends XenonBase {

    // @todo Перевод единиц измерения времени
    // @todo Заполнять прогресс в зависимости от типа источника анимации
    constructor(duration = 240) {
        super();

        this.playControl = null;
        this.backControl = null;
        this.forwardControl = null;

        this.el = this.createTemplate();
        this.render(document.body);

        this.progress = parseInt(window.getComputedStyle(this.el).getPropertyValue('--progress'));
        this.duration = duration;

        this.elRect = this.el.getBoundingClientRect();
        this.timeFromBlock = this.el.querySelector('.from');
        this.timeToBlock = this.el.querySelector('.to');
        this.trackBlock = this.el.querySelector('.player-track');

        // @todo Не правильно работает нажатие
        this.trackBlock.addEventListener('click', (e) => {
            const offset = e.clientX - this.elRect.left;
            this.progress = offset / this.elRect.width * 100;
            this.el.style.setProperty('--progress', `${this.progress}%`);
        });
    }

    createTemplate () {
        return this.createEl(`
            <div class="player">
                <div class="player-controls">
                    <div class="player-play"></div>
                    <div class="player-back"></div>
                    <div class="player-forward"></div>
                </div>
                <div class="player-time">
                    <span class="from">1.23</span>
                    <span class="to">5.43</span>
                </div>
                <div class="player-track"></div>
            </div>       
        `);
    }

    render (root = document.body) {
        root.appendChild(this.el);
    }

    play () {
        this.interval = setInterval(() => this.intervalTick(), 1000);
    }

    stop () {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    reset () {
        this.progress = 0;
        this.el.style.setProperty('--progress', `${this.progress}%`);
    }

    intervalTick () {
        if (this.progress >= 100) {
            clearInterval(this.interval);
        }
        const onePercent = this.duration / 100;
        // const pxPerSec = this.elRect.width / this.duration;
        // const pxInOnePercent = pxPerSec * onePercent;
        // this.duration += pxPerSec;
        // this.progress += pxInOnePercent;
        // 0-100%
        this.progress = Math.max(0, Math.min(100, this.progress + onePercent));
        this.el.style.setProperty('--progress', `${this.progress}%`);
    }

}