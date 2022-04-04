# Game of Dice

A javascript command line tool for playing dice game. The "Game of Dice" is a multiplayer game where N players roll a 6 faced dice in a round-robin fashion. Each time a player rolls the dice their points increase by the number (1 to 6) achieved by the roll.

As soon as a player accumulates M(winning score) points they complete the game and are assigned a rank. Remaining players continue to play the game till they accumulate at least M points. The game ends when all players have accumulated at least M points.

# Prerequisties
- NodeJs (https://nodejs.dev/)

# Build and Run

- Install Node package using
```
$ npm install
```

- Start the game using
```
$ npm start
```

# Features

- The order in which the users roll the dice is decided randomly at the start of the game.
- If a player rolls the value "6" then they immediately get another chance to roll again and move ahead in the game.
- If a player rolls the value "1" two consecutive times then they are forced to skip their next turn as a penalty.

# Project-Structure
```
├── source
│   ├── player
│   │   └── play.ts
│   ├── utils
│   │   ├── box.js
│   │   ├── command.js
│   │   └── logger.js
│   │   └── utils.js
│   ├── cli.ts
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```