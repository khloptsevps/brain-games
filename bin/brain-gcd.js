#!/usr/bin/env node
import game, { welcome } from '../src/index.js';
import { ruleBrainGcdGame } from '../games/brain-gcd-game.js';

// welcome
console.log(welcome());

// game "GCD"
console.log(game(ruleBrainGcdGame()));
