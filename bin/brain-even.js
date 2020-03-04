#!/usr/bin/env node
import welcome from '../src/index.js';
import parityCheckGame from '../src/brain-even-game.js';

// welcome
console.log(welcome());

// game "Parity-Check"
console.log(parityCheckGame());
