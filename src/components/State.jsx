import React, { useState } from 'react'

const State = () => {
    const [Counter,setCounter]= useState(0)
    function handleIncrease(){
        setCounter(Counter + 1)
    }
    function handleDecrease(){
        setCounter(Counter - 1)
    }
  return (
    <>
    <button onClick={handleDecrease}> - </button>
    <div>{Counter}</div>
    <button onClick={handleIncrease}> + </button>
    </>
  )
}

export default State