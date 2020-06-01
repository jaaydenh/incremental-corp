export default class GameEngine {
    constructor (canvas) {
        this.canvas = canvas;
        this.context2D = canvas.getContext('2d');
        this.gameObjects = [];
        this.setupCanvas(this.context2D);
        this.requestId = null;
    }

    setupCanvas (ctx) {
        this.context2D.textBaseline = 'top';
        this.context2D.fillStyle = '#787878';
        this.context2D.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.context2D.mouse = {
            x: 0,
            y: 0,
            clicked: false,
            down: false
        };

        var engine = this;

        this.canvas.addEventListener('mousemove', function (e) {
            engine.context2D.mouse.x = e.offsetX;
            engine.context2D.mouse.y = e.offsetY;
            engine.context2D.mouse.clicked = (e.which === 1 && !engine.context2D.mouse.down);
            engine.context2D.mouse.down = (e.which === 1);
        });

        this.canvas.addEventListener('mousedown', function (e) {
            engine.context2D.mouse.clicked = !engine.context2D.mouse.down;
            engine.context2D.mouse.down = true;
        });

        this.canvas.addEventListener('mouseup', function (e) {
            engine.context2D.mouse.down = false;
            engine.context2D.mouse.clicked = false;
        });
    }

    run () {
        this.update();
        this.draw();

        this.requestId = requestAnimationFrame(() => this.run());
    }

    update () {
        this.gameObjects.forEach(obj => obj.update(this.context2D));
    }

    draw () {
        this.gameObjects.forEach(obj => obj.draw(this.context2D));
    }
}
