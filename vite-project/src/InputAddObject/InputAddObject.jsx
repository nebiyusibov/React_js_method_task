import { useState } from "react"

function InputAddObject() {
    const [input1,setinput1]=useState("")
    const [input2,setinput2]=useState("")
    const [input3,setinput3]=useState("")
    const [todos,settodos]=useState([])

    function addList() {
        settodos([...todos,input1] , [...todos,input2], [...todos,input3])
    }
  return (
    <div>
      <input type="text" value={input1} onChange={(e)=>setinput1(e.target.value)}/>
      <input type="text" value={input2} onChange={(e)=>setinput2(e.target.value)}/>
      <input type="text" value={input3} onChange={(e)=>setinput3(e.target.value)}/>
      <button onClick={addList}>button</button>
      {todos.map((x,i)=><h3 key={i}>{x}</h3>)}
    </div>
  )
}

export default InputAddObject
