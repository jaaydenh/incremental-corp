export default class UIObject {
    intersects (obj, mouse) {
        var t = 5; // tolerance
        var xIntersect = (mouse.x + t) > obj._x && (mouse.x - t) < obj._x + obj._width;
        var yIntersect = (mouse.y + t) > obj._y && (mouse.y - t) < obj._y + obj._height;
        return xIntersect && yIntersect;
    }

    updateStats (ctx) {
        if (this.intersects(this, ctx.mouse)) {
            this._hovered = true;
            if (ctx.mouse.clicked) {
                this._clicked = true;
            }
        } else {
            this._hovered = false;
        }

        if (!ctx.mouse.down) {
            this._clicked = false;
        }
    }
}
