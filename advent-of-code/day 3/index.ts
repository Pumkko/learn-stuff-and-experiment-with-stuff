const puzzleInputFile = Bun.file("./puzzle-input.txt");
const exists = await puzzleInputFile.exists();
if (!exists) {
    throw Error("No puzzle input found");
}

const puzzleInput = await puzzleInputFile.text();

