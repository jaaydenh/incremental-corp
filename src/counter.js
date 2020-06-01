import UIObject from './uiobject.js';
import Util from './util.js';

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
        this._value = newValue;
    }

    get value () {
        return this._value;
    }

    update (ctx) {

    }

    draw (ctx) {
        var imageObj2 = new Image();
        imageObj2.xPos = this._x;
        imageObj2.yPos = this._y;
        imageObj2.width = this._width;
        imageObj2.height = this._height;
        imageObj2.onload = function() {
            ctx.drawImage(imageObj2, this.xPos + 25, this.yPos -2, this.width, this.height);
        };
        imageObj2.src = './img/UI_Frame_Transparent.png';

        var imageObj = new Image();
        imageObj.xPos = this._x;
        imageObj.yPos = this._y;
        imageObj.onload = function() {
            ctx.drawImage(imageObj, this.xPos + 10, this.yPos - 6, 48, 48);
        };
        imageObj.src = './img/Coins.png';

        ctx.fillStyle = '#ededed';
        ctx.font = this._fontSize + 'px sans-se';

        ctx.fillText('$ ' + Util.formatMoney(this._value, 2), this._x + 60, this._y + 1);
    }
}
