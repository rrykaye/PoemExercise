# Poem Reader - Trees by Joyce Kilmer
 Welcome to the Poem Reader project! This is a mini-project that reads and displays specific lines from a poem stored in a text file based on user input.

## Description
The Poem Reader allows users to interactively read a specific line from a poem. Users can input a line number, and the program will display the corresponding line from the Poem.txt file. If the user inputs "q", the program will exit.

| Parameter  | Description |
| ---------- | ------------ |
| 1-12 | **Line number:** Enter any number between 1 and 12 to display the corresponding line from the poem.|
| 'q'        | **Exit:** Enter 'q' to quit the program.
| Any other input | **Invalid Input:** If the input is not a number between 1 and 12 or 'q', the program will display an error message prompting for a valid input. |

## How to run:

Open terminal 
```
node PoemReader.js 
```

## Prompt:
Follow the instructions below: 

### These are the sample outputs for valid inputs:

```
Welcome to Poem Reader!

Trees by Joyce Kilmer

Enter the line number (q to quit): 1
A poem lovely as a tree

Enter the line number (q to quit): 6
And lifts her leafy arms to pray;
```

If the user enters 'q' the program will exit:
```
Enter the line number (q to quit): q
Bye bye! Have a good day!
```

### These are the sample outputs for invalid inputs:
If the user enters something that is not a number between 1 and 12 or 'q', the program will display an error message:
```
Invalid input. Please enter a valid line number.
```
If the user enters number that is empty the program will display an error message:
```
Error: The selected line is empty. Please enter a valid line number. 
```

