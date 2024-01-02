import React from 'react'

import "./ResetButton.css"

export const ResetButton = ({resetBoard}) => {
  return (
    <button className='reset' onClick={resetBoard}>Reset</button>
  )
}
