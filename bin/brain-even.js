#!/usr/bin/env node
import game, { welcome } from '../src/index.js';
import { ruleBrainEvenGame } from '../games/brain-even-game.js';

// welcome
console.log(welcome());

// game "Parity-Check"
console.log(game(ruleBrainEvenGame()));
