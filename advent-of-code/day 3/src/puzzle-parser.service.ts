export class PuzzleParserService {


    createArrayOfCharFromInput(puzzleRawInput: string): string[][] {
        const arrayOfStuff = puzzleRawInput.split('\n');
        const arrayOfChar = arrayOfStuff.map(row => Array.from(row));
        return arrayOfChar;
    }


    findAndSumNumber(input: string[][]){
        for(const row of input){
            for(const char of row){

            }
        }
    }

}