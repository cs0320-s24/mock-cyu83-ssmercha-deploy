> **GETTING STARTED:** You should likely start with the `/mock` folder from your solution code for the mock gearup.

# Project Details

Project Name: Mock
Team members: Catherine Yu (cyu83) and Sana Merchant (ssmercha)
Total time estimated: 12 hours
PROJECT REPO: https://github.com/cs0320-s24/mock-cyu83-ssmercha.git

# Design Choices

REPLHistory:

- REPLHistory contains state that is shared by this and REPLInput. It contains a list of history objects, which keep track of each entry's command input, response output, and which mode the user was in when they inputted this command. We shared this state so that REPLInput could update it with the command input/output accordingly when the user submitted a command.
- This function ensures that all history entries are printed out in the right format (eg table, string, etc). We have this separate from the REPLInput so that the input does not have to worry about displaying the data; only history needs to worry about that.

REPLInput

- REPLInput contains state for history and the mode. It needs access to the history state shared with REPLHistory in order to update it with the user's inputted commands.
- REPLInput finds the function corresponding to the user's input, and calls that function, which is handled in REPLFunctions.

REPLFunctions

- This is a separate file so that a developer could extend our program by creating their own functions.
- This file implements mocked functions for loading, viewing, searching, and changing the mode.

FunctionInterface

- This interface defines what a function should do, and allows the user to implement whatever functions they want for the user to be able to input.
- This allows a developer to add their own functions to let the user input.
- This also allows us to used mocked data/search functionality, allowing us to have a functional program while the search functionality may not be connected yet.

# Errors/Bugs

- Running <npm run test> or <npm run test:unit> causes an error and we are unsure of why this occurs. However, all of our tests can still be run using <npm run test:e2e>.

# Tests

We wrote end-to-end tests to make sure that our website was functioning properly and as expected. We wrote tests about many cases, including but not limited to:

- making sure the user starts in brief mode, and that they are able to switch between modes
- searching for a term that produces no results, 1 result, and multiple results
- not being able to view/search without loading first
- error messages:
  - load/view/search for a file that doesn't exist
  - inorrect # of arguments for a command
  - searching in a column that doesn't exist
  - loading 2 csv files, and not being able to access the first file
  - commands that don't exist

# How to

Run code:

- In the terminal, run <npm run build>, followed by <npm run start>. Follow the link provided by this (http://localhost:8000/).

Using the website:

- In order to input commands, press the login button.
- A file must be loaded before the user is able to view or search the file. Note that only one file may be loaded at a time.
- Commands we have implemented include:
  - "load"
    - "load filename" loads the given file.
  - "view"
    - "view filename" displays the given file in a table.
  - "search"
    - "search filename term" searches the entire file for the given term.
    - "search filename term headerType colSpecifier" searches the specified column for the given term. note that headerType should either be "i" representing indices or "n" representing column names.
  - "mode"
    - "mode brief" to switch to brief mode, which only displays the command output.
    - "mode verbose" switches to verbose mode, which displays both command input and command output.

Run tests:

- In the terminal, run <npm run test:e2e> to test our end-to-end tests.

# Collaboration

Gearup code - we reused code from the gearup which sets up the login/sign out button and ensures that commands can only be entered if the user is logged in. It also saves the inputted command history. We have thoroughly tested this code.
_(state all of your sources of collaboration past your project partner. Please refer to the course's collaboration policy for any further questions.)_
