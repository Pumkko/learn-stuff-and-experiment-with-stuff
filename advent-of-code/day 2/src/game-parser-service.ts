import { GameRow, GameRowParserService, GameSetResult } from "./game-row-parser-service";

export interface MaxAllowed {
    maxAllowedGreen: number;
    maxAllowedRed: number;
    maxAllowedBlue: number;
}

export class GameParserService {
    async getPuzzleInput(): Promise<string[]> {
        const puzzleInputFile = Bun.file("./puzzle-input.txt");
        const exists = await puzzleInputFile.exists();
        if (!exists) {
            throw Error("No puzzle input found");
        }

        const puzzleInput = await puzzleInputFile.text();
        const puzzleInputArray = puzzleInput.split("\n");
        return puzzleInputArray;
    }

}