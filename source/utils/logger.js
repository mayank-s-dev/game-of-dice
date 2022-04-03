import chalk from "chalk";

const log = console.log;
chalk.level = 1;

const info = chalk.bold.green;
const error = chalk.bold.red;
const warning = chalk.hex("#FFA500");

export const logWarning = (message) => log(warning(message));

export const logError = (message) => log(error(message));

export const logInfo = (message) => log(info(message));

export const logCli = (message) => log(chalk.yellow.bold(message));

export const logWarningCli = (message) => log(chalk.red.bold(message));

export const logRolledPoints = (message) => log(chalk.cyan.bold(message));
