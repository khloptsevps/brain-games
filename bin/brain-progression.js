#!/usr/bin/env node
import game, { welcome } from '../src/index.js';
import { ruleBrainProgressionGame } from '../games/brain-progression-game.js';

// welcome
console.log(welcome());

// game "Progression"
console.log(game(ruleBrainProgressionGame()));
