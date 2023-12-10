import { expect, test } from "bun:test";
import { PuzzleParserService } from "./puzzle-parser.service";



test("Should turn string into array of char", () => {

    const puzzleParserService = new PuzzleParserService();


    const arrayOfChar = puzzleParserService.createArrayOfCharFromInput("467..114..\n...*......\n..35..633.");

    expect(arrayOfChar.length).toBe(3);

    const expecting = [
        ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
        ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '3', '5', '.', '.', '6', '3', '3', '.'],
    ];


    expect(arrayOfChar).toEqual(expecting);

})

test("Should find the correct numbers but simpler", () => {
    const puzzleParserService = new PuzzleParserService();

    // For once chatGPT was useful (almost it did generate the last . of each row)
    const puzzleInput = [
        ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
        ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '3', '5', '.', '.', '6', '3', '3', '.'],
    ];

    const numbers = puzzleParserService.findNumbersToSum(puzzleInput);
    expect(numbers).toEqual([
        467, 35
    ])
})

test("Should find the correct numbers", () => {

    const puzzleParserService = new PuzzleParserService();

    // For once chatGPT was useful (almost it did generate the last . of each row)
    const puzzleInput = [
        ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
        ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '3', '5', '.', '.', '6', '3', '3', '.'],
        ['.', '.', '.', '.', '.', '.', '@', '.', '.', '.'],
        ['6', '1', '7', '*', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '+', '.', '.', '5', '.'],
        ['.', '.', '5', '9', '2', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '7', '5', '5', '.'],
        ['.', '.', '.', '$', '.', '*', '.', '.', '.', '.'],
        ['.', '6', '6', '4', '.', '5', '9', '8', '.', '.']
    ];

    const numbersFound = puzzleParserService.findNumbersToSum(puzzleInput);

    expect(numbersFound).toEqual([
        467, 35, 633, 617, 592, 755, 664, 598
    ])
})

test("Should sum numbers", () => {
    const puzzleParserService = new PuzzleParserService();

    const sum = puzzleParserService.sumNumbersFoundPreviously([
        467, 35, 633, 617, 592, 755, 664, 598
    ]);

    expect(sum).toEqual(4361);
})