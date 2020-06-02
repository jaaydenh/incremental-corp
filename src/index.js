import GameEngine from './game_engine.js';
import Company from './company.js';
import SaveGame from './save_game.js';
import Counter from './counter.js';

document.body.style.backgroundColor = 'white';

var canvas = document.getElementById('gameCanvas');
canvas.width = 620;
canvas.height = 800;

var engine = new GameEngine(canvas);
var moneyCounter = new Counter(10, 50, 400, 40, 40, 0);
var player = SaveGame.loadGame(moneyCounter);

var context2D = canvas.getContext('2d');
context2D.fillStyle = '#ffffff';
context2D.font = '32px Arial';
context2D.fillText('Incremental Corp Earnings', 25, 10);

// TODO: calculate idle earnings
// var elapsed = Math.floor(Date.now()/1000)-player.last_login;

fetch('./data/companies.json')
    .then(response => response.json())
    .then(data => {        
        data.forEach(companyData => {
            new Company(companyData, engine, player);
        });
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

setInterval(function() { SaveGame.saveGame(player); }, 5000);

engine.gameObjects.push(moneyCounter);
engine.gameObjects.push(player);

engine.run();
