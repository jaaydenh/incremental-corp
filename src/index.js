import GameEngine from './game_engine.js';
import Company from './company.js';
import Player from './player.js';

document.getElementById('app').innerHTML = `
<h1>Incremental Corp</h1>
<div></div>`;
document.body.style.backgroundColor = 'black';
var canvas = document.getElementById('gameCanvas');

canvas.width = 620;
canvas.height = 800;

var engine = new GameEngine(canvas);
var player = new Player(640000, engine);

fetch('./src/data/companies.json')
    .then(response => response.json())
    .then(data => {        
        data.forEach(object => {
            var company = new Company(object, engine, player);
        });
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

engine.gameObjects.push(player);

engine.run();
