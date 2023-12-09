import { expect, test } from "bun:test";
import { GameRowParserService } from "./game-row-parser-service";

test("should parse correctly", () => {
    const gameParserService = new GameRowParserService();
    const result = gameParserService.parseGameRow("Game 1: 2 green, 6 blue, 7 red; 12 green, 6 blue, 3 red; 5 red, 18 green, 4 blue");

    expect(result.gameId).toBe(1);
    expect(result.setResults[0].numberOfGreen).toBe(2);
    expect(result.setResults[0].numberOfBlue).toBe(6);
    expect(result.setResults[0].numberOfRed).toBe(7);
    
    expect(result.setResults[1].numberOfGreen).toBe(12);
    expect(result.setResults[1].numberOfBlue).toBe(6);
    expect(result.setResults[1].numberOfRed).toBe(3);

    expect(result.setResults[2].numberOfGreen).toBe(18);
    expect(result.setResults[2].numberOfBlue).toBe(4);
    expect(result.setResults[2].numberOfRed).toBe(5);

})

test("should parse correctly", () => {
    const gameParserService = new GameRowParserService();
    const result = gameParserService.parseGameRowSet("2 green, 6 blue, 7 red");

    expect(result.numberOfGreen).toBe(2);
    expect(result.numberOfBlue).toBe(6);
    expect(result.numberOfRed).toBe(7);
})

test("should parse correctly different order", () => {
    const gameParserService = new GameRowParserService();
    const result = gameParserService.parseGameRowSet("5 red, 18 green, 4 blue");

    expect(result.numberOfGreen).toBe(18);
    expect(result.numberOfBlue).toBe(4);
    expect(result.numberOfRed).toBe(5);
})

test("should parse correctly missing color", () => {
    const gameParserService = new GameRowParserService();
    const result = gameParserService.parseGameRowSet("5 red, 4 blue");

    expect(result.numberOfGreen).toBe(0);
    expect(result.numberOfBlue).toBe(4);
    expect(result.numberOfRed).toBe(5);
})