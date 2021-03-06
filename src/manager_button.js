import Button from './button.js';
import Util from './util.js';

export default class ManagerButton extends Button {
    constructor (x, y, width, height, cost, enabled) {
        super(x, y, width, height);

        this._text = 'Hire Manager';
        this._cost = cost;
        this._enabled = enabled;
    }

    get cost () {
        return this._cost;
    }

    set enabled (isEnabled) {
        this._enabled = isEnabled;
    }

    update (ctx) {
        if (this._enabled) {
            super.update(ctx);
        }
    }

    draw (ctx) {
        if (this._enabled) {
            if (this._hovered) {
                ctx.fillStyle = 'rgba(200,255,200,1.0)';
            } else {
                ctx.fillStyle = '#7FE918';
            }

            ctx.fillRect(this._x, this._y, this._width, this._height);

            // text options
            var fontSize = 20;
            ctx.fillStyle = '#242424';
            ctx.font = fontSize + 'px Arial';

            // text position
            var textSize = ctx.measureText(this._text);
            var textX = this._x + (this._width / 2) - (textSize.width / 2);

            ctx.fillText(this._text, textX, this._y + 17);

            var textSize1 = ctx.measureText(this._cost);
            var textX1 = this._x + (this._width / 2) - (textSize1.width / 2);
            ctx.fillText(Util.formatMoney(this._cost, 0), textX1, this._y + 46);
        }
    }

    clear (ctx) {
        ctx.fillStyle = '#787878';
        ctx.fillRect(this._x, this._y, this._width, this._height);
    }
}
