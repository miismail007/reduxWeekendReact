import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, editText, increment } from './redux/actions'

function App() {
  const dispatch = useDispatch()
  const counter = useSelector((state)=>state.counter)
  const text = useSelector((state)=>state.text)
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=>{
        dispatch(increment())
      }}>increment</button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>decrement</button>

      <h2>{text}</h2>
      <input onChange={(text)=>{
        dispatch(editText(text.target.value))
      }}/>
    </div>
  )
}

export default App
