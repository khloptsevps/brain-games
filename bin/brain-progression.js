#!/usr/bin/env node
import game from '../src/index.js';
import { welcome } from '../helper/utility.js';
import { gameName } from '../games/brain-progression-game.js';

// welcome
console.log(welcome());

// game "Progression"
console.log(game(gameName()));
