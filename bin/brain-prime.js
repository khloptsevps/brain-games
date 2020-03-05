#!/usr/bin/env node
import game, { welcome } from '../src/index.js';
import { ruleBrainPrimeGame } from '../games/brain-prime-game.js';

// welcome
console.log(welcome());

// game "Prime"
console.log(game(ruleBrainPrimeGame()));
