import { getCliInput } from "./utils.js";

export const getNumberOfPlayers = (message, warning = false) => {
  let noOfPlayers = getCliInput(
    message || "To continue, enter the number of players",
    warning
  );

  if (!noOfPlayers || isNaN(noOfPlayers) || parseInt(noOfPlayers) <= 0) {
    noOfPlayers = getNumberOfPlayers(
      "Incorrect Input, please enter a valid number",
      true
    );
  }

  return parseInt(noOfPlayers);
};

export const getWinningScore = (message, warning = false) => {
  let winningScore = getCliInput(message || "Enter the winning score");

  if (!winningScore || isNaN(winningScore) || parseInt(winningScore) <= 0) {
    winningScore = getNumberOfPlayers(
      "Incorrect Input, please enter a valid number",
      true
    );
  }

  return parseInt(winningScore);
};

export const askToRollDice = (player, message, warning) => {
  let messageString = !message ? `` : message;

  const keyPressed = getCliInput(messageString, warning);
  if (keyPressed != "r")
    askToRollDice(player, "Invalid Input, press 'r' to roll  a dice", true);
};

export const addToWinners = (winners, player) => {
  player.rank = winners.length + 1;
  winners.push(player);
};
