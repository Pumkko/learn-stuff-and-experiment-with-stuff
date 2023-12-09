import { GameRowParserService, GameSetResult, GameRow } from "./game-row-parser-service";

export class GamePuzzlePartTwoSolverService {
    private readonly gameRowParserService = new GameRowParserService();
    getMinimumPowerTotal(input: string[]): number {
        let total = 0;

        for (const row of input) {
            const gameResult = this.gameRowParserService.parseGameRow(row);
            const minimumRequired = this.getMinimumSetOfRequiredCubes(gameResult);
            const powerTotalOfMin = this.getPowerMinimumOfResult(minimumRequired);
            total += powerTotalOfMin;
        }

        return total;
    }

    getPowerMinimumOfResult(minimum: GameSetResult) {
        const powerTotalOfMin = minimum.numberOfRed * minimum.numberOfBlue * minimum.numberOfGreen;
        return powerTotalOfMin;
    }

    getMinimumSetOfRequiredCubes(gameRow: GameRow): GameSetResult {
        let minimumGreen = 0;
        let minimumRed = 0;
        let minimumBlue = 0;

        for (const set of gameRow.setResults) {
            minimumGreen = minimumGreen < set.numberOfGreen ? set.numberOfGreen : minimumGreen;
            minimumRed = minimumRed < set.numberOfRed ? set.numberOfRed : minimumRed;
            minimumBlue = minimumBlue < set.numberOfBlue ? set.numberOfBlue : minimumBlue;
        }

        return {
            numberOfBlue: minimumBlue,
            numberOfGreen: minimumGreen,
            numberOfRed: minimumRed
        }
    }
}