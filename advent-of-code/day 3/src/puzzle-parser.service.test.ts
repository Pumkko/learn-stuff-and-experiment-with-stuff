import { expect, test } from "bun:test";
import { PuzzleParserService } from "./puzzle-parser.service";



test("Should turn string into array of char", () => {

    const puzzleParserService = new PuzzleParserService();


    const arrayOfChar = puzzleParserService.createArrayOfCharFromInput("467..114..\n...*......\n..35..633.");

    expect(arrayOfChar.length).toBe(3);

    const isDeepEqual = Bun.deepEquals(
        [
            ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
            ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '3', '5', '.', '.', '6', '3', '3', '.'],
        ],
        arrayOfChar
    )

    expect(isDeepEqual).toBe(true);

})

test("Should find correct sum", () => {

    const puzzleParserService = new PuzzleParserService();

    // For once chatGPT was useful (almost it did generate the last . of each row)
    const puzzleInput = [
        ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
        ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '3', '5', '.', '.', '6', '3', '3', '.'],
        ['.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
        ['6', '1', '7', '*', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '+', '.', '5', '.'],
        ['.', '.', '5', '9', '2', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '7', '5', '5', '.'],
        ['.', '.', '.', '$', '.', '*', '.', '.', '.', '.'],
        ['.', '6', '6', '4', '.', '5', '9', '8', '.', '.']
    ];

    puzzleParserService.findAndSumNumber(puzzleInput);

})