import { assignPlayerRank } from "./rank.js";
import { rollDice } from "../utils/utils.js";

import { addToWinners, askToRollDice } from "../utils/command.js";
import { logError, logInfo, logRolledPoints } from "../utils/logger.js";

const runChance = (player, winningScore) => {
  let currentPoints = rollDice();
  logRolledPoints(`${player.name} rolled ${currentPoints}`);
  player["score"] += currentPoints;

  if (player.score >= winningScore) {
    return currentPoints;
  }

  if (currentPoints == 6) {
    askToRollDice(
      player,
      `${player.name} you have one more chance, press 'r' to roll`
    );

    currentPoints = runChance(player);
  }

  return currentPoints;
};

const runGameRound = (players, winningScore, winners) => {
  for (let player of players) {
    if (player.skip || players.length == 1) {
      player.skip = false;
      continue;
    }

    askToRollDice(
      player,
      `${player.name} its your turn, press 'r' to roll the dice`
    );

    const currentPoints = runChance(player, winningScore);

    if (player.score >= winningScore) {
      addToWinners(winners, player);
      continue;
    }

    if (player["lastChance"] == currentPoints && currentPoints == 1) {
      player["skip"] = true;
    } else {
      player["skip"] = false;
    }

    player["lastChance"] = currentPoints;
  }

  return players;
};

export const startGame = (players, winningScore, winners) => {
  players = runGameRound(players, winningScore, winners);
  players = players.filter((player) => player.score < winningScore);

  if (players.length > 1) {
    assignPlayerRank(players, winners);
    logError("\nNext Round Begins");
    startGame(players, winningScore, winners);
  } else if (players.length == 1) {
    addToWinners(winners, players[0]);
    players.pop();
    assignPlayerRank(players, winners);
  }
};
