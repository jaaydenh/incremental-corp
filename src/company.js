import BuyButton from './buy_button.js';
import ProduceButton from './produce_button.js';
import OpenButton from './open_button.js';
import ManagerButton from './manager_button.js';
import ProgressBar from './progress_bar.js';

export default class Company {
    constructor (data, engine, player) {
        this._name = data.name;
        this._starting_cost = data.starting_cost;
        this._cost_multiplier = data.cost_multiplier;
        this._starting_income = data.starting_income;
        this._income_increment = data.income_increment;
        this._speed = data.speed;
        this._manager_cost = data.manager_cost;
        this._enabled = data.enabled;
        this._description = data.description;
        this.y_offset = data.y_offset;
        this._img_name = data.img_name;
        this._managerHired = false;

        this._engine = engine;
        this._player = player;

        if (this._player.getCompanyCurrentIncome(this._name) > 0) {
            this._starting_income = this._player.getCompanyCurrentIncome(this._name);
        }

        if (this._player.isCompanyEnabled(this._name)) {
            this.openCompany();
        } else {
            this.openButton = new OpenButton(20, 90 + this.y_offset, 540, 60, this._name, this._starting_cost, true);
            this.openButton.handler = this.openButtonPress.bind(this);
            engine.gameObjects.push(this.openButton);
        }
    }

    openCompany() {
        this.progressBar = new ProgressBar(120, 90 + this.y_offset, 260, 40, this._starting_income, this._speed);
        this.progressBar.handler = this.progressCompleted.bind(this);
        this._engine.gameObjects.push(this.progressBar);

        this.produceButton = new ProduceButton(20, 90 + this.y_offset,  80, 80, this._name, this._img_name);
        this.produceButton.handler = this.produceButtonPress.bind(this);
        this._engine.gameObjects.push(this.produceButton);

        this.buyButton = new BuyButton(120, 145 + this.y_offset, 260, 40, this._starting_cost * this._cost_multiplier);

        if (this._player.getCompanyCurrentCost(this._name) > 0) {
            this.buyButton.cost = this._player.getCompanyCurrentCost(this._name);
        }

        this.buyButton.handler = this.buyButtonPress.bind(this);
        this._engine.gameObjects.push(this.buyButton);

        if (!this._player.isManagerHired(this._name)) {
            this.managerButton = new ManagerButton(400, 90 + this.y_offset, 160, 80, this._manager_cost, true);
            this.managerButton.handler = this.hireManagerButtonPress.bind(this);
            this._engine.gameObjects.push(this.managerButton);
        } else{
            this.activateManager();
        }
    }

    buyButtonPress () {
        if (this._player.money >= this.buyButton.cost) {
            this._player.money -= this.buyButton.cost;
            this.progressBar.income += this._income_increment;
            this._player.setCompanyCurrentIncome(this._name, this.progressBar.income);
            this.progressBar.reset(this._engine.context2D);
            this.buyButton.cost *= this._cost_multiplier;
            this._player.setCompanyCurrentCost(this._name, this.buyButton.cost);
        }
    }

    progressCompleted() {
        this._player.money += this.progressBar._income;
    }

    produceButtonPress () {
        this.progressBar.isAnimating = true;
    }

    openButtonPress () {
        if (this._player.money >= this._starting_cost) {
            this._player.openCompany(this._name);
            this._player.money -= this._starting_cost;
            this.openButton._enabled = false;
            this.openButton.clear(this._engine.context2D);
            this._enabled = true;
            this.openCompany();
        }
    }

    hireManagerButtonPress () {
        if (this._player.money >= this._manager_cost) {
            // redraw the area of the canvas that contained the button to remove it from the display
            this.managerButton.clear(this._engine.context2D);
            
            this._managerHired = true;
            this.managerButton.enabled = false;

            // remove the manager button from the gameloop
            var index = this._engine.gameObjects.indexOf(this.managerButton);
            if (index !== -1) this._engine.gameObjects.splice(index, 1);

            this.activateManager();
            this._player.hireManager(this._name);
        }
    }

    activateManager () {
        setInterval(this.produceButtonPress.bind(this), 500);
    }
}
