#!/usr/bin/env node
import game from '../src/index.js';
import { gameName } from '../games/brain-even-game.js';
import { welcome } from '../helper/utility.js';

// welcome
console.log(welcome());

// game "Parity-Check"
console.log(game(gameName()));
