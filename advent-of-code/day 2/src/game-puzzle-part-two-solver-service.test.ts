import { expect, test } from "bun:test";
import { GameRow, GameSetResult } from "./game-row-parser-service";
import { GameParserService } from "./game-parser-service";
import { GamePuzzlePartTwoSolverService } from "./game-puzzle-part-two-solver-service";

test("Should Find Correct Minimum from result set", () => {


    const gameRow: GameRow = {
        gameId: 0,
        setResults: [
            {
                numberOfBlue: 0,
                numberOfGreen: 6,
                numberOfRed: 8
            },
            {
                numberOfBlue: 42,
                numberOfGreen: 1,
                numberOfRed: 6
            },
            {
                numberOfBlue: 2,
                numberOfGreen: 0,
                numberOfRed: 0
            }
        ]
    }


    const gameParserService = new GamePuzzlePartTwoSolverService();

    const resultSet = gameParserService.getMinimumSetOfRequiredCubes(gameRow);
    expect(resultSet.numberOfBlue).toBe(42);
    expect(resultSet.numberOfGreen).toBe(6);
    expect(resultSet.numberOfRed).toBe(8);

})

test("Should get Power Minimum", () => {
    const gameParserService = new GamePuzzlePartTwoSolverService();
    const set: GameSetResult = {
        numberOfBlue: 6,
        numberOfGreen: 2,
        numberOfRed: 4
    }

    const power = gameParserService.getPowerMinimumOfResult(set);
    expect(power).toBe(48);
})