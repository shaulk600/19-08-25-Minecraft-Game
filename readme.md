# Minecraft 2D Clone
=======================

## Overview
------------

This is a 2D clone of the popular game Minecraft, built using HTML, CSS, and JavaScript. The game allows players to explore a blocky world, collect resources, and build structures.

## Folder Structure
--------------------
```
│   .gitignore
│   index.html        # Entry point with link to home.html
│   package.json      # Project dependencies (if any)
│   readme.md         # Documentation
│
├───css
│       game.css      # Styles for game screen
│       home.css      # Styles for home screen
│       style.css     # Global/common styles
│
├───html
│       game.html     # The game world (sky, grass, dirt, rocks, abyss)
│       home.html     # Game home page (menu)
│
├───img
│       ...           # Game assets (tools, blocks, logo, background)
│
└───js
        game.js       # Main game logic (world generation, tools, mining)
        index.js      # Entry-point logic

```

## Project Architecture
------------------------

The game is built using a modular approach, with each component responsible for a specific aspect of the game.

* `index.html`: The entry point of the game, which links to `home.html`.
* `home.html` and `home.css`: The opening screen of the game, which displays the game background and two buttons: "New Game" and "Continue Game".
* `game.html` and `game.css`: The main game screen, which displays the blocky world and allows players to interact with it.
* `js/game.js`: The game logic, which handles player input, updates the game state, and renders the game world.
* `js/index.js`: The main entry point of the game, which initializes the game and sets up the event listeners.

## Gameplay
-------------

The game allows players to:

* Explore a blocky world, composed of different types of blocks (dirt, grass, rocks, etc.)
* Collect resources (diamonds, wood, etc.) by clicking on blocks
* Build structures using the collected resources
* Switch between different tools (axe, pickaxe, shovel, etc.) to interact with the game world

## Authors
----------

* [Shaul Kimel](https://github.com/shaulk600)
* [Shneor Hershkovitz](https://github.com/ShneorCode)
* [Shmuel Nabul](https://github.com/shmuelna770)
* [Shemaryahu Zalmanov](https://github.com/shemaryahuz)
