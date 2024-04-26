import { useState } from "react"

function Input() {
    const [input,setinput]=useState("")

    function inputFunction() {
        alert(input)
        setinput("")
    }
  return (
    <div>
      <input type="text" value={input} onChange={(e)=>setinput(e.target.value)} />
      <button onClick={inputFunction}>click me</button>
    </div>
  )
}

export default Input
