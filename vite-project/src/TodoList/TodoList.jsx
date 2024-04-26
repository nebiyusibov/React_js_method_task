import { useState } from "react"

function TodoList() {
    const [input,setinput]=useState("")
    const [todos,settodos]=useState([])

    function toDoFunction() {
        settodos([... todos,input])
    }
  return (
    <div>
      <input type="text"  value={input} onChange={(e)=>setinput(e.target.value)}/>
      <button onClick={toDoFunction}>list button</button>
      {todos.map((x,i)=><h2 key={i}>{x}</h2>)}
    </div>
  )
}

export default TodoList
