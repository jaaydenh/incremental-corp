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
        ctx.fillStyle = '#07fc03';
        ctx.fillRect(this._x, this._y, this._barWidth, this._height);
    }

    update (ctx) {
        if (this._isAnimating) {
            this._barWidth += this._speed;

            if (this._barWidth > this._width) {
                this.reset(ctx);
                this._barWidth = 0;
                this._isAnimating = false;
                this.drawBar(ctx);
                this.drawIncomeText(ctx);
                this.handler();
            } else {
                this.drawBar(ctx);
                this.drawIncomeText(ctx);
            }
        } else {
            this.reset(ctx);
        }
    }

    reset (ctx) {
        // draw background
        ctx.fillStyle = '#BDBDBD';
        ctx.fillRect(this._x, this._y, this._width, this._height);
        this.drawIncomeText(ctx);
    }

    drawIncomeText (ctx) {
        // text options
        var fontSize = 20;
        ctx.font = fontSize + 'px sans-se    rif';
        ctx.fillStyle = '#000000';
        // text position
        var textSize = ctx.measureText(this._income);
        var textX = this._x + (this._width / 2) - (textSize.width / 2);
        var textY = this._y + (this._height / 2) - (fontSize / 2);

        // draw the text
        ctx.fillText(this._income, textX, textY);
    }

    draw (ctx) {

    }
}
