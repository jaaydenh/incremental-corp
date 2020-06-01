import Button from './button.js';
import Util from './util.js';

export default class BuyButton extends Button {
    constructor (x, y, width, height, cost) {
        super(x, y, width, height);

        this._text = 'Buy';
        this._cost = cost;
    }

    set cost (newCost) {
        this._cost = newCost;
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

        var imageObj = new Image();
        imageObj.xPos = this._x;
        imageObj.yPos = this._y;
        imageObj.width = this._width;
        imageObj.height = this._height;
        imageObj.onload = function() {
            ctx.drawImage(imageObj, this.xPos, this.yPos, this.width, this.height);
        };
        imageObj.src = './img/UI_Fill_Orange.png';
        
        // text options
        var fontSize = 20;
        ctx.fillStyle = '#242424';
        ctx.font = fontSize + 'px sans-se';

        // text position
        var textSize = ctx.measureText(this._text + ' $' + Util.formatMoney(this._cost, 2));
        var textX = this._x + (this._width / 2) - (textSize.width / 2);
        var textY = this._y + (this._height / 2) - (fontSize / 2);

        // draw the text
        ctx.fillText(this._text + ' $' + Util.formatMoney(this._cost, 2), textX, textY);
    }
}
