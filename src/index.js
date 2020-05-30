import GameEngine from './game_engine.js';
import BuyButton from './buy_button.js';
import ProduceButton from './produce_button.js';
import Counter from './counter.js';
import ProgressBar from './progress_bar.js';

document.getElementById('app').innerHTML = `
<h1>Incremental Corp</h1>
<div></div>
`;

var canvas = document.getElementById('gameCanvas');

canvas.width = 620;
canvas.height = 800;

var engine = new GameEngine(canvas);
var money = 0;

var moneyCounter = new Counter(20, 10, 400, 30, 30, 0);

var biz1ProgressBar = new ProgressBar(160, 50, 200, 40, 1, 6);
biz1ProgressBar.handler = function () {
    money += biz1ProgressBar.income;
    moneyCounter.value = money;
};

var biz1ProduceButton = new ProduceButton('Biz 1', 20, 50, 140, 40);
biz1ProduceButton.handler = function () {
    biz1ProgressBar.isAnimating = true;
};

var biz1BuyButton = new BuyButton(20, 90, 352, 40, 1);
biz1BuyButton.handler = function () {
    if (money >= biz1BuyButton.cost) {
        money -= biz1BuyButton.cost;
        moneyCounter.value = money;
        biz1ProgressBar.income += 1;
        biz1BuyButton.cost = biz1BuyButton.cost * 1.2;
    }
};

engine.gameObjects.push(moneyCounter);
engine.gameObjects.push(biz1ProduceButton);
engine.gameObjects.push(biz1BuyButton);
engine.gameObjects.push(biz1ProgressBar);

engine.run();
