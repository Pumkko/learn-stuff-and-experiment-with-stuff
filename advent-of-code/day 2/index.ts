import { GameParserService } from "./src/game-parser-service";
import { GamePuzzlePartOneSolverService } from "./src/game-puzzle-part-one-solver-service";
import { GamePuzzlePartTwoSolverService } from "./src/game-puzzle-part-two-solver-service";


const gameParser = new GameParserService();

const partOneService = new GamePuzzlePartOneSolverService({
    maxAllowedRed: 12,
    maxAllowedGreen: 13,
    maxAllowedBlue: 14
})

const input = await gameParser.getPuzzleInput();
const idTotal = partOneService.getPossibleGameIdTotal(input);

const partTwoService = new GamePuzzlePartTwoSolverService();
const powerMinimumTotal = partTwoService.getMinimumPowerTotal(input);

console.log(idTotal);
console.log(powerMinimumTotal);