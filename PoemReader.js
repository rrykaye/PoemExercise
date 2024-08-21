console.log("\nWelcome to Poem Reader!\n");
console.log("Trees by Joyce Kilmer");

const fileSystem = require("fs");
const rl = require("readline");

const readLine = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForLineNumber() {
    readLine.question("\nEnter the line number (q to quit): ", (lineNumber) => {
    if (lineNumber.toLowerCase() === "q") {
      console.log("Bye bye! Have a good day!\n");
      readLine.close();
      return;
    }

    fileSystem.readFile("Poem.txt", "utf-8", (err, poem) => {
      if (err) {
        throw new Error(err)
      }
      const lines = poem.split("\n");
      const targetLine = lineNumber;

      if (targetLine >= 1 && targetLine <= lines.length) {
        console.log(lines[targetLine - 1]);
      } else {
        console.error("Invalid input.");
      }
      askForLineNumber();
    });
  });
}

askForLineNumber();
