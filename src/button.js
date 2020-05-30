import UIObject from './uiobject.js';

export default class Button extends UIObject {
    constructor (x, y, width, height) {
        super();

        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._clicked = false;
        this._hovered = false;
    }

    update (ctx) {
        var wasNotClicked = !this._clicked;
        this.updateStats(ctx);

        if (this._clicked && wasNotClicked) {
            if (typeof this.handler !== 'undefined') {
                this.handler();
            } else {
                console.log('missing button handler');
            }
        }
    }

    draw (ctx) {

    }
}
