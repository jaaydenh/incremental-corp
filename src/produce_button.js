import Button from './button.js';

export default class ProduceButton extends Button {
    constructor (x, y, width, height, text) {
        super(x, y, width, height);

        this._text = text;
    }

    draw (ctx) {
        // set button color
        if (this._hovered) {
            ctx.fillStyle = 'rgba(200,255,200,1.0)';
        } else {
            ctx.fillStyle = '#62C1FF';
        }

        // draw button
        ctx.fillRect(this._x, this._y, this._width, this._height);

        // text options
        var fontSize = 20;
        ctx.fillStyle = '#000000';
        ctx.font = fontSize + 'px sans-se    rif';

        // set text position
        var textSize = ctx.measureText(this._text);
        var textX = this._x + (this._width / 2) - (textSize.width / 2);
        var textY = this._y + (this._height / 2) - (fontSize / 2);

        ctx.fillText(this._text, textX, textY);
    }
}
