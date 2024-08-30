# Poem Reader - Trees by Joyce Kilmer
 Welcome to the Poem Reader project! This is a mini-project that reads and displays specific lines from a poem stored in a text file based on user input.

## Description
The Poem Reader allows users to interactively read a specific line from a poem. Users can input a line number, and the program will display the corresponding line from the Poem.txt file. If the user inputs "q", the program will exit.

## How to run:

Open terminal 
```
node PoemReader.js 
```

## This is a sample output that has a valid inputs:

```
Welcome to Poem Reader!

Trees by Joyce Kilmer

Enter the line number (q to quit): 1
A poem lovely as a tree

Enter the line number (q to quit): 6
And lifts her leafy arms to pray;
```

If the user enters "q" the program will exit:
```
Enter the line number (q to quit): q
Bye bye! Have a good day!
```

## This is a sample output that has an  invalid inputs:

If the user enters something other than numbers and 'q' the program will display an error message:
```
Invalid input. Please enter a valid line number.
```
If the user enters number greater than 12 the program will display an error message:
```
Invalid input. Please enter a valid line number.
```
If the user enters number that is empty the program will display an error message:
```
Error: The selected line is empty. Please enter a valid line number. 
```