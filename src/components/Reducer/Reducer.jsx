

import React, { useReducer } from 'react'

const HIDE_TEXT = "HIDE_TEXT"
const SHOW_TEXT = "SHOW_TEXT"
const CHANGE_STYLE = "CHANGE_STYLE"
const initialState ={
    showText : false,
    changeStyle : false
}

function reducer (state,action){
        switch (action.type) {
            case HIDE_TEXT:
                return {
                    ...state,
                    showText : false
                }
                case SHOW_TEXT:
                return {
                    ...state,
                    showText : true
                }
                case CHANGE_STYLE:
                return {
                    ...state,
                    changeStyle : !state?.changeStyle
                }
            default:
                break;
        }
}

const Reducer = () => {

    const [state,dispatch] = useReducer(reducer,initialState)
    console.log(state);
    
  return (
    <>
    <div>
    <div>Reducer</div>
    {
        state?.showText ? <h3 style={{backgroundColor: state?.changeStyle ? "black" : "white", color: state?.changeStyle ? "white" : "black" }}>Hi Welcome Sagar</h3> : null
    }
    
    <button onClick={()=>dispatch({type: "HIDE_TEXT"})}>Hide Text</button>
    <button onClick={()=>dispatch({type: "SHOW_TEXT"})}>Show Text</button>
    <button onClick={()=>dispatch({type: "CHANGE_STYLE"})}>Change Color</button>

    </div>

    </>
  )
}

export default Reducer