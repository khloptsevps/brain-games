#!/usr/bin/env node
import game from '../src/index.js';
import { gameName } from '../games/brain-calc-game.js';
import { welcome } from '../helper/utility.js';

// welcome
console.log(welcome());

// game "Calculator"
console.log(game(gameName()));
