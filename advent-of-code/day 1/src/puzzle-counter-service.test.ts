import { expect, test } from "bun:test";
import { PuzzleCounterService } from "./puzzle-counter-service";


test("Should find First and Last digit in numeric format", () => {
    const counterService = new PuzzleCounterService();
    const digits = counterService.getPairOfDigit("1abc2");

    expect(digits[0]).toBe('1');
    expect(digits[1]).toBe('2');
})

test("Should find First and Last digit in numeric format among many", () => {
    const counterService = new PuzzleCounterService();
    const digits = counterService.getPairOfDigit("a1b2c3d4e5f");

    expect(digits[0]).toBe('1');
    expect(digits[1]).toBe('5');
})


test("Should Count twice a digit if it's the only one", () => {
    const counterService = new PuzzleCounterService();
    const digits = counterService.getPairOfDigit("treb7uchet");

    expect(digits[0]).toBe('7');
    expect(digits[1]).toBe('7');
})

test("Should find First and Last digit in string literal format", () => {
    const counterService = new PuzzleCounterService();
    const digits = counterService.getPairOfDigit("oneabctwo");

    expect(digits[0]).toBe('1');
    expect(digits[1]).toBe('2');
})

test("Should find First and Last digit in string literal format among many", () => {
    const counterService = new PuzzleCounterService();
    const digits = counterService.getPairOfDigit("aoneb2c3d4efivef");

    expect(digits[0]).toBe('1');
    expect(digits[1]).toBe('5');
})

test("Should Count twice a digit if it's the only one in string format", () => {
    const counterService = new PuzzleCounterService();
    const digits = counterService.getPairOfDigit("trebsevenuchet");

    expect(digits[0]).toBe('7');
    expect(digits[1]).toBe('7');
})


test("Should find First and Last digit in string format overlap string digits", () => {
    const counterService = new PuzzleCounterService();
    const digits = counterService.getPairOfDigit("oneseveightwo");

    expect(digits[0]).toBe('1');
    expect(digits[1]).toBe('2');
})

test("Should find First and Last digit in string format overlap string digits", () => {
    const counterService = new PuzzleCounterService();
    const digits = counterService.getPairOfDigit("eight3fiveninefivemtxm9eightwot");

    expect(digits[0]).toBe('8');
    expect(digits[1]).toBe('2');
})

test("Should find FIrst and Last Digit number is there multiple times", () => {
    const counterService = new PuzzleCounterService();
    const digits = counterService.getPairOfDigit("onetwoonetwo");

    expect(digits[0]).toBe('1');
    expect(digits[1]).toBe('2');
})


test("Should sum input empty", () => {
    const counterService = new PuzzleCounterService();
    const total = counterService.sumPairOfDigits([]);

    expect(total).toBe(0);
})

test("Should sum input with elements", () => {
    const counterService = new PuzzleCounterService();
    const total = counterService.sumPairOfDigits([['1', '2'], ['5', '6']]);

    expect(total).toBe(68);
})