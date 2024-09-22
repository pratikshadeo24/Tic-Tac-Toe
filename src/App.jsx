import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import {useState} from 'react';
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import GameOver from './components/GameOver.jsx';


const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function deriveActivePlayer(gameTurns){
    let curActivePlayer='X'
    if(gameTurns.length>0 && gameTurns[0].player==='X'){
        curActivePlayer='O'
    }
    return curActivePlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    'X' : 'Player-1',
    'O' : 'Player-2'
  });
  const activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = [...initialBoard.map((array)=> [...array])];
  let winner;
  for(const turn of gameTurns)
  {
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard[row][col]= player;
  }

  for( const combination of WINNING_COMBINATIONS){
    const firstCombination = gameBoard[combination[0].row][combination[0].column];
    const secondCombination = gameBoard[combination[1].row][combination[1].column];
    const thirdCombination = gameBoard[combination[2].row][combination[2].column];
    if(firstCombination && firstCombination===secondCombination && firstCombination===thirdCombination){
        winner=players[firstCombination];
    }
  }

  const hasDraw = (gameTurns.length===9 && !winner) ;

  function handleActivePlayer(rowIndex, colIndex){
    setGameTurns((prevGameTurn) =>
      {
      const updatedTurns = [{square: { row : rowIndex, col: colIndex }, player: activePlayer}, ...prevGameTurn];
      return updatedTurns;
      }
    )
    activePlayer = deriveActivePlayer(gameTurns);
  }
  function handleRestart(){
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers((prevPlayers) => {
        return {
         ...prevPlayers,
         [symbol] : newName,
        };
    });
  }

  return (
    <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player name="Player-1" symbol="X" isActive={activePlayer==='X'} onPlayerChange={handlePlayerNameChange} />
                <Player name="Player-2" symbol="O" isActive={activePlayer==='O'} onPlayerChange={handlePlayerNameChange} />
            </ol>
            { (winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} /> }
            <GameBoard onSelect={handleActivePlayer} activePlayerSymbol={activePlayer} board={gameBoard} />
        </div>
        <Log turns={gameTurns}/>
    </main>
  )
}

export default App
