#!/usr/bin/env node
import game from '../src/index.js';
import { gameName } from '../games/brain-calc-game.js';

// game "Calculator"
game(gameName());
