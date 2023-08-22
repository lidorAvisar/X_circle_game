import { useEffect, useState } from 'react';
import { AppContext } from './context/context'
import './App.css';
import Board from './components/Board';
import './components/style.css';
import ScoreBoard from './components/ScoreBoard';
import ResetButton from './components/ResetButton';
import ModalStartGame from './components/ModalStartGame';

function App() {

  const win_game = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = useState(null);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameStart, setGameStart] = useState(true);
  const [gameOver, setGameOver] = useState(false);



  const handleBoxClick = (boxIndex) => {

    const updateBoard = board.map((value, i) => {
      if (i === boxIndex) {
        return xPlaying === true ? "X" : "O";
      }
      else {
        return value
      }
    })

    setBoard(updateBoard);

    const winner = ckeckWinner(updateBoard)
    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore })
      }
      else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore })
      }
    }
    setXPlaying(!xPlaying);
  }


  const ckeckWinner = (board) => {
    for (let i = 0; i < win_game.length; i++) {
      const [x, y, z] = win_game[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        return board[x];
      }
    }
  }


  const resetBoard = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }


  return (
    <div className="App">
      <AppContext.Provider value={{
        setXPlaying
      }}>
        <ModalStartGame show={gameStart} onHide={() => setGameStart(false)} />
        <ScoreBoard scores={scores} xPlaying={xPlaying} />
        <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
        <ResetButton resetBoard={resetBoard} />
      </AppContext.Provider>

    </div>
  );
}

export default App;
