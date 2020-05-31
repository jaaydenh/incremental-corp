import Counter from './counter.js';

export default class Player {
    constructor (money, engine) {
        this._money = money;

        this._moneyCounter = new Counter(20, 10, 400, 30, 30, 0);
        engine.gameObjects.push(this._moneyCounter);
    }

    set money (newMoney) {
        this._money = newMoney;
    }

    get money () {
        return this._money;
    }

    update (ctx) {
        this._moneyCounter.value = this._money;
    }

    draw (ctx) {

    }
}
