import { PuzzleParserService } from "./src/puzzle-parser.service";

const puzzleInputFile = Bun.file("./puzzle-input.txt");
const exists = await puzzleInputFile.exists();
if (!exists) {
    throw Error("No puzzle input found");
}

const puzzleInput = await puzzleInputFile.text();

const puzzleParserService = new PuzzleParserService();

const arrayOfChar = puzzleParserService.createArrayOfCharFromInput(puzzleInput);

const numbers = puzzleParserService.findNumbersToSum(arrayOfChar);

const sum = puzzleParserService.sumNumbersFoundPreviously(numbers);
console.log(sum);
