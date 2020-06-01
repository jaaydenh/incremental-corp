/* eslint-disable no-undef */
import Counter from '../src/counter.js';
import SaveGame from '../src/save_game.js';

describe('Player', function() {

    it('should have the correct starting money', () => {
        const startingMoney = 0;
        const moneyCounter = new Counter(20, 10, 400, 40, 40, startingMoney);
        const player = SaveGame.initSave(moneyCounter);

        expect(player.money).toEqual(startingMoney);
    });
});