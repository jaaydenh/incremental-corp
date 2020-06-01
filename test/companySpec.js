/* eslint-disable no-undef */
import Counter from '../src/counter.js';
import SaveGame from '../src/save_game.js';
import GameEngine from '../src/game_engine.js';
import Company from '../src/company.js';

describe('Unlocked Starting Company', function() {
    var canvas = document.createElement('canvas');
    canvas.width = 620;
    canvas.height = 800;
    var engine = new GameEngine(canvas);
    const data =     {
        name: 'Wood',
        starting_cost: 1,
        cost_multiplier: 1.2,
        starting_income: 1,
        income_increment: 1,
        speed: 6,
        manager_cost: 1000,
        enabled: true,
        description: '',
        y_offset: 0,
        img_name: 'Wood'
    };

    it('should have the correct starting income', () => {
        const startingMoney = 0;
        const moneyCounter = new Counter(20, 10, 400, 40, 40, startingMoney);
        const player = SaveGame.initSave(moneyCounter);

        var company = new Company(data, engine, player);
        
        expect(company._starting_income).toEqual(data.starting_income);
    });

    it('should not have created the open button', () => {
        const startingMoney = 0;
        const moneyCounter = new Counter(20, 10, 400, 40, 40, startingMoney);
        const player = SaveGame.initSave(moneyCounter);

        var company = new Company(data, engine, player);
        
        expect(company.openButton).toBe(undefined);
    });

    it('should have created the produce button', () => {
        const startingMoney = 0;
        const moneyCounter = new Counter(20, 10, 400, 40, 40, startingMoney);
        const player = SaveGame.initSave(moneyCounter);

        var company = new Company(data, engine, player);
        
        expect(company.produceButton).not.toBe(undefined);
    });

    it('should have created the buy button', () => {
        const startingMoney = 0;
        const moneyCounter = new Counter(20, 10, 400, 40, 40, startingMoney);
        const player = SaveGame.initSave(moneyCounter);

        var company = new Company(data, engine, player);
        
        expect(company.buyButton).not.toBe(undefined);
    });

    it('should have increased income after pressing the buy button', () => {
        const startingMoney = 0;
        const moneyCounter = new Counter(20, 10, 400, 40, 40, startingMoney);
        const player = SaveGame.initSave(moneyCounter);
        player.money = 5;
        var company = new Company(data, engine, player);
        company.buyButtonPress();

        expect(company.progressBar.income).toEqual(2);
    });
});