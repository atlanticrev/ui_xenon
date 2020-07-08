class Player extends EventTarget {

    // @todo Перевод единиц измерения времени
    // @todo Заполнять прогресс в зависимости от типа источника анимации
    constructor(duration = 240) {
        super();

        this.playControl = null;
        this.backControl = null;
        this.forwardControl = null;

        this.player = this.createTemplate();
        this.render(document.body);

        this.progress = parseInt(window.getComputedStyle(this.player).getPropertyValue('--progress'));
        this.duration = duration;

        this.playerRect = this.player.getBoundingClientRect();
        this.timeFromBlock = this.player.querySelector('.from');
        this.timeToBlock = this.player.querySelector('.to');
        this.trackBlock = this.player.querySelector('.player-track');

        this.trackBlock.addEventListener('click', (e) => {
            const offset = e.clientX - this.playerRect.left;
            this.progress = offset / this.playerRect.width * 100;
            this.player.style.setProperty('--progress', `${this.progress}%`);
        });
    }

    createTemplate () {
        const node = document.createElement('div');
        node.innerHTML = `
            <div class="player ui-element">
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
        `;
        return node.firstElementChild;
    }

    render (container) {
        container.appendChild(this.player);
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
        this.player.style.setProperty('--progress', `${this.progress}%`);
    }

    intervalTick () {
        if (this.progress >= 100) {
            clearInterval(this.interval);
        }
        const onePercent = this.duration / 100;
        // const pxPerSec = this.playerRect.width / this.duration;
        // const pxInOnePercent = pxPerSec * onePercent;
        // this.duration += pxPerSec;
        // this.progress += pxInOnePercent;
        // 0-100%
        this.progress = Math.max(0, Math.min(100, this.progress + onePercent));
        this.player.style.setProperty('--progress', `${this.progress}%`);
    }

}

const player = new Player(240);