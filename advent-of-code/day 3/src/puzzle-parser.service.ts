export class PuzzleParserService {


    createArrayOfCharFromInput(puzzleRawInput: string): string[][] {
        const arrayOfStuff = puzzleRawInput.split('\n');
        const arrayOfChar = arrayOfStuff.map(row => Array.from(row));
        return arrayOfChar;
    }

    private anySymbolInRange(input: string[][], y: number, startFromX: number, endAtX: number): boolean {

        if (y < 0 || y > input.length) {
            return false;
        }

        let foundSymbol = false;
        for (let x = startFromX; x < endAtX + 1; x++) {
            const charArOtherXOtherY = input[y]?.[x];
            if (charArOtherXOtherY === undefined || charArOtherXOtherY === '.') {
                continue;
            }

            foundSymbol = true;
            break;
        }
        return foundSymbol;
    }

    findNumbersToSum(input: string[][]): number[] {
        let startingXOfNumber = -1;

        let currentNumber = '';

        const foundNumbers: number[] = [];

        for (let y = 0; y < input.length; y++) {
            for (let x = 0; x < input[y].length; x++) {
                const charAtXy = input[y][x];
                const isNumber = !isNaN(+charAtXy);
                if (isNumber) {
                    if (currentNumber === '') {
                        startingXOfNumber = x;
                    }

                    currentNumber += charAtXy;

                    if (x === input[y].length - 1) {
                        const anySymbolAround = this.anySymbolAroundNumber(input, y, startingXOfNumber, x, foundNumbers, currentNumber);
                        if (anySymbolAround) {
                            foundNumbers.push(+currentNumber);
                        }
                        currentNumber = '';
                        startingXOfNumber = -1;
                    }

                } else {
                    if (currentNumber !== '') {
                        if (charAtXy !== '.') {
                            foundNumbers.push(+currentNumber);
                            currentNumber = '';
                            startingXOfNumber = -1;
                        } else {
                            const anySymbolAround = this.anySymbolAroundNumber(input, y, startingXOfNumber, x, foundNumbers, currentNumber);

                            if (anySymbolAround) {
                                foundNumbers.push(+currentNumber);
                            }
                            currentNumber = '';
                            startingXOfNumber = -1;
                        }
                    }
                }
            }
        }

        return foundNumbers;
    }

    private anySymbolAroundNumber(input: string[][], y: number, startingXOfNumber: number, x: number, foundNumbers: number[], currentNumber: string): boolean {
        const charAtBeginning = input[y][startingXOfNumber - 1];
        if (charAtBeginning === undefined || charAtBeginning === '.') {
            const anySymbolAbove = this.anySymbolInRange(input, y - 1, startingXOfNumber - 1, x);
            const anySymbolBelow = this.anySymbolInRange(input, y + 1, startingXOfNumber - 1, x);

            return anySymbolAbove || anySymbolBelow;
        } else {
            return true;
        }
    }

    sumNumbersFoundPreviously(numbers: number[]): number {
        return numbers.reduce((total, current) => total + current, 0);
    }

}