#!/usr/bin/env node
import { welcome, hello } from '../helper/utility.js';
import game from '../src/index.js';

// welcome
console.log(welcome());

// greeting
console.log(game(hello()));
