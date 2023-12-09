import _ from "lodash";

export type PairOfDigit = readonly [string, string];


const stringToNumber = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9'
}

export class PuzzleCounterService {
    getPairOfDigit(input: string): PairOfDigit {
        // doubling the end of each digit to deal with this : eightwo
        // it becomes eighttwoo, and now two can correctly be detected
        const replacedInput = input
            .replaceAll("one", "onee")
            .replaceAll("two", "twoo")
            .replaceAll("three", "threee")
            .replaceAll("five", "fivee")
            .replaceAll("seven", "sevenn")
            .replaceAll("eight", "ei8ghtt")
            .replaceAll("nine", "ninee");

        const matcher = /one|two|three|four|five|six|seven|eight|nine|1|2|3|4|5|6|7|8|9/g
        const result = [...replacedInput.matchAll(matcher)];

        if(!result){
            return ['0', '0']
        }

        const first = result[0];
        const last = result[result.length - 1]

        const firstAsDigit = stringToNumber[first[0] as keyof typeof stringToNumber];
        const lastAsDigit = stringToNumber[last[0] as keyof typeof stringToNumber];

        return [firstAsDigit, lastAsDigit];
    }

    getPairOfDigitFromInputArray(input: string[]): PairOfDigit[] {
        const pairOfDigits: PairOfDigit[] = [];
        for (const i of input) {

            const pair = this.getPairOfDigit(i);
            pairOfDigits.push(pair);
        }

        return pairOfDigits;
    }

    sumPairOfDigits(input: PairOfDigit[]): number {
        let total = 0;
        for (const pair of input) {
            const combined = pair[0] + pair[1];
            total += (+combined);
        }

        return total;
    }
}