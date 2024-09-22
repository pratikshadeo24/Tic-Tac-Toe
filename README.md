# Tic Tac Toe

## Project Overview

The **Tic Tac Toe** app is a React-based implementation of the classic two-player game. The app allows players to alternate turns, track the game’s progress, and determine the winner or if the game ends in a draw. Users can also edit player names and restart the game after a round is finished.

## Components

### 1. App
- Location: `src/App.jsx`
- The main component that manages the game's state, player names, active turns, and renders the game board, player details, and the game log.
  - Tracks the turns taken by players and updates the board accordingly.
  - Determines the winner or if the game results in a draw.
  - Allows users to restart the game.

### 2. Player
- Location: `src/components/Player.jsx`
- Displays the player's name, symbol (X or O), and allows players to edit their name.
  - Props:
    - `name`: The default name of the player.
    - `symbol`: The symbol (X or O) representing the player.
    - `isActive`: A boolean indicating if it’s the active player's turn.
    - `onPlayerChange`: A callback function to handle the change of a player's name.

### 3. GameBoard
- Location: `src/components/GameBoard.jsx`
- Displays the 3x3 game grid and handles player moves.
  - Props:
    - `activePlayerSymbol`: The symbol (X or O) of the current active player.
    - `onSelect`: A callback function triggered when a player selects a square.
    - `board`: The current state of the game board, showing which squares are occupied by X or O.

### 4. GameOver
- Location: `src/components/GameOver.jsx`
- Displays the game over message, announcing the winner or if the game resulted in a draw. It also provides a button to restart the game.
  - Props:
    - `winner`: The name of the winning player, or null if it’s a draw.
    - `onRestart`: A callback function to restart the game.

### 5. Log
- Location: `src/components/Log.jsx`
- Displays a log of each move made by the players, showing which square was selected by whom.
  - Props:
    - `turns`: An array of turn objects, each containing details of the player and the square selected.

## Utility Functions

### deriveActivePlayer
- Location: `src/App.jsx`
- Determines which player is the active player based on the number of turns taken.

## Data

### WINNING_COMBINATIONS
- Location: `src/winning-combinations.js`
- An array of all possible winning combinations in a Tic Tac Toe game.

## How to Install

1. Clone the repository:
    ```bash
    git clone <repository_url>
    cd TicTacToe
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

## How to Play

1. The game begins with Player 1 (X) and Player 2 (O). Player names can be edited by clicking the "Edit" button next to each player's name.
2. Players take turns selecting squares on the 3x3 grid. Player 1 (X) goes first.
3. The game board automatically tracks which squares are selected and by whom.
4. The game ends when either:
   - One player successfully places three of their symbols in a row (horizontally, vertically, or diagonally).
   - All nine squares are filled, resulting in a draw.
5. At the end of the game, the app will display either the winner or a draw message.
6. Click the "Rematch" button to restart the game and play again.

## Example

1. Player 1 (X) and Player 2 (O) start with Player 1 making the first move.
2. As players take turns, their moves are logged and displayed.
3. Once a player wins or the game ends in a draw, the game is over, and the winner is announced.
4. Players can start a new game by clicking the "Rematch" button.

