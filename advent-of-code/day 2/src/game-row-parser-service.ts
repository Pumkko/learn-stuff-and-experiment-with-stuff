
export interface GameSetResult {
    numberOfGreen: number;
    numberOfBlue: number;
    numberOfRed: number;
}

export interface GameRow {
    gameId: number;
    setResults: GameSetResult[];
}


export class GameRowParserService {
    parseGameRowSet(input: string) : GameSetResult {
        const green = this.getNumberForColor(input, 'green');
        const blue = this.getNumberForColor(input, 'blue');
        const red = this.getNumberForColor(input, 'red');

        return {
            numberOfBlue: blue,
            numberOfGreen: green,
            numberOfRed: red
        }
    }

    parseGameRow(input: string): GameRow {
        const gameId = this.parseGameId(input);
        const gameResult: GameRow = {
            gameId,
            setResults: []
        }

        const gameIdAndThenGameResults = input.split(':');
        const gameSets = gameIdAndThenGameResults[1].split(';');
        for(const set of gameSets){
            const setResult = this.parseGameRowSet(set);
            gameResult.setResults.push(setResult)
        }

        return gameResult;
    }


    private parseGameId (input: string): number {
        const gameRegex = /Game [0-9]+/g;
        const match = gameRegex.exec(input);

        if(!match){
            throw Error(`Failed to parse GameId ${input}`);
        }

        const numberRegex = /[0-9]+/g;

        const stringNumber = numberRegex.exec(match[0]);

        if(!stringNumber){
            throw Error("could not find number");
        }

        const asNumber = +stringNumber;

        if(isNaN(asNumber)){
            throw Error("Could not parse number as int");
        }

        return asNumber;
    }


    private getNumberForColor(input: string, color: 'red' | 'green' | 'blue') : number {
        const greenRgex = new RegExp(`[0-9]+ ${color}`);
        const match = greenRgex.exec(input);
        if(!match){
            return 0;
        }

        const numberRegex = /[0-9]+/g;

        const stringNumber = numberRegex.exec(match[0]);

        if(!stringNumber){
            throw Error(`Wrong number ${numberRegex}`);
        }

        const asNumber = +stringNumber;

        if(isNaN(asNumber)){
            throw Error("Could not parse number as int");
        }

        return asNumber;
    }
    


}