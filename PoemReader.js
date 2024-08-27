console.log("\nWelcome to Poem Reader!\n");
console.log("Trees by Joyce Kilmer");

const fs = require("fs");
const readline = require("readline");

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForLineNumber() {
  readLine.question("\nEnter the line number (q to quit): ", handleLineNumberInput);
}

function handleLineNumberInput(lineNumber) {
  if (lineNumber.toLowerCase() === "q") {
    exitProgram();
    return;
  }

  // Read the poem file and process the requested line
  fs.readFile("Poem.txt", "utf-8", (err, poemContent) => {
    if (err) {
      console.error("Error reading file:", err.message);
      askForLineNumber();
      return;
    }

    displayPoemLine(lineNumber, poemContent);
    askForLineNumber();
  });
}

function displayPoemLine(lineNumber, poemContent) {
  const lines = poemContent.split("\n");
  const targetLine = parseInt(lineNumber);

  if (targetLine >= 1 && targetLine <= lines.length) {
    if (lines[targetLine - 1].trim() === "") {
      console.error("Error: The selected line is empty. Please enter a valid line number.");
    } else {
      console.log(lines[targetLine - 1]);
    }
  } else {
    console.error("Invalid input. Please enter a valid line number.");
  }
}

function exitProgram() {
  console.log("Bye bye! Have a good day!\n");
  readLine.close();
}

askForLineNumber();

