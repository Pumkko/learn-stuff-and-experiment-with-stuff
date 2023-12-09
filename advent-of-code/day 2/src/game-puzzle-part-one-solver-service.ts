import { MaxAllowed } from "./game-parser-service";
import { GameRowParserService, GameSetResult, GameRow } from "./game-row-parser-service";

export class GamePuzzlePartOneSolverService {
    private readonly gameRowParserService = new GameRowParserService();
    private readonly maxAllowed: MaxAllowed;

    constructor(maxAllowed: MaxAllowed) {
        this.maxAllowed = maxAllowed;
    }

    getPossibleGameIdTotal(input: string[]): number {
        let total = 0;
        for (const row of input) {
            const gameResult = this.gameRowParserService.parseGameRow(row);
            const isGamePossible = gameResult.setResults.every(c => this.isGameResultPossible(c));
            if (isGamePossible) {
                total += gameResult.gameId;
            }
        }

        return total;
    }

    private isGameResultPossible(result: GameSetResult): boolean {
        return result.numberOfBlue <= this.maxAllowed.maxAllowedBlue &&
            result.numberOfGreen <= this.maxAllowed.maxAllowedGreen &&
            result.numberOfRed <= this.maxAllowed.maxAllowedRed

    }

   
    
}