import React from 'react'
import './board.css'
import Square from './Square'

const Board = ({ board, onClick }) => {
  return (
    <div className='board'>
      {board.map((value, i) => {
        return (
          <Square value={value} onClick={() => value === null && onClick(i)} />
        )
      })}

    </div>
  )
}

export default Board