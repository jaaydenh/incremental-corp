import UIObject from './uiobject.js';

export default class ProgressBar extends UIObject {
    constructor (x, y, width, height, income, speed) {
        super();

        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;

        this._income = income;
        this._speed = speed;

        this._barWidth = 0;
        this._isAnimating = false;
    }

    set isAnimating (animating) {
        this._isAnimating = animating;
    }

    get isAnimating () {
        return this._isAnimating;
    }

    set income (newIncome) {
        this._income = newIncome;
    }

    get income () {
        return this._income;
    }

    drawBar (ctx) {
        this.drawBackground(ctx);

        // progress bar fill
        ctx.fillStyle = '#7FE918';
        ctx.fillRect(this._x, this._y, this._barWidth, this._height);
    }

    update (ctx) {
        if (this._isAnimating) {
            this._barWidth += this._speed;

            if (this._barWidth > this._width) {
                this._barWidth = 0;
                this._isAnimating = false;
                this.drawBar(ctx);
                this.handler();
            } else {
                this.drawBar(ctx);
            }
        } else {
            this.drawBackground (ctx);
        }
    }

    drawBackground (ctx) {
        ctx.fillStyle = '#BDBDBD';
        ctx.fillRect(this._x, this._y, this._width, this._height);
    }

    drawIncomeText (ctx) {
        // text options
        var fontSize = 20;
        ctx.font = fontSize + 'px Arial';
        ctx.fillStyle = '#242424';

        // text position
        var textSize = ctx.measureText(this._income);
        var textX = this._x + (this._width / 2) - (textSize.width / 2);
        var textY = this._y + (this._height / 2) - (fontSize / 2);

        ctx.fillText(this._income, textX, textY);
    }

    draw (ctx) {
        this.drawIncomeText(ctx);
    }
}
