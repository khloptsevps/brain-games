#!/usr/bin/env node
import game from '../src/index.js';
import { welcome } from '../helper/utility.js';
import { gameName } from '../games/brain-gcd-game.js';

// welcome
console.log(welcome());

// game "GCD"
console.log(game(gameName()));
