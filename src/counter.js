import UIObject from './uiobject.js';

export default class Counter extends UIObject {
    constructor (x, y, width, height, fontSize, value) {
        super();

        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._value = value;
        this._fontSize = fontSize;
    }

    set value (newValue) {
        this._value = Math.round((newValue + Number.EPSILON) * 100) / 100;
    }

    get value () {
        return this._value;
    }

    update (ctx) {

    }

    draw (ctx) {
        ctx.clearRect(this._x, this._y, this._width, this._height);

        // text options
        ctx.fillStyle = 'rgba(0,0,0,1.0)';
        ctx.font = this._fontSize + 'px sans-se    rif';

        // text position
        // var textSize = ctx.measureText(this._value);
        // var textX = this.x + (this.width/2) - (textSize.width / 2);
        // var textY = this.y + (this.height/2) - (this.fontSize/2);

        ctx.fillText('$ ' + this._value, this._x, this._y);
    }
}
