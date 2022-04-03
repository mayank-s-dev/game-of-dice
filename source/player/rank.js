import { logInfo } from "../utils/logger.js";

export const assignPlayerRank = (players, winners) => {
  if (winners.length) {
    logInfo("\n-----------------------Winners Table-----------------------");
    console.table(winners);
  }

  const sortedPlayers = players.slice();
  sortedPlayers.sort((a, b) => b.score - a.score);
  sortedPlayers.map((player, index) => (player.rank = index + 1));

  if (sortedPlayers.length) {
    logInfo("\n-----------------------Active Players-----------------------");
    console.table(sortedPlayers);
  }
};
