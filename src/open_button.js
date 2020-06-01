import Button from './button.js';
import Util from './util.js';

export default class OpenButton extends Button {
    constructor (x, y, width, height, name, cost, enabled) {
        super(x, y, width, height);

        this._text = 'Unlock ' + name;
        this._cost = cost;
        this._enabled = enabled;
    }

    get cost () {
        return this._cost;
    }

    update (ctx) {
        if (this._enabled) {
            super.update(ctx);
        }
    }

    draw (ctx) {
        if (this._enabled) {
            // set button color
            if (this._hovered) {
                ctx.fillStyle = 'rgba(200,255,200,1.0)';
            } else {
                ctx.fillStyle = '#77B4CD';
            }

            // draw button
            ctx.fillRect(this._x, this._y, this._width, this._height);

            // text options
            var fontSize = 20;
            ctx.fillStyle = '#242424';
            ctx.font = fontSize + 'px sans-se';

            // text position
            var textSize = ctx.measureText(this._text + ' : ' + this._cost);
            var textX = this._x + (this._width / 2) - (textSize.width / 2);
            var textY = this._y + (this._height / 2) - (fontSize / 2);

            // draw the text
            ctx.fillText(this._text + ' $' + Util.formatMoney(this._cost, 0), textX, textY);
        }
    }

    clear (ctx) {
        ctx.fillStyle = '#787878';
        ctx.fillRect(this._x, this._y, this._width, this._height);
    }
}
