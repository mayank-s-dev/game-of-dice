import { logInfo } from "../utils/logger.js";

export const initiazeGamePlayers = (noOfPlayers) => {
  const playerRecord = [];
  for (let i = 0; i < noOfPlayers; i++) {
    playerRecord.push({
      name: `Player-${i + 1}`,
      score: 0,
      lastChance: null,
      skip: false,
      rank: noOfPlayers,
    });
  }

  logInfo("\n-----------------------Enrolled Players-----------------------");
  console.table(playerRecord);
  return playerRecord;
};
