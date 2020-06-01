import Player from './player.js';

export default class SaveGame {

    static initSave(moneyCounter) {
        let player =  new Player(moneyCounter);
        player.initPlayer();
        return player;
    }

    static saveGame(player) {
        player.last_login = Math.floor(Date.now() / 1000);
        localStorage.setItem('player', JSON.stringify(player));
    }

    static loadGame (moneyCounter) {
        try {
            let storedPlayer = localStorage.getItem('player');
            if (!storedPlayer) {
                return this.initSave(moneyCounter);
            } else {
                let player = new Player(moneyCounter);
                player.loadPlayerFromData(JSON.parse(storedPlayer));
                return player;
            }
        } catch (err) {
            alert('Error loading savegame, reset forced.');
            this.initSave();
        }
    }
}
