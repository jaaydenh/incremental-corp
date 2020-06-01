import GameEngine from './game_engine.js';
import Company from './company.js';
import SaveGame from './save_game.js';
import Counter from './counter.js';

document.getElementById('app').innerHTML = `
<h1>Incremental Corp</h1>
<div></div>`;
document.body.style.backgroundColor = 'white';
var canvas = document.getElementById('gameCanvas');

canvas.width = 620;
canvas.height = 800;

var engine = new GameEngine(canvas);
var moneyCounter = new Counter(20, 10, 400, 40, 40, 0);
var player = SaveGame.loadGame(moneyCounter);

// var elapsed = Math.floor(Date.now()/1000)-player.last_login;

fetch('./data/companies.json')
    .then(response => response.json())
    .then(data => {        
        data.forEach(companyData => {
            var company = new Company(companyData, engine, player);
        });
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

setInterval(function() { SaveGame.saveGame(player); }, 5000);

engine.gameObjects.push(moneyCounter);
engine.gameObjects.push(player);

engine.run();
