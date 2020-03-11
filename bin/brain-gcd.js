#!/usr/bin/env node
import game from '../src/index.js';
import { gameName } from '../games/brain-gcd-game.js';

// game "GCD"
game(gameName());
