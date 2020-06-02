import Button from './button.js';

export default class ProduceButton extends Button {
    constructor (x, y, width, height, text, imgName) {
        super(x, y, width, height);

        this._text = text;
        this._imgName = imgName;

        this.loadImages();
    }

    // TODO: loading should be moved to a loading screen
    loadImages () {
        this._btnBg = new Image();
        this._btnBg.xPos = this._x;
        this._btnBg.yPos = this._y;
        this._btnBg.width = this._width;
        this._btnBg.height = this._height;
        this._btnBg.onload = function() {
            this.loaded = true;
        };
        this._btnBg.src = './img/UI_Panel_Window.png';

        this._btnPanel = new Image();
        this._btnPanel.xPos = this._x;
        this._btnPanel.yPos = this._y;
        this._btnPanel.width = this._width;
        this._btnPanel.height = this._height;
        this._btnPanel.onload = function() {
            this.loaded = true;
        };
        this._btnPanel.src = './img/UI_Panel_Content.png';

        this._btnIcon = new Image();
        this._btnIcon.xPos = this._x;
        this._btnIcon.yPos = this._y;
        this._btnIcon.width = this._width;
        this._btnIcon.height = this._height;
        this._btnIcon.onload = function() {
            this.loaded = true;
        };
        this._btnIcon.src = './img/' + this._imgName + '.png';
    }

    draw (ctx) {
        if (this._hovered) {
            // TODO: add hover effect alt image or animation for button
            ctx.fillStyle = 'rgba(200,255,200,1.0)';
        }

        if (this._btnBg.loaded) {
            ctx.drawImage(this._btnBg, this._btnBg.xPos, this._btnBg.yPos, this._btnBg.width, this._btnBg.height);
        }
        if (this._btnPanel.loaded) {
            ctx.drawImage(this._btnPanel, this._btnPanel.xPos + 4, this._btnPanel.yPos + 4, this._btnPanel.width - 9, this._btnPanel.height - 12);
        }

        if (this._btnIcon.loaded) {
            ctx.drawImage(this._btnIcon, this._btnIcon.xPos+5, this._btnIcon.yPos - 14, this._btnIcon.width-15, this._btnIcon.height-15);
        }

        // text options
        if (this._hovered) {
            ctx.fillStyle = '#227fbd';
        } else {
            ctx.fillStyle = '#242424';
        }

        var fontSize = 20;
        ctx.font = fontSize + 'px Arial';

        // set text position
        var textSize = ctx.measureText(this._text);
        var textX = this._x + (this._width / 2) - (textSize.width / 2);
        var textY = this._y + (this._height / 2) - (fontSize / 2) + 21;

        ctx.fillText(this._text, textX, textY);
    }
}
