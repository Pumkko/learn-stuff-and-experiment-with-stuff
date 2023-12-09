import { PuzzleService } from "./src/puzzle-service";


const puzzleService = new PuzzleService();

const input = await puzzleService.getPuzzleInput();
const total = puzzleService.getTotal(input);

console.log(total);
