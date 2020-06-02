import Button from './button.js';
import Util from './util.js';

export default class BuyButton extends Button {
    constructor (x, y, width, height, cost) {
        super(x, y, width, height);

        this._text = 'Buy';
        this._cost = cost;

        this._btnImage = new Image();
        this._btnImage.xPos = this._x;
        this._btnImage.yPos = this._y;
        this._btnImage.width = this._width;
        this._btnImage.height = this._height;
        this._btnImage.onload = function() {
            this.loaded = true;
        };
        this._btnImage.src = './img/UI_Fill_Orange.png';
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
            // TODO: add hover effect alt image for button
            ctx.fillStyle = 'rgba(200,255,200,1.0)';
        }

        if (this._btnImage.loaded) {
            ctx.drawImage(this._btnImage, this._btnImage.xPos, this._btnImage.yPos, this._btnImage.width, this._btnImage.height);
        }

        if (this._hovered) {
            ctx.fillStyle = '#ffffff';
        } else {
            ctx.fillStyle = '#242424';
        }
        
        var fontSize = 20;
        ctx.font = fontSize + 'px Arial';

        // text position
        var textSize = ctx.measureText(this._text + ' $' + Util.formatMoney(this._cost, 2));
        var textX = this._x + (this._width / 2) - (textSize.width / 2);
        var textY = this._y + (this._height / 2) - (fontSize / 2);

        // draw the text
        ctx.fillText(this._text + ' $' + Util.formatMoney(this._cost, 2), textX, textY);
    }
}
