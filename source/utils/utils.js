import readlineSync from "readline-sync";
import { logCli, logWarningCli } from "./logger.js";

export const getCliInput = (message, warning) => {
  if (message && warning) logWarningCli(`\n${message}: `);
  else if (message) logCli(`\n${message}: `);
  return readlineSync.question();
};

export const rollDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

export const shufflePlayers = (playerRecord) => {
  return playerRecord.sort(() => 0.5 - Math.random());
};
