import { PuzzleCounterService } from "./puzzle-counter-service";


export class PuzzleService {

    private readonly counterService = new PuzzleCounterService();

    async getPuzzleInput(): Promise<string[]> {
        const puzzleInputFile = Bun.file("./puzzle-input.txt");
        const exists = await puzzleInputFile.exists();
        if(!exists){
            throw Error("No puzzle input found");
        }

        const puzzleInput = await puzzleInputFile.text();
        const puzzleInputArray = puzzleInput.split("\n");
        return puzzleInputArray;
    }


    getTotal(puzzleInputAsArray: string[]): number {
        const pairOfDigits = this.counterService.getPairOfDigitFromInputArray(puzzleInputAsArray);
        const total = this.counterService.sumPairOfDigits(pairOfDigits);

        return total;

    }
}