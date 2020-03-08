#!/usr/bin/env node
import game from '../src/index.js';
import { welcome } from '../helper/utility.js';
import { gameName } from '../games/brain-prime-game.js';

// welcome
console.log(welcome());

// game "Prime"
console.log(game(gameName()));
