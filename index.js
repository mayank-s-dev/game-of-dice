import { getNumberOfPlayers, getWinningScore } from "./source/utils/command.js";
import { initiazeGamePlayers } from "./source/player/initializePlayers.js";
import { msgBox } from "./source/utils/box.js";
import { shufflePlayers } from "./source/utils/utils.js";
import { startGame } from "./source/player/game.js";

const main = () => {
  msgBox("Welcome to the game of Dice");
  const noOfPlayers = getNumberOfPlayers();
  const winningScore = getWinningScore("Enter the winning score");

  msgBox(
    `You are ${noOfPlayers} players in the game, and winning score is ${winningScore}`
  );

  let playerRecord = initiazeGamePlayers(noOfPlayers);
  const winners = [];

  playerRecord = shufflePlayers(playerRecord);
  startGame(playerRecord, winningScore, winners);
};

main();
