import Button from './button.js';

export default class BuyButton extends Button {
    constructor (x, y, width, height, cost) {
        super(x, y, width, height);

        this._text = 'Buy';
        this._cost = cost;
    }

    set cost (newCost) {
        this._cost = Math.round((newCost + Number.EPSILON) * 100) / 100;
    }

    get cost () {
        return this._cost;
    }

    draw (ctx) {
        // set button color
        if (this._hovered) {
            ctx.fillStyle = 'rgba(200,255,200,1.0)';
        } else {
            ctx.fillStyle = '#FFAD44';
        }

        // draw button
        ctx.fillRect(this._x, this._y, this._width, this._height);

        // text options
        var fontSize = 20;
        ctx.fillStyle = '#000000';
        ctx.font = fontSize + 'px sans-se    rif';

        // text position
        var textSize = ctx.measureText(this._text + ' : ' + this._cost);
        var textX = this._x + (this._width / 2) - (textSize.width / 2);
        var textY = this._y + (this._height / 2) - (fontSize / 2);

        // draw the text
        ctx.fillText(this._text + ' $' + this._cost, textX, textY);
    }
}
