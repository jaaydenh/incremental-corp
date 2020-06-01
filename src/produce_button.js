import Button from './button.js';

export default class ProduceButton extends Button {
    constructor (x, y, width, height, text, imgName) {
        super(x, y, width, height);

        this._text = text;
        this._imgName = imgName;
    }

    draw (ctx) {
        // set button color
        if (this._hovered) {
            ctx.fillStyle = 'rgba(200,255,200,1.0)';
        } else {
            ctx.fillStyle = '#62C1FF';
        }

        // draw button
        // ctx.fillRect(this._x, this._y, this._width, this._height);

        var imageObj = new Image();
        imageObj.xPos = this._x;
        imageObj.yPos = this._y;
        imageObj.width = this._width;
        imageObj.height = this._height;
        imageObj.onload = function() {
            ctx.drawImage(imageObj, this.xPos, this.yPos, this.width, this.height);
        };
        imageObj.src = './img/UI_Panel_Window.png';

        var imageObj2 = new Image();
        imageObj2.xPos = this._x;
        imageObj2.yPos = this._y;
        imageObj2.width = this._width;
        imageObj2.height = this._height;
        imageObj2.onload = function() {
            ctx.drawImage(imageObj2, this.xPos + 4, this.yPos + 4, this.width - 9, this.height - 12);
        };
        imageObj2.src = './img/UI_Panel_Content.png';

        var imageObj3 = new Image();
        imageObj3.xPos = this._x;
        imageObj3.yPos = this._y;
        imageObj3.width = this._width;
        imageObj3.height = this._height;
        imageObj3.onload = function() {
            ctx.drawImage(imageObj3, this.xPos+5, this.yPos - 14, this.width-15, this.height-15);
        };
        imageObj3.src = './img/' + this._imgName + '.png';

        // text options
        var fontSize = 20;
        ctx.fillStyle = '#000000';
        ctx.font = fontSize + 'px sans-se    rif';

        // set text position
        var textSize = ctx.measureText(this._text);
        var textX = this._x + (this._width / 2) - (textSize.width / 2);
        var textY = this._y + (this._height / 2) - (fontSize / 2) + 21;

        ctx.fillText(this._text, textX, textY);
    }
}
