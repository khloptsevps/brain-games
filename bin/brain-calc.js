#!/usr/bin/env node
import game, { welcome } from '../src/index.js';
import { ruleBrainCalcGame } from '../games/brain-calc-game.js';

// welcome
console.log(welcome());

// game "Calculator"
console.log(game(ruleBrainCalcGame()));
