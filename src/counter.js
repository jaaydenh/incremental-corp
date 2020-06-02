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

        this.loadImages();
    }

    // TODO: loading should be moved to a loading screen
    loadImages () {
        this._bgImage = new Image();
        this._bgImage.xPos = this._x;
        this._bgImage.yPos = this._y;
        this._bgImage.width = this._width;
        this._bgImage.height = this._height;
        this._bgImage.onload = function() {
            this.loaded = true;
            
        };
        this._bgImage.src = './img/UI_Frame_Transparent.png';

        this._coinImage = new Image();
        this._coinImage.xPos = this._x;
        this._coinImage.yPos = this._y;
        this._coinImage.onload = function() {
            this.loaded = true;
        };
        this._coinImage.src = './img/Coins.png';
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
        if (this._bgImage.loaded) {
            ctx.drawImage(this._bgImage, this._bgImage.xPos + 25, this._bgImage.yPos -2, this._bgImage.width, this._bgImage.height);
        }
        
        if (this._coinImage.loaded) {
            ctx.drawImage(this._coinImage, this._coinImage.xPos + 10, this._coinImage.yPos - 6, 48, 48);
        }

        ctx.fillStyle = '#ededed';
        ctx.font = this._fontSize + 'px Arial';

        ctx.fillText('$ ' + Util.formatMoney(this._value, 2), this._x + 60, this._y + 1);
    }
}
