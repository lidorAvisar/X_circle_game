import React from 'react'
import './square.css'

const Square = ({ value, onClick }) => {

  const style = value === "X" ? "square X" : "square O";

  return (
    <div>
      <button className={style} onClick={onClick}>{value}</button>
    </div>
  )
}

export default Square